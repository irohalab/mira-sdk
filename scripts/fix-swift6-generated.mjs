import { readFile, writeFile } from "node:fs/promises";

const file = new URL(
  "../streaming-sdk/swift6/Sources/MiraStreamingSDK/Models/ItemPropertyValueValue.swift",
  import.meta.url,
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
