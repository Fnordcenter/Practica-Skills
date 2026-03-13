---
name: bot-constructor-conversational
description: Scaffolds, configures, and deploys conversational AI and chat bots for messaging platforms.
---

# Bot Constructor: Conversational Skill

Scaffolds, configures, and deploys conversational bots (chatbots) for platforms like Discord, Slack, Telegram, or custom web interfaces. Handles message routing, state management, and natural language processing (NLP) API integrations.

## When to use
- User requests a bot to interact with users on a messaging platform (Discord bot, Slack app, Telegram bot).
- User needs an AI-powered conversational agent (e.g., integrating OpenAI, Anthropic, or local LLMs).
- User is building a customer support chatbot or an interactive FAQ assistant.

## How to use
- **Phase 1 (Analysis):**
  - Identify the target platform (Discord, Slack, Web, etc.) and required SDKs/libraries.
  - Determine if the bot requires statefulness (remembering context) or stateless command handling.
  - Ask for required intents, triggers, and the core purpose of the conversational agent.
- **Phase 2 (Execution):**
  - Generate the bot initialization code, including framework setup (e.g., `discord.js`, `python-telegram-bot`, `Bolt`).
  - Implement command routing, event listeners (e.g., `onMessage`), and secure token management.
  - Integrate necessary AI endpoints if NLP is requested, handling asynchronous API limits and token streaming.
- **Phase 3 (Validation):**
  - Provide instructions on how to set up the developer portal for the specific platform (where to get the tokens).
  - Include a minimal viable run script with explicit testing instructions (e.g., "Send '!ping' to the bot").

## Contingencies & Edge Cases
- **Missing Inputs:** If the platform is unspecified, ask the user or default to a generic Node.js/Python console bot or simple Express.js webhook.
- **Failures:** Implement global error catchers (e.g., to prevent the bot from crashing on an unhandled API timeout). Suggest exponential backoff for rate limits.
- **Scope Limits:** Cannot physically log into a developer portal to create tokens for the user; the user must provide or provision their own credentials.

## Specifications
- Structure code into clear layers: Connection/Init -> Event Handling -> Business Logic.
- Tokens and secrets must explicitly use environment variables (e.g., `process.env.DISCORD_TOKEN`). Do not hardcode dummy tokens.
