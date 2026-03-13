require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const schedule = require('node-schedule');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}!`);
    console.log('Ready to schedule messages.');
});

client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Handle scheduling command
    if (message.content.startsWith('!schedule')) {
        const args = message.content.split(' ');
        
        if (args.length < 4) {
            return message.reply(`Please use the format: \`!schedule YYYY-MM-DD HH:mm <message>\`\nExample: \`!schedule 2026-03-14 15:30 Hello there!\``);
        }

        const dateStr = args[1];
        const timeStr = args[2];
        const contentToSchedule = args.slice(3).join(' ');

        // Parse date and time using dayjs
        const dateTimeString = `${dateStr} ${timeStr}`;
        const scheduledTime = dayjs(dateTimeString, 'YYYY-MM-DD HH:mm', true);

        if (!scheduledTime.isValid()) {
            return message.reply('Invalid date/time format. Please strictly use `YYYY-MM-DD HH:mm`. Example: 2026-03-14 15:30');
        }

        if (scheduledTime.isBefore(dayjs())) {
            return message.reply('The scheduled time must be in the future!');
        }

        // Schedule the message
        schedule.scheduleJob(scheduledTime.toDate(), () => {
            message.channel.send(contentToSchedule).catch(error => {
                console.error('Failed to send scheduled message:', error);
            });
        });

        // Confirm to user
        const timeFormatted = scheduledTime.format('YYYY-MM-DD HH:mm');
        message.reply(`✅ Message scheduled successfully for ${timeFormatted}!`);
    }
});

// Login using the token from .env
client.login(process.env.DISCORD_TOKEN);
