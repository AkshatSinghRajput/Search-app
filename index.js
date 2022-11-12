const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',require('./Routes/fetchAds'));
connectToMongo();
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(4000,()=>{
    console.log("Started");
})

