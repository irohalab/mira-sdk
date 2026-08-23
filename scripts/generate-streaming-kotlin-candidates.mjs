import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const generatorScript = path.join(
  repositoryRoot,
  "scripts",
  "generate-streaming-kotlin-candidate.mjs",
);
const generatorKeys = [
  "streaming-kotlin-retrofit-kotlinx",
  "streaming-kotlin-retrofit-gson",
  "streaming-kotlin-okhttp-moshi",
  "streaming-kotlin-ktor-jackson",
  "streaming-kotlin-multiplatform",
];

if (process.env.MIRA_KOTLIN_OUTPUT_DIR) {
  throw new Error("MIRA_KOTLIN_OUTPUT_DIR cannot be shared by all candidates");
}

for (const generatorKey of generatorKeys) {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [generatorScript, generatorKey], {
      cwd: repositoryRoot,
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
            ? `${generatorKey} terminated by signal ${signal}`
            : `${generatorKey} exited with status ${code}`,
        ),
      );
    });
  });
}

console.log(`Generated ${generatorKeys.length} Kotlin client candidates`);