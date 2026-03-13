# Discord Scheduler Bot

This is a Discord bot built with Node.js that schedules messages to be sent at specific dates and times. It uses `discord.js` for interacting with Discord, `node-schedule` for job scheduling, and `dayjs` for parsing timezones/dates.

## Setup Instructions

1. **Create a Discord Application**:
   Go to the [Discord Developer Portal](https://discord.com/developers/applications) and log in. Click "New Application" and give it a name.
2. **Configure the Bot**:
   Navigate to the "Bot" tab on the left menu. Click "Add Bot".
3. **Enable Intents**:
   Scroll down to the "Privileged Gateway Intents" section and enable the **Message Content Intent**. Save your changes.
4. **Get Your Bot Token**:
   Click the "Reset Token" button (if no token is visible) or copy the existing token. Keep this token secret!
5. **Set Up the `.env` File**:
   In the project folder, make a copy of `.env.example` and name it `.env` (or simply rename it). Open `.env` and paste your token:
   ```env
   DISCORD_TOKEN=your_actual_token_here
   ```
6. **Invite the Bot**:
   Go back to the Developer Portal, navigate to the "OAuth2" -> "URL Generator" tab. Check `bot` under Scopes, and check `Send Messages` under Bot Permissions. Copy the generated URL and open it in your browser to invite the bot to your server.

## Running the Bot

Once your `.env` is set up with your token, run the bot from this directory using your terminal:

```bash
npm start
```
You should see: "Bot is online as {bot_name}!" in your terminal.

## Usage

In any channel the bot has access to, type:
```
!schedule YYYY-MM-DD HH:mm Your message here
```
Example:
```
!schedule 2026-03-20 18:30 Hello everyone, time for the meeting!
```

Wait for the specified time, and the bot will send your message!
