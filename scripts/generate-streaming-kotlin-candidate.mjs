import { access, copyFile, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const generatorKey = process.argv[2];

if (!generatorKey?.match(/^streaming-kotlin-[a-z0-9-]+$/)) {
  throw new Error("Expected a streaming-kotlin-* generator key");
}

const isProductionGenerator = generatorKey === "streaming-kotlin-jvm";
let productionConfiguration;
let productionProperties;

if (isProductionGenerator) {
  const openApiToolsConfiguration = JSON.parse(
    await readFile(path.join(repositoryRoot, "openapitools.json"), "utf8"),
  );
  productionConfiguration =
    openApiToolsConfiguration["generator-cli"].generators[generatorKey];
  productionProperties = {
    groupId: productionConfiguration.additionalProperties.groupId,
    artifactId: productionConfiguration.additionalProperties.artifactId,
    packageName: productionConfiguration.additionalProperties.packageName,
    version: (
      await readFile(
        path.join(repositoryRoot, "streaming-spec", "kotlin-sdk-version.txt"),
        "utf8",
      )
    ).trim(),
  };

  const mavenIdentifier = /^[A-Za-z0-9_.-]+$/;
  const kotlinPackage = /^[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)+$/;
  const semanticVersion = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;

  if (!mavenIdentifier.test(productionProperties.groupId)) {
    throw new Error("Configured Kotlin groupId is not a valid Maven identifier");
  }
  if (!mavenIdentifier.test(productionProperties.artifactId)) {
    throw new Error("Configured Kotlin artifactId is not a valid Maven identifier");
  }
  if (!kotlinPackage.test(productionProperties.packageName)) {
    throw new Error("Configured Kotlin packageName is not a valid Kotlin package");
  }
  if (!semanticVersion.test(productionProperties.version)) {
    throw new Error("Configured Kotlin SDK version must be a semantic version");
  }
}

const defaultOutputDirectory = path.join(
  repositoryRoot,
  ".generated",
  generatorKey,
);
const outputDirectory = path.resolve(
  process.env.MIRA_KOTLIN_OUTPUT_DIR || defaultOutputDirectory,
);
const filesystemRoot = path.parse(outputDirectory).root;

if (outputDirectory === filesystemRoot || outputDirectory === repositoryRoot) {
  throw new Error(`Refusing to clean unsafe SDK output path: ${outputDirectory}`);
}

const generatorCli = path.join(
  repositoryRoot,
  "node_modules",
  "@openapitools",
  "openapi-generator-cli",
  "main.js",
);
await access(generatorCli);
await rm(outputDirectory, { recursive: true, force: true });

let generatorArguments = [
  generatorCli,
  "generate",
  "--generator-key",
  generatorKey,
];

if (isProductionGenerator) {
  const additionalProperties = {
    ...productionConfiguration.additionalProperties,
    groupId: productionProperties.groupId,
    artifactId: productionProperties.artifactId,
    artifactVersion: productionProperties.version,
    packageName: productionProperties.packageName,
  };

  generatorArguments = [
    generatorCli,
    "generate",
    "--input-spec",
    path.join(repositoryRoot, productionConfiguration.glob),
    "--generator-name",
    productionConfiguration.generatorName,
    "--output",
    outputDirectory,
    "--git-host",
    productionConfiguration.gitHost,
    "--git-user-id",
    productionConfiguration.gitUserId,
    "--git-repo-id",
    productionConfiguration.gitRepoId,
    `--additional-properties=${Object.entries(additionalProperties)
      .map(([name, value]) => `${name}=${value}`)
      .join(",")}`,
  ];
}

await new Promise((resolve, reject) => {
  const child = spawn(
    process.execPath,
    generatorArguments,
    {
      cwd: repositoryRoot,
      env: {
        ...process.env,
        MIRA_SWIFT_OUTPUT_DIR:
          process.env.MIRA_SWIFT_OUTPUT_DIR ||
          path.join(repositoryRoot, ".generated", "MiraStreamingSDK"),
        MIRA_KOTLIN_OUTPUT_DIR: outputDirectory,
      },
      stdio: "inherit",
    },
  );

  child.on("error", reject);
  child.on("exit", (code, signal) => {
    if (code === 0) {
      resolve();
      return;
    }

    reject(
      new Error(
        signal
          ? `Command terminated by signal ${signal}`
          : `Command exited with status ${code}`,
      ),
    );
  });
});

if (isProductionGenerator) {
  await new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [path.join(repositoryRoot, "scripts", "fix-streaming-kotlin-generated.mjs")],
      {
        cwd: repositoryRoot,
        env: {
          ...process.env,
          MIRA_KOTLIN_OUTPUT_DIR: outputDirectory,
          MIRA_KOTLIN_GROUP_ID: productionProperties.groupId,
          MIRA_KOTLIN_ARTIFACT_ID: productionProperties.artifactId,
          MIRA_KOTLIN_PACKAGE_NAME: productionProperties.packageName,
          MIRA_KOTLIN_VERSION: productionProperties.version,
        },
        stdio: "inherit",
      },
    );

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          signal
            ? `Kotlin postprocessor terminated by signal ${signal}`
            : `Kotlin postprocessor exited with status ${code}`,
        ),
      );
    });
  });
}

const contractTest = path.join(
  repositoryRoot,
  "scripts",
  "kotlin-candidate-tests",
  `${isProductionGenerator ? "streaming-kotlin-retrofit-kotlinx" : generatorKey}.kt`,
);
await access(contractTest);
const testSourceDirectories = [
  path.join(outputDirectory, "src", "test", "kotlin"),
  path.join(outputDirectory, "src", "commonTest", "kotlin"),
];
let testSourceDirectory;

for (const candidate of testSourceDirectories) {
  try {
    await access(candidate);
    testSourceDirectory = candidate;
    break;
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}

if (!testSourceDirectory) {
  throw new Error(`Generated test source directory not found: ${outputDirectory}`);
}

const generatedContractTest = path.join(
  testSourceDirectory,
  "StreamingContractTest.kt",
);

if (isProductionGenerator) {
  const contractTestSource = await readFile(contractTest, "utf8");
  await writeFile(
    generatedContractTest,
    contractTestSource.replaceAll(
      "org.openapitools.client",
      productionProperties.packageName,
    ),
  );
} else {
  await copyFile(contractTest, generatedContractTest);
}

console.log(`Generated ${generatorKey} at ${outputDirectory}`);