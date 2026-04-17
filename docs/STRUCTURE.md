# Project Structure

This file documents where new learning work should go and what older folders are for.

## Current Path

`ReStart/` is the main learning path.

```text
ReStart/
|-- NeetCode150/
|   |-- ArrayAndHashings/
|   `-- TwoPointers/
`-- Practice/
    |-- Array/
    `-- TwoPointers/
```

Use `ReStart/NeetCode150/<topic>/` for problems that belong to the NeetCode 150 roadmap.
Use `ReStart/Practice/<topic>/` for extra topic drills that are not part of that roadmap yet.

## Legacy And Reference Code

`src/` contains older practice files, experiments, and previous problem attempts.

```text
src/
|-- array/
|-- graph/
|-- trees/
|-- leetCode/
|-- neetcode/
|-- fundamentals/
|-- practice_in-dom/
`-- JustTry/
```

The legacy folder is useful for reference, but new DSA work should normally start in `ReStart/`.

## Root Files

The root should stay limited to project configuration and documentation:

- `README.md`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `tsconfig.restart.json`
- `.gitignore`
- `nodemon.json`

Standalone JavaScript fundamentals now live in `src/fundamentals/`.

## File Naming

Use PascalCase for problem files:

```text
ContainsDuplicate.ts
LongestConsecutiveSequence.ts
ValidPalindrome.ts
```

Use topic folders with stable names:

```text
ArrayAndHashings/
TwoPointers/
Trees/
Graphs/
Stack/
BinarySearch/
```

## Suggested Problem Template

```ts
// Problem Name
// Time: O(...)
// Space: O(...)

function solution() {
  // implementation
}

console.log(solution());
```

## Verification

Use this command for the current clean path:

```bash
npm run typecheck:restart
```

Use this command when intentionally working on older code:

```bash
npm run typecheck:legacy
```
