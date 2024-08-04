const mongoose = require("mongoose");

// Define the schema
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    visitCount: [{
        timestamp: { type: Number }
    }]
}, 
{
    timestamps: true
});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;