//배열(Array)

/**
 * 관련있는 여러개의 값을 여러개의 변수로 저장하지 않고,
 * 하나의 이름으로 된 곳에 모아서 저장하는 것
 * 배열에 저장된 각각의 값은 '배열요소' 혹은 '요소'라고 하며,
 * 첨자(순서번호,인덱스)로 각 요소의 값을 읽어 올 수 있음
 * 
 * 배열 이름 : 변수의 이름 규칙하고 동일
 * 요소 : 배열에 속한 저장공간, 저장된 데이터 순서대로 첨자(순서번호, 인덱스)가 0부터 시작하여 표현
 * 예시) a[0],a[1],a[2] ...
 * 
 * 기본형태)
 * 1)
 * 배열이름 = new Array(데이터1, 데이터2, 데이터3 ...);
 * 
 * 2) 
 * 배열이름 = [데이터1, 데이터2, 데이터3 ...];
 * 
 * 참고) 배열에 초기 데이터가 없다면, (데이터 1, 데이터 2, 데이터 3 ...)는 생략해도 됨
 */

a = new Array();
b = [];

// 배열에 데이터 저장하기
/**
 * 배열에 속한 특정 요소에 데이터를 넣으려면 변수 이름과 대괄호 안에 순서 번호를 넣음
 * 
 * 기본형태)
 * 변수이름[순서번호]= 넣고 싶은 데이터;
 */
a[0] = "안녕하세요";
a[1] = 300;
a[2] = "red";

// 배열에 저장된 데이터 읽기

/**
 * 배열에 속한 특정 요소의 데이터를 읽으려면, 변수 이름과 대괄호 안에 저장하고 싶은 순서 번호를 넣음
 * 
 * 기본형태)
 * 변수 = 배열이름[순서번호];
 */
num = a[1];

// 연상 배열
/**
 * 배열에서는 순서 번호 대신에 문자열을 가지고 특정 요소를 참조할 수 있음
 * 
 * num = new Array();
 * 1) 변수이름[단어] = 값;
 * num["dog"] = "멍멍이"; // 번호 대신 "dog"라는 단어로 대신함
 * num["cat"] = "야옹이";
 * 
 * 2) 변수이름.단어 = 값;
 * num.red = "빨강";
 * num.yellow = "노랑";
 * 
 * 읽어올 경우)
 * 1)변수 = 변수이름[단어];
 * name = num["dog"]; >> name 변수 안에는 '멍멍이'
 * 
 * 2)변수 = 변수이름.단어;
 * name = num.red; >> name 변수 안에 '빨강'
 */
ani = [];
ani.dog = "강아지";
ani.cat = "고양이";

console.log(ani);

//이차원 배열
/**
 * 일차원 배열 = 배열 
 * 이차원 배열 = 배열 안에 있는 배열, 
 *              배열과 배열을 조합해서 표처럼 만든 배열
 * 기본형태)
 * 배열이름[순서번호1] = [데이터1, 데이터2];
 * 
 * 참고) 배열 [순서번호1][순서번호2]
 *       [순서번호1] 가로배열 요소를 의미
 *       [순서번호2] 세로배열 요소를 의미
 */
b = new Array();
b['red'] = ["빨강", "붉음"];
b['blue'] = ["파랑", "푸름"];

console.log(b['blue'][1]);

/*
a = new Array();
a['dog']['name'] = "개";
a['dog']['cry'] = "멍멍";
a['cat']['name'] = "고양이";
a['cat']['cry'] = "야옹";

console.log(a['dog']);
*/

//배열요소 잘라내기
/**
 * 배열요소의 일부를 잘라내어 새로운 배열을 만듦
 * 배열이름.slice(자르기 시작하는 순서번호, 자르기 직전의 순서번호);
 * slice() 함수는 리턴값이 배열
 * 원본 배열은 바뀌지 않음
 */

a = [10,20,30,40];
b = a.slice(1,3);

console.log(b);

//배열요소 제거하기
/**
 * 배열에서 특정한 요소를 제거하려면 delete 연산자를 활용
 * delete 배열이름[순서번호];
 * 뒤에 [순서번호]를 입력하지 않으면 배열 전체가 사라짐 delete a;
 */
a = [10,20,30,40];
delete a[2];  // 그 공간은 그대로 있고 값만 사라짐

console.log(a);

//배열의 처음과 끝에 요소 추가하기
/**
 * 배열의 처음에 요소를 추가하려면 unshift() 함수를 활용
 * 배열의 끝에 요소를 추가하려면 push() 함수를 활용
 * 
 * 배열이름.unshift(데이터)
 * 배열이름.push(데이터)
 */

 a = [1,2];
 a.unshift(3);

 console.log(a);

 a.push(4);

 console.log(a);

//배열의 처음과 끝에 요소 제거하기
/**
 * 배열의 끝(마지막) 요소를 삭제하려면 pop()함수를 사용
 * 배열의 처음 요소를 삭제하려면, shift()함수를 사용
 * 제거한 배열의 값을 리턴
 *  
 * 배열이름.pop();
 * 배열이름.shift();
 */

 b = [1,2,3];
 c = b.pop();

 console.log(c);
 console.log(b);

 b = [1,2,3];
 c = b.shift();

 console.log(c);
 console.log(b);

//문자열 관련 함수

/**
 * 글자를 저장하는 문자열에 몇가지 함수들을 활용하여,
 * 문자열의 길이(글자수), 문자추출, 분할, 검색 등을 할 수 있는
 * 함수들을 소개함
 */

 //문자열의 길이
 /**
  * 문자열에 저장된 문자의 수를 구함
  * 
  * 변수.length;
  * 리턴값이 문자의 수
  */
 msg = "반갑습니다";
 num = msg.length; //5

 window.document.write(num);

 //문자열에서 특정 문자 잘라내기
 /**
  * 문자열에서 지정된 한 문자를 잘라내려면,
  * charAt()함수를 활용
  * 
  * 변수.charAt(잘라낼 한 문자의 순서번호);
  * 변수에 저장된 원본은 변하지 않고,
  * 리턴값은 잘라낸 한 문자가 나타남
  */

