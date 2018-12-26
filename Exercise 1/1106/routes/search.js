var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
	host : "127.0.0.1",
	post : 3306,
	user : "root",
	password :"1234",
	database : "board",
	connectionLimit : 20,
	waitForConnection : false
});

router.post('/', function(req, res, next) {
	var select = req.body.searchTypeInput;
console.log(select);
	pool.getConnection(function (err, con) {
		if (err) {
			con.release();
			throw err;
		}
		var sql = "";
		switch(select){
			case "title" :
				sql = "SELECT * FROM board_info WHERE Title LIKE '%"+req.body.keywordInput+"%';";
			break
			case "contents" :
				sql = "SELECT * FROM board_info WHERE Contents LIKE '%"+req.body.keywordInput+"%';";
			break
			case "number" :
			sql = "SELECT * FROM board_info WHERE Board_seq LIKE '%"+req.body.keywordInput+"%';";
		break
		}



// router.post('/', function(req, res, next) {
// 	pool.getConnection(function (err, con) {
// 		if (err) {
// 			con.release();
// 			throw err;
// 		}
		
		/**
		 * sql문에서 특정 키워드가 포함된 내용을 검색하고 싶을 때
		 * 
		 * SELECT문에서 WHERE 다음에 LIKE '%키워드%'로 조건을 제시하면
		 * 해당 '키워드'가 포함된 내용을 검색해준다.
		*/
		// var sql = "SELECT * FROM Board_info WHERE Board_seq LIKE '%"+req.body.keywordInput
		// +"%'OR Title LIKE '%"+req.body.keywordInput
		// +"%'OR Contents LIKE '%"+req.body.keywordInput
		// +"%';";
		console.log(sql);
		
		con.query(sql, function (err, result) {
			if (err) {
				con.release();
				throw err;
			}
			res.render('index.ejs', { send_data : result });
		});
	});
});
module.exports = router;