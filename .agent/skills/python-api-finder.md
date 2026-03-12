---
name: python-api-finder
description: Systematically searches, analyzes, and recommends available Python APIs, libraries, or built-in modules to accomplish a specific task.
---

# Python API Finder Skill

Use this skill whenever a user needs to find the correct tool, library, or built-in module to solve a specific problem in Python. It enforces a systematic evaluation of native vs. third-party options.

## When to use this skill
- Whenever a user asks "how do I do [task] in Python," "what is the best library for [task]," or "what APIs are available for [task] in Python."
- When evaluating different third-party packages (e.g., from PyPI) versus the Python Standard Library to solve a problem.
- When generating comparative code examples between multiple API approaches.

## Core Principles
- **Agnosticism:** Evaluate purely based on the merits of the library (performance, maintenance, ease of use) rather than personal preference. Consider native OS differences if the library interacts heavily with the file system or networking.
- **Robustness:** Recommend standard, battle-tested libraries over obscure, unmaintained ones. Always flag if a library requires a heavy underlying C/Rust compiler toolchain versus pure Python.
- **Clarity:** Clearly delineate between Standard Library solutions (no installation required) and PyPI packages (requires `pip install`).

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Analyze the Task:** Identify the core objective (e.g., parsing JSON, making HTTP requests, analyzing data, image processing).
2. **Determine Constraints:** Review if the user mentioned specific constraints like "must be async," "must have no dependencies," or "needs to be blazing fast."

### Phase 2: Scaffolding & Execution
1. **Standard Library Check:** First, evaluate if the task can be accomplished cleanly using built-in modules (e.g., `urllib`, `json`, `csv`, `re`, `datetime`).
2. **Third-Party Evaluation (PyPI):** If native tools are insufficient or overly complex, evaluate the top 2-3 industry-standard third-party choices (e.g., `requests` vs `httpx`, or `pandas` vs `polars`).
3. **Draft Recommendation (`api-recommendations.md`):** Output a structured markdown analysis comparing:
    - Native approach pros/cons (if any).
    - Top third-party approach pros/cons.
    - Specific installation commands (`pip install <package>`).
4. **Draft Implementation (`example.py`):** Write a robust execution script using the recommended library. Ensure it includes:
    - Standard imports.
    - Basic error handling (`try...except`).
    - Modern Python best practices (e.g., type hinting `-> dict`, `: int`).

### Phase 3: Validation & Review
1. **Deprecation Check:** Ensure none of the recommended libraries are formally deprecated or notoriously abandoned.
2. **Review Code Syntax:** Verify that the code snippets provided are valid Python 3 syntax.

## Contingencies & Edge Cases
- **Task is Too Broad:** If the user asks for "an API to build a web app," request clarification before answering (e.g., "Do you need a heavy framework like Django, or a microframework like FastAPI?").
- **No Good Solution:** If a task represents an unsolved problem or lacks good Python support, state this clearly rather than recommending a broken or alpha-stage library.

## Specifications & Constraints
- The `api-recommendations.md` must differentiate clearly between Standard Library tools and external dependencies.
- Code examples must include comments explaining *why* a specific API method is being used over an alternative.
