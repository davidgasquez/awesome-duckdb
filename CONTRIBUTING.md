# Contribution Guidelines

By participating in this project, you agree to abide by its [Contributor Code of Conduct](CODE_OF_CONDUCT.md).

## Adding an entry

- Check that the project or resource is not already listed.
- Choose the most specific existing section.
- Use the canonical project or repository URL.
- Follow the surrounding Markdown format. Most entries use:
  `- [Name](https://example.com) - A concise, factual description.`
- Describe what the project does and how it relates to DuckDB. Avoid promotional claims.
- Keep the pull request focused and disclose your affiliation when submitting your own project.

### Entry order

Most sections preserve insertion order. **Append new entries to the bottom of the relevant list**, even when another entry seems similar. Do not alphabetize or otherwise reposition existing entries.

The **Community Extensions** section is the exception: insert extensions in case-insensitive lexicographic order by extension name. Community extension names use backticks, for example:
``- [`extension_name`](https://example.com) - A concise description.``

When updating an existing entry, leave it in its current position. When moving an entry to a different section, place it according to the destination section's rule.

## Before opening a pull request

- Check the Markdown diff for unrelated changes.
- Verify that every new URL works without authentication.
- Confirm that each new entry is appended, or lexicographically placed when it is a Community Extension.
