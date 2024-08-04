const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

// Check if environment variables are loaded correctly
// console.log('BOT_ID:', process.env.BOT_ID);
// console.log('CLIENT_ID:', process.env.CLIENT_ID);

const commands = [
    {
        name: 'hello',
        description: 'Replies with hey, whats up!',
    },
];

// // Initialize the REST client
const rest = new REST({ version: '10' }).setToken(process.env.BOT_ID);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        // Register commands globally
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        // Register commands for a specific guild 
        // await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
