const express = require('express');
const path = require('path');
const { env } = require('process');
const config = require('./config')

const app = express();
const PORT = process.env.PORT || config.PORT;

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile('index.html',{root: path.join(__dirname, './src')})
})

app.listen(PORT, ()=>{
    console.log("Website is running on port " + PORT)
})