const Discord = require('discord.js');
const client = new Discord.Client();

const CHANNEL_ID = '1216431770396921948';

client.on('ready', () => {
    console.log(`Bot ist bereit als: ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(CHANNEL_ID);
    if (!channel) return;
    channel.send(`Willkommen auf dem Server, ${member}`);
});

client.login('BOT TOKEN');
