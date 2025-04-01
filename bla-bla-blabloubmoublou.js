#bonjour, J'ai cette erreur quand j'essaie de déployer mon bot
#bonjour, J'ai cette erreur quand j'essaie de déployer mon botbonjour, J'ai cette erreur quand j'essaie de déployer mon bot

const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
    console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", message => {
    if (message.content === "!ping") {
        message.reply("Pong !");
    }
});

client.login(process.env.TOKEN);
