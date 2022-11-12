const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/api',require('./Routes/fetchAds'));
connectToMongo();
app.listen(PORT||4000,()=>{
    console.log("Started");
})

