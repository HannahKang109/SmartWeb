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
	var pw = req.body.pw;

	console.log(id);
	console.log(pw);

	pool.getConnection(function (err, con) {
		if (err) {
			con.release();
			throw err;
		}
		var sql = "SELECT * FROM Signup WHERE id='"+id+"';";
	console.log(sql);

	con.query(sql, function(err, result){
		if(err){
			con.release();
			throw err;
		}
		console.log(result.length);
		if(result.length == 0) {
			res.render('error.ejs',{message : "아이디를 찾을 수 없습니다."})
		} else{
			//비밀번호 검사
			var sql_pw = "SELECT * FROM Signup WHERE id='"+id+"' AND pw='"+pw+"';";
			console.log(sql_pw);

			con.query(sql_pw, function(err, result2){
				if(err){
					con.release();
					throw err;
				}
				if(result2.length == 0) {
					res.render('error.ejs',{message : "비밀번호가 잘못 입력되었습니다."});
					return;
				}
				res.render('error.ejs',{message : "회원님, 반갑습니다."});
		
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
