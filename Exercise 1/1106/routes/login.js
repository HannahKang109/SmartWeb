var express = require('express');
var router = express.Router();
var mysql = require('mysql');

pool = mysql.createPool({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "1234",
	database: "board",
	connectionLimit: 20,

});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.ejs', {});
});
router.post('/', function (req, res, next) {

	var id = req.body.id;
	var pw = req.body.password;

	console.log(id);
	console.log(pw);

	pool.getConnection(function (err, con) {
		if (err) {
			con.release();
			throw err;
		}
		var sql = "SELECT * FROM user WHERE Id='"+id+"';";
	console.log(sql);

	con.query(sql, function(err, result){
		if(err){
			con.release();
			throw err;
		}
		console.log(result.length);
		if(result.length == 0) { //아이디가 없을 경우
			res.render('login.ejs',{message : "아이디를 찾을 수 없습니다."})
		} else{ //검색된 아이디가 있는 경우
			//비밀번호 검사
			var sql_pw = "SELECT * FROM user WHERE Id='"+id+"' AND Pw='"+pw+"';";
			console.log(sql_pw);
			/**
			 * 콜백함수 안에 콜백함수를 계속 호출하는 방식이 반복되는 경우(Callback Hell 현상),
			 * - 프로그램의 실행 흐름을 알기 어렵다. >> 에러의 원인
			 * 탈출하는 방법
			 * async 모듈을 활용하여 프로그램의 실행 흐름을 제어할 수 있다.
			 */
			con.query(sql_pw, function(err, result2){
				if(err){
					con.release();
					throw err;
				}
				if(result2.length == 0) { //비밀번호가 아이디가 매치되지 않는 경우
					res.render('login.ejs',{message : "비밀번호가 잘못 입력되었습니다."});
					return;
				}
				//비밀번호와 아이디가 매치되는 경우
				res.render('login.ejs',{message : "회원님, 반갑습니다."});
		
	});
}
});

// 	if( id == ""  ){
// 		res.render('error.ejs',{message : "아이디를 입력하세요."})
// 		return;
// 	}

// 	res.render('error.ejs',{message : "가입을 축하합니다."});
 });
});

module.exports = router;