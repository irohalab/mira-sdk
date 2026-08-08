import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const outputDirectory = path.resolve(
  process.env.MIRA_SWIFT_OUTPUT_DIR ||
    path.join(repositoryRoot, ".generated", "MiraStreamingSDK"),
);
const file = path.join(
  outputDirectory,
  "Sources",
  "MiraStreamingSDK",
  "Models",
  "ItemPropertyValueValue.swift",
);

const invalidCaseName = "typeArrayOfArrayOfString: String";
const validCaseName = "typeArrayOfStringDictionary";
const source = await readFile(file, "utf8");
const occurrences = source.split(invalidCaseName).length - 1;

if (occurrences !== 3) {
  throw new Error(
    `Expected 3 invalid Swift case-name occurrences, found ${occurrences}. ` +
      "The generator output changed; review this workaround.",
  );
}

await writeFile(file, source.replaceAll(invalidCaseName, validCaseName));

async function replaceExactlyOnce(filePath, replacements) {
  let contents = await readFile(filePath, "utf8");

  for (const [before, after] of replacements) {
    const count = contents.split(before).length - 1;
    if (count !== 1) {
      throw new Error(
        `Expected one occurrence of ${JSON.stringify(before)} in ${filePath}, ` +
          `found ${count}. The generator output changed; review this workaround.`,
      );
    }
    contents = contents.replace(before, after);
  }

  await writeFile(filePath, contents);
}

await replaceExactlyOnce(path.join(outputDirectory, "MiraStreamingSDK.podspec"), [
  [
    "git@github.com:OpenAPITools/openapi-generator.git",
    "https://github.com/irohalab/mira-streaming-ios-sdk.git",
  ],
  ["s.authors = 'OpenAPI Generator'", "s.authors = 'irohalab'"],
  ["s.license = 'Proprietary'", "s.license = 'Apache-2.0'"],
  [
    "https://github.com/OpenAPITools/openapi-generator",
    "https://github.com/irohalab/mira-streaming-ios-sdk",
  ],
]);

await replaceExactlyOnce(path.join(outputDirectory, "README.md"), [
  [
    "## Installation\n\n### Carthage",
    "## Installation\n\n" +
      "### Swift Package Manager\n\n" +
      "In Xcode, add `https://github.com/irohalab/mira-streaming-ios-sdk` " +
      "as a package dependency.\n\n" +
      "### Carthage",
  ],
]);
