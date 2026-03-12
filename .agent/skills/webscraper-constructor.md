---
name: webscraper-constructor
description: Generates robust web scraping scripts that handle rate-limiting, dynamic content, and structured data extraction respectfully.
---

# Webscraper Constructor Skill

Use this skill whenever a user requests the extraction or aggregation of data from external websites that do not offer public APIs.

## When to use this skill
- Whenever a user asks to "scrape this website," "get all the products from this page," or "build a crawler."
- When aggregating text, images, or tabular data from DOM structures across multiple URLs.
- When generating automation scripts intended to extract data periodically.

## Core Principles
- **Agnosticism:** The scraping logic should be adaptable between simple HTML parsers (like BeautifulSoup/Cheerio) and headless browser implementations (like Playwright/Puppeteer/Selenium) depending on the target site's architecture.
- **Robustness:** A scraper must expect external DOM structures to fracture. It must log missing elements gracefully rather than throwing terminal runtime errors halfway through a crawl.
- **Ethics & Respect:** A scraper must *never* launch denial-of-service level requests. Enforce rate-limits, custom User-Agents, and respect standard `robots.txt` directives when possible.

## How to use it (Step-by-Step)

### Phase 1: Analysis & Gathering
1. **Target Analysis:** Ascertain the target URL(s) and exactly what structured data the user wants extracted (e.g., "Title, Price, and Image URL").
2. **Determine Architecture:**
    - Is the data rendered server-side (Static HTML)? Recommend a fast HTTP client + DOM parser.
    - Is the data rendered client-side (SPA/React/Vue)? Recommend a headless browser to execute JavaScript.
    - Can the data be found cleanly inside an interceptable XHR network request? (Always prioritize directly querying hidden JSON endpoints over parsing raw HTML).

### Phase 2: Scaffolding & Execution
1. **Scraper Setup (`scraper.js` / `scraper.py`):**
    - Import the appropriate libraries.
    - Configure the network client with a realistic `User-Agent` header to avoid trivial bot-mitigation blocks.
2. **Rate Limiting:** Implement explicit delays (e.g., `sleep(1)` or asynchronous delays) between requests if scraping multiple pages.
3. **Extraction Logic:** Provide the explicit CSS selectors (or XPath) required to target the requested elements. 
    - Wrap every DOM query in `try...except` or Optional Chaining conditionals (e.g., `element?.textContent`) so missing fields yield `null` instead of breaking the script.
4. **Data Aggregation:** Collect the extracted fields into a structured format (usually a List of Dictionaries or an Array of Objects).

### Phase 3: Validation & Review
1. **Output Formatting:** Ensure the script ends by saving or printing the aggregated data in a highly structured, usable format like `.csv` or `.json`.
2. **Delivery:** Provide the script to the user. Inform them of the specific setup commands required (e.g., `npm install puppeteer` or `pip install beautifulsoup4`).

## Contingencies & Edge Cases
- **Pagination:** If the target spans multiple pages, implement a recursive function or a predictable `while` loop that identifies the "Next Page" button until it disappears.
- **Anti-Scraping Defenses:** If the target website heavily utilizes CAPTCHAs or Cloudflare bot-protection, advise the user on the extreme difficultly of bypassing it and suggest prioritizing official APIs if they exist, rather than attempting to write complex evasion modules.

## Specifications & Constraints
- Must not hard-code massive arrays of URLs directly into the main function; read targets from an external file or accept them as CLI arguments if there are more than 5 URLs.
- Must document explicitly in the generated code comments that the user is responsible for adhering to the target website's Terms of Service.
