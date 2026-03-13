---
name: bot-constructor-timezone-converter
description: Builds bot functionalities for parsing, converting, and formatting time across different global timezones.
---

# Bot Constructor: Timezone Converter Skill

Builds bots or bot modules dedicated to parsing natural language time inputs, converting timestamps between different global timezones, and formatting date-time strings gracefully for international users.

## When to use
- User is building a Discord/Slack bot for an international community where users need to coordinate meeting times.
- A bot needs to parse natural language like "next Friday at 4 PM EST" or "in 2 days".
- The application stores data in UTC but needs to display local time intelligently to different users.

## How to use
- **Phase 1 (Analysis):**
  - Identify the primary inputs: Unix timestamps, ISO 8601 strings, or unstructured natural language.
  - Determine the desired output format and target timezones.
  - Choose appropriate date-time libraries (e.g., `date-fns`, `dayjs`, `Luxon` for JS; `datetime`, `dateutil`, `pytz` or `zoneinfo` for Python).
- **Phase 2 (Execution):**
  - Implement robust parsing logic that can handle ambiguous inputs (e.g., failing gracefully if a user just says "at 4").
  - Create the conversion utility that strictly uses IANA timezone identifiers (e.g., `America/New_York` instead of easily-confused abbreviations like `EST`/`CST`).
  - Generate the bot command interface (e.g., `/convert 15:00 UTC to PST`).
- **Phase 3 (Validation):**
  - Provide test cases covering edge cases (e.g., leap years, Daylight Saving Time transitions).
  - Ensure the output clearly states the source timezone and the target timezone to avoid confusion.

## Contingencies & Edge Cases
- **Missing Inputs:** If natural language parsing fails, the bot should return a helpful error message with example valid formats. If the target timezone is missing, ask the user or default to UTC.
- **Failures:** Beware of deprecated timezone abbreviations. Always steer users and code towards strict IANA standards.
- **Scope Limits:** Handling historical time zone data (e.g., what time it was in 1912 in a specific city) might require specialized databases beyond standard library scope.

## Specifications
- Code provided strictly adheres to the rule: "Store in UTC, display in Local Time".
- Do not use built-in language native Date APIs for complex timezone math if they lack robust daylight saving support; always recommend established libraries.
