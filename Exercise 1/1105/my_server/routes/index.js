var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  now = new Date();
  print_data = now.getFullYear() + "/" + (now.getMonth()+1) + "/" + now.getDate();
  what_time = now.getHours() +":"+ now.getMinutes()+":"+ now.getSeconds();
  //print_date >> 2018/11/5
  //naverBox.ejs 파일을 웹브라우저에 응답한다.
  //{title : "express"} >> naverBox.ejs에 표시할 데이터 값(오브젝트)를 의미함 
  res.render('naverBox.ejs', { date : what_time });
});

module.exports = router;
