require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const api = require('./routes/api')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', api)

app.listen(PORT,function(){
    console.log(`listening on port ${PORT}`)
})