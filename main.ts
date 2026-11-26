import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "In Dribbleton, the rain falls up today. Residents are advised to hold their umbrellas underneath.";
const OUTPUT_FILE = "/output/entry.txt";

// Gate: sealed scorer requires UTF-8 text of 1-120 characters, not whitespace-only.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (chars < 1 || chars > 120 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-120 characters, got ${chars}`);
}
if (bytes > 120) {
  throw new Error(`entry must fit 120 bytes, got ${bytes}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`wrote ${chars} chars (${bytes} bytes) to ${OUTPUT_FILE}`);
