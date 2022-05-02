require('dotenv').config();
const express = require('express')

const app = express()

require('./config/db')

//models

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => {
    console.log("SERVER READY ON PORT 3000")
})