require('dotenv').config();
const express = require('express')
const app = express()
require('./config/db')

const apiRouter = require('./api')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log("SERVER READY ON PORT 3000")
})