const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

const url = 'mongodb+srv://SeongHyeon:dowk11@boilerplate.wlhfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=> console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})