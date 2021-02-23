const express = require('express')
const app = express()

const connection = require('./db/config')


require('dotenv').config()


// app.user(express.json())
app.listen(process.env.APP_PORT, function () {
  console.log('listening on 4000')
})
