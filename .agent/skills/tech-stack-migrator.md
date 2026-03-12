---
name: tech-stack-migrator
description: Provides a robust framework for migrating an existing codebase or component from one programming language or framework to another.
---

# Tech Stack Migrator Skill

Use this skill whenever a user requests converting, translating, or migrating existing code (e.g., Python to Node.js, React to Vue, Vanilla CSS to Tailwind) to ensure the logic transfers smoothly without losing structural integrity or edge-case handling.

## When to use this skill
- Whenever a user asks to "convert this Python script to JavaScript," "rewrite this component in React," or "migrate our database from MySQL to PostgreSQL."
- When evaluating the feasibility of migrating a complex module.
- When generating equivalent standard libraries or package replacements for the new environment.

## Core Principles
- **Agnosticism:** The workflow must remain structured regardless of the source or target languages. Focus heavily on identifying the *paradigms* of the languages (e.g., translating synchronous Python to asynchronous Node.js).
- **Robustness:** A direct 1:1 translation is rarely optimal. The new code must adopt the idioms, standard practices, and conventions of the *target* language, not the *source* language.
- **Clarity:** Clearly delineate the dependency mapping (e.g., which NPM package replaces the pip package they were using previously).

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Analyze Source Code:** Read deeply into the existing source code. Identify the core logic, domain models, inputs, and outputs.
2. **Identify Paradigms & Gotchas:** 
    - Does this rely heavily on specific language features (like Python's GIL/threading, JS event loops, PHP globals)?
    - Are there specific type-casting quirks or floating-point nuances?
3. **Dependency Mapping:** List all standard library and external package dependencies in the source code, and explicitly research their most direct, industry-standard equivalents in the target ecosystem.

### Phase 2: Scaffolding & Execution
1. **Scaffold Target Environment:** 
    - Set up the necessary configuration files for the new language (`package.json`, `requirements.txt`, `tsconfig.json`).
2. **Transpile Logic (Idiomatically):**
    - Do *not* translate literally line-by-line. Instead, rewrite the core logic using the target language's best conventions.
    - Example: If migrating Java to Kotlin, use Kotlin's `data classes` and null-safety features rather than writing Java-style verbose code in Kotlin syntax.
    - Example: If migrating synchronous Python requests to Node.js, correctly architect `async/await` Promises.
3. **Commentary:** Leave contextual inline comments where the translation required a significant structural shift explaining *why* it was changed.

### Phase 3: Validation & Review
1. **Type Definition Check:** If moving to a statically typed language (like TypeScript or Go), ensure all interfaces/structs perfectly map to the original loose data structures.
2. **Review Output:** Generate a markdown report (`migration-summary.md`) detailing:
    - The mapped dependencies (Source -> Target).
    - Any functional differences or compromises that had to be made due to language constraints.
3. **Delivery:** Provide the new code files and the summary report to the user.

## Contingencies & Edge Cases
- **Missing Equivalents:** If a library in the source language has absolutely no equivalent in the target language (e.g., highly specialized machine learning libraries in Python moving to standard JS), explicitly halt and warn the user before attempting to manually brute-force mathematical structures.
- **Partial Migrations:** If the user is asking to migrate a massive monolith, suggest a "Strangler Fig" pattern—migrating one distinct API route or service at a time rather than rewriting the entire application in one pass.

## Specifications & Constraints
- Must enforce Target Language naming conventions strictly (e.g., moving from Python `snake_case` to JavaScript `camelCase`).
- If translating databases (SQL dialects), you must proactively alter dialect-specific data types (e.g., converting Postgres `JSONB` to a standard `TEXT` column if migrating to SQLite).
