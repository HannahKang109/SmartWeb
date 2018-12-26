//express 프레임워크를 활용하기 위해 express 모듈을 가져옴
var express = require('express');
//접속한 주소 정보를 가져옴
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index.ejs', { title : 'Express' }); 
});

router.get('/:number/:number2', function(req, res, next) {
	var number = req.params.number;
	var number2 = req.params.number2;
	var multi = number * number2;
		print = " 두 수의 곱은" + multi + "입니다.";

	res.render('index.ejs', { title : 'Express', print : print }); 
});


//접속한 주소 정보를 다른 기능 파일(node.js 파일)에 전달
module.exports = router;
