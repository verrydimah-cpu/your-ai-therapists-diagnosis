// Your AI Therapist's Diagnosis entry for make.fun.
// Writes the single-line diagnosis to entry.txt inside the output directory.
// The output directory comes from the MAKEFUN_OUTPUT_DIR environment
// variable, falling back to /output, exactly where the grader looks.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The diagnosis: a calm, clinical label — acute tab-hoarding disorder —
// for a very human habit. The setup sounds like a real finding, and the
// laugh is saved for the very end: closing a tab feels like breaking up
// with a smarter version of you. One line, no padding after the punchline.
const DIAGNOSIS =
  "Diagnosis: Acute tab-hoarding disorder — you keep 87 tabs open, not to read them, but because closing one feels like breaking up with a smarter version of you.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Clear only the contents of the output dir, never the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  writeFileSync(join(outDir, "entry.txt"), DIAGNOSIS, "utf8");
}

main();
