#!/usr/bin/env node

import { readFileSync } from "node:fs";

const [basePath, currentPath] = process.argv.slice(2);
if (!basePath || !currentPath) {
  console.error("Usage: check-readme-order.mjs BASE_README CURRENT_README");
  process.exit(2);
}

const SORTED_SECTION = "Community Extensions";
const IGNORED_SECTIONS = new Set(["Contents"]);

function headingName(markdown) {
  const linkedHeading = markdown.match(/^\[([^\]]+)\]\([^)]+\)$/);
  return linkedHeading ? linkedHeading[1] : markdown;
}

function parseSections(path) {
  const sections = new Map();
  let section = null;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const heading = line.match(/^#{2,3}\s+(.+?)\s*$/);
    if (heading) {
      section = headingName(heading[1]);
      if (!sections.has(section)) {
        sections.set(section, []);
      }
      continue;
    }

    if (!section || !line.startsWith("- [")) {
      continue;
    }

    const item = line.match(/^- \[(.*?)\]\(([^)\s]+)(?:\s+[^)]*)?\)/);
    if (!item) {
      continue;
    }

    const label = item[1].replaceAll("`", "").trim();
    sections.get(section).push({
      sortKey: label.toLowerCase(),
      url: item[2],
    });
  }

  return sections;
}

const baseSections = parseSections(basePath);
const currentSections = parseSections(currentPath);
let orderingIsValid = true;

const sortedEntries = currentSections.get(SORTED_SECTION) ?? [];
for (let index = 1; index < sortedEntries.length; index += 1) {
  if (sortedEntries[index - 1].sortKey > sortedEntries[index].sortKey) {
    orderingIsValid = false;
  }
}

for (const [section, currentEntries] of currentSections) {
  if (section === SORTED_SECTION || IGNORED_SECTIONS.has(section)) {
    continue;
  }

  const baseEntries = baseSections.get(section) ?? [];
  if (baseEntries.length === 0) {
    continue;
  }

  const isExisting = (entry) =>
    baseEntries.some(
      (baseEntry) =>
        baseEntry.url === entry.url || baseEntry.sortKey === entry.sortKey,
    );

  let foundNewEntry = false;
  for (const entry of currentEntries) {
    const entryAlreadyExists = isExisting(entry);
    if (entryAlreadyExists && foundNewEntry) {
      orderingIsValid = false;
    } else if (!entryAlreadyExists) {
      foundNewEntry = true;
    }
  }
}

if (!orderingIsValid) {
  const message = "Thanks for contributing! Please move your new entry to follow the ordering rules in CONTRIBUTING.md, then update this pull request.";
  console.error(`::error file=${currentPath},title=README entry order::${message}`);
  process.exit(1);
}

console.log("README entries follow the required ordering.");
