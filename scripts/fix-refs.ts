/* eslint-disable */
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

// CONFIGURATION
const INPUT_FILE = path.join(__dirname, '../_api.yml');  // Your output from openapi-merger
const OUTPUT_FILE = path.join(__dirname, '../api.yml');

// Helper to check if an object is a generic record
function isObject(item: any): item is Record<string, any> {
    return item && typeof item === 'object' && !Array.isArray(item);
}

// Recursive function to traverse the spec and rewrite refs
function processRefs(obj: any) {
    if (Array.isArray(obj)) {
        obj.forEach(processRefs);
    } else if (isObject(obj)) {
        for (const key in obj) {
            if (key === '$ref' && typeof obj[key] === 'string') {
                const ref = obj[key] as string;

                // Check if ref is a file path with a hash (e.g. "./item.yml#/components/schemas/Item")
                if (ref.includes('#') && !ref.startsWith('#') && !ref.startsWith('https://')) {

                    // Logic: Split by '#' and take the last part.
                    // "./dir/item.yml#/components/schemas/Item" -> "#/components/schemas/Item"
                    const parts = ref.split('#');
                    const hashPart = parts[1];

                    // Update the reference
                    obj[key] = `#${hashPart}`;

                    console.log(`Fixed: ${ref} -> ${obj[key]}`);
                }
            } else {
                // Continue recursion
                processRefs(obj[key]);
            }
        }
    }
}

async function main() {
    try {
        // 1. Read the file
        const fileContents = fs.readFileSync(INPUT_FILE, 'utf8');

        // 2. Parse YAML
        const doc = yaml.load(fileContents);

        // 3. Process the document
        console.log("Processing references...");
        processRefs(doc);

        // 4. Dump back to YAML
        // 'noRefs: true' prevents js-yaml from using distinct anchors (&ref) which can be noisy
        const newYaml = yaml.dump(doc, { noRefs: true, lineWidth: -1 });

        // 5. Write file
        fs.writeFileSync(OUTPUT_FILE, newYaml);
        console.log(`\nSuccess! Wrote fixed spec to ${OUTPUT_FILE}`);
    } catch (e) {
        console.error("Error processing file:", e);
    }
}

main();