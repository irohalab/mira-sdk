import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const generatorKey = process.argv[2];
const isProductionGenerator = generatorKey === "streaming-kotlin-jvm";

if (!generatorKey?.match(/^streaming-kotlin-[a-z0-9-]+$/)) {
  throw new Error("Expected a streaming-kotlin-* generator key");
}

const outputDirectory = path.resolve(
  process.env.MIRA_KOTLIN_OUTPUT_DIR ||
    path.join(repositoryRoot, ".generated", generatorKey),
);

async function run(command, arguments_, options = {}) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, arguments_, {
      cwd: options.cwd || repositoryRoot,
      env: process.env,
      stdio: "inherit",
    });

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
}

await run(process.execPath, [
  path.join(repositoryRoot, "scripts", "generate-streaming-kotlin-candidate.mjs"),
  generatorKey,
]);
const gradleTasks = ["gradlew", "test", "assemble"];

if (isProductionGenerator) {
  gradleTasks.push(
    "generatePomFileForMavenPublication",
    "sourcesJar",
    "plainJavadocJar",
  );
}

await run("bash", gradleTasks, { cwd: outputDirectory });

if (isProductionGenerator) {
  const pom = await readFile(
    path.join(outputDirectory, "build", "publications", "maven", "pom-default.xml"),
    "utf8",
  );
  const compileScopes = pom.match(/<scope>compile<\/scope>/g)?.length || 0;
  const runtimeScopes = pom.match(/<scope>runtime<\/scope>/g)?.length || 0;

  if (compileScopes !== 7 || runtimeScopes !== 0) {
    throw new Error(
      `Expected 7 compile-scoped and 0 runtime-scoped POM dependencies, found ${compileScopes} and ${runtimeScopes}`,
    );
  }
}

console.log(`Tested and assembled ${generatorKey}`);