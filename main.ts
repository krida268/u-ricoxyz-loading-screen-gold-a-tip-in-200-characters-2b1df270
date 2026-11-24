// Loading Screen Gold: A Tip in 200 Characters
// One sharp, funny loading-screen tip for stressed developers and AI coding agents.
// The program writes the tip to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Loading… your AI just read the error you scrolled past three times. The fix was on line 3. It isn't angry — just disappointed.";

// Gate self-check (mirrors the sealed scorer): 1–200 characters, one line,
// not only white space, valid UTF-8 by construction of a JS string.
const chars = [...TIP];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`tip is ${chars.length} characters, must be 1-200`);
}
if (TIP.trim().length === 0 || TIP.includes("\n")) {
  throw new Error("tip must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TIP, "utf8");
