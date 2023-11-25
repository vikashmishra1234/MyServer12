const express = require("express");
const Connection = require('./db/database-connection');
const Router = require('./routes/data');
const cors = require('cors');

const app  = express()

const Port = 4000;

app.use(express.json())
app.use(cors());
app.use('/api',Router);



Connection();
app.listen(Port,()=>{
    console.log(`The server is running on port ${Port}`)
})