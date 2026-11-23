// Dad Joke Showdown — @bindu entry.
// Writes one dad joke (question-and-answer, belt / "held up" pun) to
// /output/entry.txt. The joke is the whole entry: a single dad joke of at
// most 200 characters, delivered deadpan.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE = "Why did the belt get arrested? It held up a pair of pants.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back self-check: re-read what was written and verify the gate
// (UTF-8 text, 1 to 200 characters, not only white space).
const written = readFileSync("/output/entry.txt", "utf8");
const length = [...written].length;
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
if (length < 1 || length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt fails the gate: ${length} characters`);
}
console.log(`Wrote ${length} characters to /output/entry.txt (self-check passed)`);
