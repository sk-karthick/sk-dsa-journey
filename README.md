# DSA Journey

Personal data structures and algorithms practice in TypeScript and JavaScript.

## Focus

This repository is split into two learning areas:

- `ReStart/`: the current, cleaner DSA restart path. New problems should go here.
- `src/`: older practice, experiments, and legacy solutions kept for reference.

## Project Structure

```text
.
|-- ReStart/
|   |-- NeetCode150/
|   |   |-- ArrayAndHashings/
|   |   `-- TwoPointers/
|   `-- Practice/
|       |-- Array/
|       `-- TwoPointers/
|-- src/
|   |-- array/
|   |-- graph/
|   |-- trees/
|   |-- leetCode/
|   |-- neetcode/
|   |-- fundamentals/
|   `-- practice_in-dom/
|-- docs/
|-- package.json
|-- tsconfig.json
`-- tsconfig.restart.json
```

More details are in [docs/STRUCTURE.md](docs/STRUCTURE.md).

## Setup

```bash
npm install
```

`node_modules/` is intentionally ignored and should not be committed.

## Common Commands

Run the current watched practice file:

```bash
npm run dev
```

Run any TypeScript file:

```bash
npm run run -- ReStart/NeetCode150/TwoPointers/TwoSumII.ts
```

Type-check the current restart path:

```bash
npm run typecheck:restart
```

Type-check the older `src` area:

```bash
npm run typecheck:legacy
```

Note: `typecheck:legacy` currently covers older practice code and may surface issues that are not part of the current restart path.

## Conventions

- Add new focused solutions under `ReStart/`.
- Keep one problem per file.
- Name files by problem title in PascalCase, for example `ContainsDuplicate.ts`.
- Prefer TypeScript for new DSA work.
- Add sample inputs at the bottom of practice files until a formal test setup is added.
- Include time and space complexity comments when revisiting a solution.
