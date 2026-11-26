import { mkdirSync, writeFileSync } from "node:fs";

// Winner of a 10-candidate head-to-head gauntlet against the judge's brief:
// the joke is the weather itself (rain falling up), delivered as a flat
// official advisory whose punchline is "hold their umbrellas underneath".
const LINE = "In Dribbleton, the rain falls up today. Residents are advised to hold their umbrellas underneath.";
const OUTPUT_FILE = "/output/entry.txt";

// Gate: sealed scorer requires UTF-8 text of 1-120 characters, not whitespace-only.
function validateLine(line: string): { chars: number; bytes: number } {
  const chars = [...line].length;
  const bytes = Buffer.byteLength(line, "utf8");
  if (chars < 1 || chars > 120 || line.trim().length === 0) {
    throw new Error(`entry must be 1-120 characters, got ${chars}`);
  }
  if (bytes > 120) {
    throw new Error(`entry must fit 120 bytes, got ${bytes}`);
  }
  return { chars, bytes };
}

const { chars, bytes } = validateLine(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`wrote ${chars} chars (${bytes} bytes) to ${OUTPUT_FILE}`);
