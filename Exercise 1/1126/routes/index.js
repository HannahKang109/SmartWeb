var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//views/index.ejs 파일을 웹페이지로 조합할 때 데이터를 전달한다.
  res.render('index', { title: 'Express', message : "data to server 서버로 데이터 보내기" });
});

module.exports = router;
