---
name: python-api-finder
description: Systematically searches, analyzes, and recommends available Python APIs, libraries, or built-in modules to accomplish a specific task.
---

# Python API Finder Skill

## When to use this skill
- Whenever a user asks "how do I do [task] in Python," "what is the best library for [task]," or "what APIs are available for [task] in Python."
- When evaluating different third-party packages (e.g., from PyPI) versus the Python Standard Library to solve a problem.
- When you need to provide code examples demonstrating how to use a specific API for a given problem.

## How to use it
1. **Analyze the Task:**
    - Identify the core objective the user is trying to achieve (e.g., parsing JSON, making HTTP requests, analyzing data, image processing, web scraping).
    - Determine if the task requires high performance, specific platform compatibility, or handling massive datasets.

2. **Search the Python Standard Library First:**
    - Always check if the task can be accomplished using built-in modules (e.g., `urllib`, `json`, `csv`, `re`, `datetime`, `collections`, `itertools`, `pathlib`).
    - **Advantage:** No external dependencies are needed, making the solution easier to deploy and maintain.
    - If a built-in module exists but is notoriously difficult to use (e.g., `urllib` vs. `requests`), note this trade-off.

3. **Evaluate Third-Party Libraries (PyPI):**
    - If the Standard Library is insufficient or overly complex for the task, recommend the industry-standard, most popular, and actively maintained third-party libraries.
    - Compare 2-3 top options if multiple viable choices exist (e.g., `requests` vs. `httpx` vs. `aiohttp` for HTTP clients; `BeautifulSoup` vs. `lxml` vs. `Scrapy` for web scraping; `pandas` vs. `Polars` for data analysis).
    - Consider factors like:
        - **Ease of use:** Is the API intuitive?
        - **Performance:** Is it built on C/Rust (e.g., `orjson`, `Polars`)?
        - **Asynchronous support:** Does it support `asyncio` if needed?

4. **Provide a Structured Recommendation (`api-recommendations.md`):**
    - Write a brief markdown summary of your findings.
    - **Structure:**
        - **Task Description:** Briefly state the problem being solved.
        - **Standard Library Option (if applicable):** Pros, cons, and a minimal code snippet.
        - **Top Third-Party Recommendation:** Package name (e.g., `pip install package-name`), pros, cons, and a minimal code snippet.
        - **Alternative Options:** Other libraries worth considering depending on specific constraints (e.g., "Use `aiohttp` instead of `requests` if you need high-concurrency async capabilities").

5. **Generate Code Examples (`example.py`):**
    - Provide a robust, well-commented Python script demonstrating the recommended API in action.
    - Ensure the example includes:
        - Necessary imports.
        - Basic error handling (e.g., `try...except` blocks for network requests or file I/O).
        - Type hinting (`-> dict`, `: int`) where appropriate to demonstrate modern Python best practices.
        - Clear print statements or logging to show the output.

6. **Review:**
    - Double-check that all mentioned libraries are currently relevant and not deprecated.
    - Verify that the code snippets are valid Python 3 syntax.
