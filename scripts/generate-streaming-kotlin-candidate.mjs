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
const productionProperties = {
  MIRA_KOTLIN_GROUP_ID: process.env.MIRA_KOTLIN_GROUP_ID,
  MIRA_KOTLIN_ARTIFACT_ID: process.env.MIRA_KOTLIN_ARTIFACT_ID,
  MIRA_KOTLIN_PACKAGE_NAME: process.env.MIRA_KOTLIN_PACKAGE_NAME,
  MIRA_KOTLIN_VERSION: process.env.MIRA_KOTLIN_VERSION,
};

if (isProductionGenerator) {
  const missingProperties = Object.entries(productionProperties)
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingProperties.length > 0) {
    throw new Error(
      `Missing production SDK environment variables: ${missingProperties.join(", ")}`,
    );
  }

  const mavenIdentifier = /^[A-Za-z0-9_.-]+$/;
  const kotlinPackage = /^[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)+$/;
  const semanticVersion = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;

  if (!mavenIdentifier.test(productionProperties.MIRA_KOTLIN_GROUP_ID)) {
    throw new Error("MIRA_KOTLIN_GROUP_ID is not a valid Maven identifier");
  }
  if (!mavenIdentifier.test(productionProperties.MIRA_KOTLIN_ARTIFACT_ID)) {
    throw new Error("MIRA_KOTLIN_ARTIFACT_ID is not a valid Maven identifier");
  }
  if (!kotlinPackage.test(productionProperties.MIRA_KOTLIN_PACKAGE_NAME)) {
    throw new Error("MIRA_KOTLIN_PACKAGE_NAME is not a valid Kotlin package");
  }
  if (!semanticVersion.test(productionProperties.MIRA_KOTLIN_VERSION)) {
    throw new Error("MIRA_KOTLIN_VERSION must be a semantic version");
  }

  if (
    process.env.MIRA_KOTLIN_ALLOW_PLACEHOLDER_IDENTITY !== "true" &&
    (productionProperties.MIRA_KOTLIN_GROUP_ID === "com.example" ||
      productionProperties.MIRA_KOTLIN_ARTIFACT_ID === "replace-before-publishing" ||
      productionProperties.MIRA_KOTLIN_PACKAGE_NAME.startsWith("com.example."))
  ) {
    throw new Error(
      "Placeholder Maven identity is forbidden outside explicit smoke tests",
    );
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
  const openApiToolsConfiguration = JSON.parse(
    await readFile(path.join(repositoryRoot, "openapitools.json"), "utf8"),
  );
  const productionConfiguration =
    openApiToolsConfiguration["generator-cli"].generators[generatorKey];
  const additionalProperties = {
    ...productionConfiguration.additionalProperties,
    groupId: productionProperties.MIRA_KOTLIN_GROUP_ID,
    artifactId: productionProperties.MIRA_KOTLIN_ARTIFACT_ID,
    artifactVersion: productionProperties.MIRA_KOTLIN_VERSION,
    packageName: productionProperties.MIRA_KOTLIN_PACKAGE_NAME,
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
      productionProperties.MIRA_KOTLIN_PACKAGE_NAME,
    ),
  );
} else {
  await copyFile(contractTest, generatedContractTest);
}

console.log(`Generated ${generatorKey} at ${outputDirectory}`);