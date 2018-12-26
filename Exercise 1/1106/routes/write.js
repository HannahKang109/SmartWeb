var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool(
	{
		host: "127.0.0.1",
		port: 3306,
		user: "root",
		password: "1234",
		database: "board",
		connectionLimit: 20,
		waitForConnection: false
	});

//write.ejs 파일을 랜더링 하는 함수
router.get('/', function (req, res, next) {
	res.render('write.ejs', {});
});

//사용자로부터 전달된 데이터들을 게시판 데이터베이스에 넣는 함수
//데이터를 전달받는 방식
router.post('/', function (req, res, next) {
	//콜백함수의 매개변수
	/**
	 * req : 클라이언트로부터 요청(request)받은 정보
	 * res : 클라이언트에게 응답(response)할 정보
	 * next : 다른 함수를 호출하는 매개변수
	 */


	//클라이언트로부터 전달받을 데이터들을 변수에 저장
	//(데이터베이스에 들어갈 데이터)

	var title = req.body.titleInput;
	var name = req.body.nameInput;
	var contents = req.body.contentsInput;


	/**form 태그 안의 사용자가 입력한 데이터를 읽어오려면,
	 * 클라이언트로부터 요청받은 정보가 담긴 req.body 객체 안에 
	 * 태그의 id로 입력한 데이터를 읽어올 수 있음.
	 * 
	 * 변수 = req.body.태그의 ID 
	 */
	pool.getConnection(function (err, connection) {
		if (err) {
			connection.release();
			throw err;
		}
		var sql = "INSERT INTO board_info(Title, Writer_seq, Created_at, Contents, Pw, Updated_at)" +
			"VALUES('" + title + "', 1, now(), '" + contents + "', '0000', now());";
		console.log(sql);

		connection.query(sql, function (err, result) {
			if (err) {
				connection.release();
				throw err;
			}

			//res.redirect()함수 : 특정 주소로 이동하는 함수
			res.redirect("http://127.0.0.1:3000");

		});
	});
	});

	module.exports = router;