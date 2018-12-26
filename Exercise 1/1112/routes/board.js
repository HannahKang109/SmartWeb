//express 프레임워크를 활용하기 위해 express 모듈을 가져옴
var express = require('express');
//접속한 주소 정보를 가져옴
var router = express.Router();

/* GET home page. */
/**
 * [기본형 기능함수] : 특정 웹페이지를 구성하여 클라이언트에게 응답하는 기능을 수행
 * 
 * 예시)index.ejs(HTML)파일과 링크되어있는 css,js,이미지 파일들을
 * 오브젝트형 데이터{title : 'Express'}와 조합하여 웹문서를 만드는 기능을 수행하는 함수
 * 
 * 주소 정보(router)에서 사용자가 서버에 접속한 주소(127.0.0.1:3000/board)로 
 * 접속했을 때 수행하게 됨
 * 
 * 클라이언트가 서버에게 데이터를 전달하거나 웹페이지를 요청할 때는 get(), post() 함수를 활용함
 * 
 * [get()함수 매개변수]
 * [첫번째] 두번째 서브도메인의 이름 > '/'는 두번째 서브도메인 이름이 없는 경우
 * 예시)
 * 
 * http://127.0.0.1:3000/board/  
 * router.get('/', function(req, res, next) {
 * 
 * http://127.0.0.1:3000/board/time  
 * 
 * 1. 도메인(http://127.0.0.1:3000)으로 웹서버가 구동되는 서버 컴퓨터를 확인함
 * 2. 서브도메인(/board)를 app.js 파일에서 주소와 매칭되는 기능 파일(board.js)을 읽어옴
 * 3. 읽어온 기능 파일(board.js)에서 두번째 서브도메인(/time)을 기능 함수의 첫번째 매개 변수와 비교함
 * 4. 해당하는 기능함수가 있다면 함수를 실행함
 * 
 * [두번째]실행될 함수의 코드 : 실제 수행할 기능에 대해 프로그래밍 한 코드를 넣음
 * 기본형에는 웹페이지를 조합 & 응답하는 res.renter()함수가 배치되어 있음
 * res.render() 함수의 매개변수
 * 첫번째 : 조합할 웹페이지의 파일이름(views 폴더 안에 넣은 ejs파일-확장자는 붙여도 되고 아니어도 됨)
 * 두번째 : 웹페이지를 조합할 때 표시할 데이터
 * 
 * app.js에서 
 * app.use('/board',boardRouter); >>127.0.0.1:3000/board로 접속했을 때 board.js 기능을 수행
 * 
 
 router.get('/', function(req, res, next) {
  res.render('main.ejs', { title: 'Express' });
});
*/
/*
router.get('/', function(req, res, next) {
	var print_hello = "안녕하세요"; // 웹페이지에 표시할 문자열 데이터
	
	var now = new Date();
	console.log(now);
*/
	/* 내가 한 것
	var a;
	var seconds = now.getSeconds();

	if (seconds%2 == 0) {
		a = "꽝입니다";
	}
	else {
		a = "당첨되었습니다";
	}

	print_hello = now + " " + print_hello + a;
*/
	
/* 선생님이 한 것
	if (now.getSeconds%2 == 0) {
		print_hello = now + " " + print_hello + "꽝입니다";
	}
	else {
	print_hello = now + " " + print_hello + "당첨되었습니다";
	}


  res.render('main.ejs', { title: 'Express', hello : print_hello }); // {} 안에 있는 것 - 오브젝트형 데이터 
});
*/
//하기는 각각 기능 함수임
/*
router.get('/', function(req, res, next) {
	console.log('첫번째 기능함수');
	res.render('main.ejs', { hello: 'Express' }); 
});

router.get('/my', function(req, res, next) {
	console.log('두번째 기능함수');
	var my = req.params.my;
	res.render('main.ejs', { hello: 'Express' }); 
});

router.get('/:number', function(req, res, next) { // number 말고 다른 이름으로 해도 됨. 숫자는 문자든 어느것을 입력해도 이것이 실행됨
	console.log('세번째 기능함수');
	var number = req.params.number;
	res.render('main.ejs', { hello: 'Express' }); 
});
*/
/*
router.get('/:number', function(req, res, next) {
	console.log('네번째 기능함수');
	var number = req.params.number;
	res.render('main.ejs', { hello: number }); 
});
*/
/*
router.get('/:number', function(req, res, next) {
	var number = req.params.number;

	if(number%2 == 0){
		print = "값" + number + "는 짝수입니다."}
		else{
		print = "값" + number + "는 홀수입니다."}


	res.render('main.ejs', { hello: print }); 
});

*/

router.get('/sum/:number/:number2', function(req, res, next) {
	var number = req.params.number;
	var sum;

	  sum = number + number2;
		print = " 두 수의 합은" + sum + "입니다.";

	res.render('main.ejs', { hello: print }); 
});


//접속한 주소 정보를 다른 기능 파일(node.js 파일)에 전달
module.exports = router;
