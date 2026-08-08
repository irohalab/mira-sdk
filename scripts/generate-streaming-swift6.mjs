import { access, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const defaultOutputDirectory = path.join(
  repositoryRoot,
  ".generated",
  "MiraStreamingSDK",
);
const outputDirectory = path.resolve(
  process.env.MIRA_SWIFT_OUTPUT_DIR || defaultOutputDirectory,
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

const environment = {
  ...process.env,
  MIRA_SWIFT_OUTPUT_DIR: outputDirectory,
};

async function run(command, arguments_) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, arguments_, {
      cwd: repositoryRoot,
      env: environment,
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
  generatorCli,
  "generate",
  "--generator-key",
  "streaming-swift6",
]);
await run(process.execPath, [
  path.join(repositoryRoot, "scripts", "fix-swift6-generated.mjs"),
]);

console.log(`Generated MiraStreamingSDK at ${outputDirectory}`);
