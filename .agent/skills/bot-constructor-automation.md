---
name: bot-constructor-automation
description: Builds headless browser bots and script-based task automation agents.
---

# Bot Constructor: Automation Skill

Builds headless browser bots, web scrapers, and background task automation agents. Designed to automate repetitive UI interactions, data entry, and scheduled workflow execution.

## When to use
- User requests a script to automatically navigate a website, click buttons, or fill forms.
- User needs to automate a sequence of actions on a scheduled basis (CRON).
- Creating testing bots or API interaction agents that simulate real user traffic.

## How to use
- **Phase 1 (Analysis):**
  - Determine the target environment: Is it a web UI that requires a headless browser (Puppeteer, Playwright, Selenium) or a simple API integration?
  - Identify the necessary flow: login, navigation steps, data extraction, and form submission.
  - Check for required anti-bot mitigation strategies (e.g., solving CAPTCHAs, stealth plugins).
- **Phase 2 (Execution):**
  - Scaffold the automation script using the chosen driver framework.
  - Implement robust selectors (using data-attributes or resilient XPath/CSS selectors) that wait for elements to appear in the DOM.
  - Add logic to handle pagination, modal popups, and dynamic content rendering.
- **Phase 3 (Validation):**
  - Synthesize a local test run plan to verify the bot successfully performs the steps in non-headless mode for visual confirmation.
  - Validate that error states (e.g., "element not found") gracefully retry or exit with detailed logs.

## Contingencies & Edge Cases
- **Missing Inputs:** If user doesn't specify the tool, default to Playwright (Node.js or Python) for modern, robust web automation.
- **Failures:** Web elements change frequently; suggest abstracting selectors into a configuration file. Warn users if target sites restrict automated scraping (TOS violations).
- **Scope Limits:** Bypassing strict anti-bot protections (like Cloudflare Turnstile or advanced reCAPTCHA) may fall outside acceptable usage; advise on using official APIs where available.

## Specifications
- Automation scripts must include explicit `try/catch` and `finally` blocks to ensure the headless browser process is cleanly closed (`browser.close()`).
- Include built-in logging so users can track the bot's current execution phase.
