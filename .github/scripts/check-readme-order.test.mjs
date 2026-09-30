import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

const entry = (name) => `- [${name}](https://example.com/${name}) - Description.`;
const communityHeading = "## Extensions\n### [Community Extensions](https://duckdb.org/community_extensions/)";
const subgroupBase = [
  "## Tools Powered by DuckDB",
  "### Business Intelligence & Dashboards",
  "#### Free & Open Source",
  entry("Pondview"),
  "#### Free (Proprietary / Source-Available)",
  entry("Proprietary"),
  "### Fun & Demos",
  "#### Free & Open Source",
  entry("Demo"),
].join("\n");

const cases = [
  {
    name: "append to a flat section",
    base: `## Resources\n${entry("Existing")}`,
    current: `## Resources\n${entry("Existing")}\n${entry("New")}`,
    valid: true,
  },
  {
    name: "reject insertion before an existing flat entry",
    base: `## Resources\n${entry("Existing")}`,
    current: `## Resources\n${entry("New")}\n${entry("Existing")}`,
    valid: false,
  },
  {
    name: "append to a licensing subgroup before another subgroup",
    base: subgroupBase,
    current: subgroupBase.replace(entry("Pondview"), `${entry("Pondview")}\n${entry("DUX")}`),
    valid: true,
  },
  {
    name: "reject insertion within a subgroup despite matching entries in another category",
    base: subgroupBase,
    current: subgroupBase.replace(entry("Pondview"), `${entry("Demo")}\n${entry("Pondview")}`),
    valid: false,
  },
  {
    name: "move an entry to the bottom of its destination subgroup",
    base: `${subgroupBase}\n${entry("DUX")}`,
    current: subgroupBase.replace(entry("Pondview"), `${entry("Pondview")}\n${entry("DUX")}`),
    valid: true,
  },
  {
    name: "reset subgroup context at a top-level section",
    base: `${subgroupBase}\n## Resources\n${entry("Existing")}`,
    current: `${subgroupBase}\n${entry("NewDemo")}\n## Resources\n${entry("Existing")}\n${entry("NewResource")}`,
    valid: true,
  },
  {
    name: "allow updating an existing description in place",
    base: `## Resources\n${entry("Existing")}\n${entry("Last")}`,
    current: `## Resources\n${entry("Existing").replace("Description.", "Updated description.")}\n${entry("Last")}`,
    valid: true,
  },
  {
    name: "keep community extensions case-insensitively sorted",
    base: `${communityHeading}\n${entry("`beta`")}`,
    current: `${communityHeading}\n${entry("`Alpha`")}\n${entry("`beta`")}`,
    valid: true,
  },
  {
    name: "reject unsorted community extensions",
    base: `${communityHeading}\n${entry("`beta`")}`,
    current: `${communityHeading}\n${entry("`beta`")}\n${entry("`Alpha`")}`,
    valid: false,
  },
  {
    name: "ignore contents ordering",
    base: `## Contents\n${entry("Existing")}`,
    current: `## Contents\n${entry("New")}\n${entry("Existing")}`,
    valid: true,
  },
];

for (const { name, base, current, valid } of cases) {
  test(name, () => {
    const directory = mkdtempSync(join(tmpdir(), "readme-order-"));
    try {
      const basePath = join(directory, "base.md");
      const currentPath = join(directory, "current.md");
      writeFileSync(basePath, base);
      writeFileSync(currentPath, current);
      const result = spawnSync(process.execPath, [
        new URL("./check-readme-order.mjs", import.meta.url).pathname,
        basePath,
        currentPath,
      ], { encoding: "utf8" });
      assert.equal(result.status, valid ? 0 : 1, result.stderr || result.stdout);
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
}
