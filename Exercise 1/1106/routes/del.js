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

router.get('/:number', function(req, res, next){
	var number = req.params.number;

	pool.getConnection(function(err, conn){
		if(err){
			con.release();
			throw err;
		}
		var sql = "UPDATE board_info SET Enable=0 WHERE Board_seq="+number+";";
		console.log(sql);

		conn.query(sql, function(err, result){
			if(err){
				con.release();
				throw err;
			}
				//res.render('',{});  삭제하시겠습니까? 다시 한번 물어보는 메시지 출력할 때
  			//삭제 후 기본 페이지로 이동할 때
			res.redirect('http://127.0.0.1:3000'); 
		});
	});

});

module.exports = router;