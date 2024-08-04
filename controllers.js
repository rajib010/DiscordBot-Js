const mongoose = require("mongoose");

const userSchema = require("./models.js");
const shortId = require("shortid");

const handleUrlCreation = async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1].trim();
        try {
            const res = await userSchema.create({
                shortId: shortId.generate(),
                redirectedUrl: url
            });

            if (!res) {
                throw new Error("Failed to insert data");
            }

            const entry = await userSchema.findOne({ shortId: res.shortId });
            return message.reply(`ShortId: ${entry.shortId}`);
        } catch (error) {
            console.error(error);
            return message.reply("An error occurred while creating the short URL.");
        }
    } else {
        message.reply({
            content: 'hello from bot'
        });
    }
}


const handleUrlRedirection = async (req, res) => {
    const urlId = req.params.shortId;
    if (!urlId){
        throw new Error("invalid url id")
    };
    const entry = await userSchema.findOne({ shortId: urlId });
    if (!entry) {
        throw new Error("Url not found");
    }
    return res.redirect(entry.redirectedUrl);
}

module.exports = { handleUrlCreation, handleUrlRedirection }