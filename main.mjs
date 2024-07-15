import { Client, GatewayIntentBits, AttachmentBuilder } from "discord.js";
import { data } from "./bot.config.mjs";

const bot = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildModeration
    ]
});

bot.on('ready', async() => {
    console.log(`[1;2m[1;37m[1;32mLogged in[0m[1;37m[0m [1;31m${bot.user.tag}[0m[0m`);
    bot.user.setActivity('Quatro Studio', {type: 4})
    bot.user.setStatus('dnd')
});

bot.on('messageCreate', async (qs) => {
    if(qs.author.bot) return;
    if(data.server !== qs.guild.id) return;
    if(!data.line) return;
    if(data.channels.includes(qs.channel.id)) {
        let attach = new AttachmentBuilder(data.line);
        qs.channel.send({ files: [attach] });
    } else {
        'nothing :]'
    }
});

bot.login(data.token);