msg = "그린컴퓨터아트학원";
msg2=msg.charAt(5)

window.document.write(msg2);

//문자열을 배열로 분할하기

/**
 * 문자열을 특정 문자를 기준으로 분할하려면 
 * split()함수를 활용
 * 
 * 변수.split(기준이 되는 글자)
 * 리턴값으로 나누어진 문자열의 배열(문자열이 나누어진 갯수에 따라 배열의 크기가 결정)
 */

mydate = "2018/5/30";
arr = mydate.split("/");

console.log(arr);

/**
 * 나누어진 문자열을 저장한 리턴값은 나누어진 
 * 순서대로 순서번호를 활용하여 읽어올 수 있음
 * 
 * 결과저장변수 = 변수이름[순서번호];
 */
myMonth = arr[1];
console.log(myMonth);

//문자열 검색하기
/**
 * 문자열을 검색하려면 indexOf() 함수를 활용함
 * 문자를 찾았을 때 발견된 문자의 인덱스 번호를 리턴하고
 * 못 찾았을 때는 -1을 반환함
 * 
 * 결과저장변수 = 변수이름.indexOf(찾을 문자열, 검색을 시작할 글자의 순서번호);
 */

 msg ="반갑습니다";
 result = msg.indexOf("요",0);

 console.log(result);

 //수학 함수

 /**
  * 수학 관련된 기능들을 모아놓은 수학함수를 활용하여
  * 쉽게 값을 계산할 수 있음
  * 
  * 변수 = Math.함수이름(함수의 매개변수들);
  */

a = Math.abs(-1);
console.log("a의 값 : ", a);

/*
함수이름	    기능	    사용법	                계산결과
abs()	    절대값	        a=Math.abs(-1)	        1
ceil()	    절상	        a=Math.ceil(100.4)	    101
floor()	    절하	        a=Math.floor(100.4)	    100
max()	    최대값 반환	    a=Math.max(1,8,3)	    8
min()	    최소값 반환	    a=Math.min(1,8,3)	    1
pow()	    거듭제곱	    a=Math.pow(4,2)	        16
random()	임의 수(난수)   a=Math.random()	        그때그때달라요
round()	    반올림	        a=Math.round(100.4)	    100
sqrt()	    평방근(루트값)	a=Math.sqrt(25)	        5
PI	        원주율	        a=Math.PI	            3.1415...
*/
//random() 함수를 활용해서 임의의 수를 선택한다. (난수를 생성)
/**
 * random() 함수는 0이상 1미만의 범위에 임의의 수를 만듬. 
 * 주로 floor함수와 함께 조합하여 임의의 정수를 만듬.
 */
/*
 //가정) 1에서 10까지의 정수로 된 난수가 필요
 Math.random() // 0 ~ 0.9999...
 Math.random() * 10 // 최대 범위값 = 10 >> 0~9.9999...
 (Math.random() * 10) + 1 // 최소 범위값 = 1 >> 1~10.9999...
 Math.floor((Math.random() * 10)+1) // floor() >> 1~10
*/
 //공식
 /**
  * 정수 n부터 정수 m까지 임의의 정수를 선택하는 방법 (n < m),
  * 임의의 정수 = Math.floor(Math.random() * ((m - n) + 1)) + n
  * 숫자.toFix(자릿수)>> 숫자 뒤에 소수 부분을 자릿수 만큼 표시
  * a = 1234.5678;
  * a.toFix(1) >> 1234.5
  */

//날짜

/**
 * 날짜나 시간을 다루려면 Date 함수를 사용함
 * 시간을 지정하지 않으면 현재 시간으로 된 Date()함수를 만듦
 * 
 * 날짜를 저장할 변수 = new Date();
 */

now = new Date(); // 현재 날짜
window.document.write(now);

//날짜를 가져오는 함수들
/*
Date()함수 결과물에서 날짜를 가져올 수 있음
날짜를 저장할 변수.함수 이름();
*/
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());

//시간을 가져오는 함수들
/*
Date()함수 결과물에서 시간을 가져올 수 있음
시간을 저장할 변수.함수이름();
*/
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//예시) 특정 날짜로부터 현재까지 며칠이 지났는지 알아보기
day = new Date(2002,1,1,0,0,0);
now = new Date();
//getTime()시간을 밀리초 단위로 바꾸는 함수
day_mil = day.getTime();
now_mil = now.getTime();
console.log("2002년1월1일을 밀리초 단위로 :",day_mil);
console.log("오늘 날짜를 밀리초 단위로 :",now_mil);

//오늘 날짜와 2002년도 값의 차이를 구함
dif = now_mil - day_mil;
console.log("2002년부터 오늘까지" + dif + "만큼 지났다.");

dif_days = Math.ceil(dif / (24*60*60*1000)); // 경과된 차이의 밀리초를 일수로 환산

window.document.write("며칠이 지났을까?", dif_days);

/* 날짜와 시간 함수
함수이름	        기능
getFullYear()	연도를 반환
getMonth()	    월을 반환 (1월0, 2월1,...),반환값+1
getDate()	    일을 반환
getDay()	    요일을 반환(0:일요일, 1:월요일...(0~6))
	
getHours()	    시간을 반환
getMinutes()	분을 반환
getSeconds()	초를 반환
	
getTime()	    1970년 1월 1일 오전 0시부터 현재까지 밀리초 단위 값을 반환
*/









