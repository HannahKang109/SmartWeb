var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
    host : "127.0.0.1", 
    port : 3306,
    user : "root",
    password : "1234",
    database : "board",
    connectionLimit : 20,
    waitForConnection : false
});

/* GET users listing. */
router.get('/:Board_seq', function(req, res, next) {
		// :Board_seq <- 식별자
    // 주소에 입력된 숫자를 읽어온다.
    // 숫자는 req.params.Board_seq 오브젝트 안에 있다.

    // 서버에게 글 번호 전달하기
    /**
     * 서브도메인에서 숫자를 의미하는 키워드를 넣는다.
     * 주소에 숫자를 입력해서 서버에게 전달하면,
     * 숫자는 req.params 오브젝트에 Board_seq(키워드)라는 이름으로 저장된다. 
     */

    number = req.params.Board_seq;
    //console.log("select number :" + seq);
    pool.getConnection(function(err,connection){
        if(err){
            connection.release();
            throw err;
        }
        sql = "SELECT * FROM Board_info WHERE Enable=1 AND Board_seq="+number;

    console.log(sql);   
    connection.query(sql, function(err,rows){
        if(err){
            connection.release();
            throw err;
        }

        console.log(rows);
        res.render("read.ejs",{send_data : rows})
    });
});

console.log(number);
});
module.exports = router;
