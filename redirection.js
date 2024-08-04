const express = require('express');
const dotenv = require("dotenv");
const {handleUrlRedirection} = require('./controllers.js')
const mongoose = require("mongoose");

dotenv.config();

const dbConnection = async function () {
    try {
        await mongoose.connect(`${process.env.DB_URL}/urlShortner`);
        console.log("Connected to db");
    } catch (error) {
        console.log("Failed in db Connection");
    }
};

dbConnection();

const app = express();

app.get("/:shortId", handleUrlRedirection)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
    
})