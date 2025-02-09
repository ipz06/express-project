require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/blog', (req, res) => {
    res.send('Hello World YEEEEE')
  })


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(3000, () => {
        console.log('Node Api is running on port 3000')
    })
    console.log('Connected to MongoDb')
}).catch((err) => {
    console.log(err)
})