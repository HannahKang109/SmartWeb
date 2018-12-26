var express = require('express');
var router = express.Router();
//[mysql연동_1] mysql 모듈을 로드함 *명령프롬프트에 명령어를 이렇게 입력 : npm install mysql  --save
var mysql = require('mysql');
//[mysql연동_2] 데이터베이스 연결 pool을 만듬
pool = mysql.createPool({
	//[mysql연동_3] 데이터베이스 연결 pool을 만들기 위한 정보들 입력
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "1234",
	database: "board",
	connectionLimit: 20,

});
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('signup.ejs', {});
});

//주소 : http://127.0.0.1:3000/signup
//회원가입 form으로부터 전달받은 값을 처리하는 기능함수
router.post('/', function (req, res, next) {
	/**
	 * form 태그를 활용하여 데이터를 전달받을 때
	 * 기능 함수에서는 req 객체 안에 있는 body라는
	 * 데이터 이름의 오브젝트에서 데이터를 가져올 수 있음
	 * 
	 * 참고)
	 * 주소 : req.params.데이터이름
	 * post : req.body.데이터이름
	 * 
	 * 예시)
	 * { usr : "hannah", pwd : "1234", repwd : "1234", gender : "여성"}
	 * 
	 * 위의 오브젝트에서 usr이라는 데이터이름의 값 'hannah'를 가져오려면
	 * 변수 = req.body.usr;
	 */
	var usr = req.body.usr;
	var pwd = req.body.pwd;
	var repwd = req.body.repwd;
	var gender = req.body.gender;

	console.log(usr);
	console.log(pwd);
	console.log(repwd);
	console.log(gender);

	if( pwd != repwd ){
		res.render('error.ejs',{message : "비밀번호를 다르게 입력하셨습니다."})
		//res.redirect('http://www.naver.com');
		return;
	}
		//[mysql연동_4] 데이터베이스 풀에서 데이터베이스 서버와의 연결을 가져옴
	pool.getConnection(function (err, con) {
		//[mysql연동_5] 콜백함수에서 sql문을 작성함
		if (err) {
		//[mysql연동_6] 데이터베이스 연결 중 오류가 발생했다면
    //현재의 연결을 해제함
			con.release();
			throw err;
		}
		var sql = "";

		if (gender == "남성") {
			sql += "INSERT INTO Signup (id, pw, gender) VALUES " +
				"('" + usr + "','" + pwd + "',0);";
		} else {
			sql += "INSERT INTO Signup (id, pw, gender) VALUES " +
				"('" + usr + "','" + pwd + "',1);";
		}
		console.log(sql);

		//[mysql연동_7] 데이터베이스 연결 후 sql문을 실행
		con.query(sql, function (err, result) {
		//에러가 발생했을 때
			if (err) {
				con.release();
				throw err;
			}
		//에러가 발생하지 않음(정상적으로 sql문을 실행한 경우)
		//처리를 완료하고(데이터베이스에 값을 저장)
		//다른 주소로 이동하고 싶은 경우에는 
		//res.redirect('주소')함수를 쓴다.
		// res.redirect('http://www.naver.com');
		//res.redirect('http://127.0.0.1:3000/signup');
		res.render('error.ejs',{message : "회원가입을 환영합니다."})
		});
		console.log(sql);
	});
});


module.exports = router;
