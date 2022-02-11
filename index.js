const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser")
const { User } = require("./models/User")

const config = require("./config/key")

//application/x-www-from-urlencoded 형식을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
//application/json 형식을 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose') 
mongoose.connect(config.mongoURI).then(()=> console.log('MongoDB Connected...')).catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('backend로 실행중')
})


app.post('/register', (req, res) => {
  //회원가입시 필요한 정보를 client에 가져옴
  //그것들을 데이터 베이스에 넣어줌
  //bodyparser 통해 client의 정보를 담아서 req.body로 얻을 수 있음
  const user = new User(req.body)
  user.save((err, doc) => {
    if(err) return res.json({success : false, err})
    return res.status(200).json({success : true})
  }) // mongoDB 메서드 - 위의 정보가 user 모델에 저장
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})