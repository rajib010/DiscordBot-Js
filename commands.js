const { REST, Routes } = require('discord.js');

// Define the commands
const commands = [
    {
        name: 'hello',
        description: 'Replies with hey, whats up!',
    },
];

// Initialize the REST client
const rest = new REST({ version: '10' }).setToken(process.env.BOT_ID);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Register commands globally
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        // Register commands for a specific guild 
        // await rest.put(Routes.applicationGuildCommands('CLIENT_ID', 'GUILD_ID'), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
