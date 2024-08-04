const { Client, GatewayIntentBits } = require("discord.js");


// Providing the types of permissions
const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent]
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    // console.log(`${client.user.tag}:-`, message.content); 
    if(message.author.bot) return;

    console.log(message);
    
    message.reply({
        content:'hello from bot'
    })
});

client.login();

// console.log(client)

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    interaction.reply("Hey whats up!!")
});
