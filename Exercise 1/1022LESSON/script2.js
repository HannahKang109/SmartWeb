// HTML 문서에 글자를 표시하는 코드
/**
 * 문자열을 표시할 때 쌍따옴표,따옴표("") 모두 사용 가능하다.
 * 코드 마지막에는 세미콜론(;)을 작성한다.
 */
window.document.write("Hello Hannah Kang!!");

//대화상자(메시지창)을 표시하는 코드
window.alert("안녕하세요");

//웹페이지 배경색을 바꾸는 코드
/**
 * = 다음에는 색상 이름 혹은 색상의 RGB 코드를 작성
 * 색상 이름은 www.w3schools.com에서 color name을 
 * 검색하면 색상 목록이 출력
 */
window.document.bgColor = "green";

//웹페이지 안의 전체 글자색을 바꾸는 코드
window.document.fgColor = "yellow";

//변수
/**
 * 변수에 값(데이터)를 넣으려면 대입연산자(=)을 활용한다.
 * 변수 이름은 =을 기준으로 왼편에, 데이터는 오른편에 적는다.
 * 마지막은 세미콜론으로
 * a는 변수, 1은 값 / 숫자만 가능한 것이 아니라 "문자"도 가능
 * 변수 이름 규칙 : 영문자, 언더바(_), 달러기호($) 단, 맨 첫 문자로는 숫자는 올 수 없다.
 * 대소문자 구분한다.
 * 예)1abc 안됨 
 */
a = 1;   
b = "글자";
b = 3;

/**
 * 최종적으로 변수 a에는 1이 저장, b에는 "글자" >> 3 저장
 */

 //자료의 형태1- Number
 /**
  * Number 자료형에는 정수, 음수, 실수 모두 저장이 가능하다.
  */
 a = 1;
 a = -1;
 a = 1.1;

 //자료의 형태2- boolean
 /**
  * boolean 자료형은 true(참) 혹은 false(거짓)만 저장이 가능하다.
  * 보통 boolean 자료형을 쓰는 경우는 2가지 중 한가지 상태일 때,
  * ex) 회원 여부, 결제 여부, 약관 동의 등을 표시할 때 쓴다.
  */
 b=true;
 c=false;

 //자료의 형태3- 문자열(String)
 /**
  * 문자열이란 : 하나 이상의 문자를 나열한 것
  * 문자열은 큰따옴표 혹은 작은 따옴표로 감싸서 표현
  * ex)"abcd", 'abcd'
  */
 d="abcd";
 e='abcd';
 // 이스케이프 시퀸스(순서) - 순서를 벗어남
 /**
  * 문자열을 처리할 때 특정 문자가 문자열에 있으면,
  * 해당 특정 문자는 글자로 처리하지 않는 문자들
  * \n : 줄 바꿈
  * \t : 탭
  * \" : 큰따옴표를 글자로 표시
  * \' : 작은따옴표를 글자로 표시
  * 
  * 문자열 중에 따옴표 혹은 작은 따옴표를 중복으로 쓰지 않는다.
  * 예) d="abc("def")"; (이렇게 쓰지 않음(중복))
  *     d="abc('def')"; (안쪽의 따옴표를 작은 따옴표로 바꿔쓴다.)
  */
 d="<pre>ab\ncd</pre>"; 
 window.document.write(d);
/**
 * 문자열을  html에 출력할 때 <pre></pre>태그를 붙여준다.
 */

d="ab\ncd";
alert(d);

 //자료의 형태(4) - 오브젝트(Object)형
// 사용자가 기본 자료형(number, string, boolean)을 조합해서 만든 
// 사용자 정의 형태의 자료형

/**
 * 학생의 점수 정보를 저장한다고 했을 때
 * 기본 자료형으로만 저장한다면,
 * 수학 점수 : Number,
 * 학생 이름 : String
 */

 /**
  * 학생 점수 정보 저장을 위해
  * Number형, String형 변수 한개씩을 묶어서 오브젝트 변수로 만듬
  * 표현할 수 있는 데이터 형태 다양해짐
  * 코드를 작성할 때 별도의 변수를 참조하는 것보다, 데이터를 가져오기 편함
  */

//자료의 형태5 - null형
  /** 값이 없음 */
  
//자료의 형태6 - 미정의(undefined)형
/**
* 변수가 존재하지 않음
*/

   //자료의 형태7 - NaN(Not a Number)형
   /**
    * '데이터가 숫자가 아니다'
    * 예시)글자를 숫자로 바꾸고 싶을 경우
    * '1' >> 1
    * '가나다라' >> NAN
    */

    //자료의 형태8 - Infinity 형
    /**
     * 무한대를 표시
     * 예) num = 100 / 0;       num >> 'Infinity'가 표시
     * 예2) num = -100 / 0;     num >> '-Infinity'가 표시
     */

    //데이터 형 변환하기
    /**
     * case1)
     * 문자열을 숫자(정수)로 바꾸는 경우
     * parseInt() >> 괄호 안에 문자열을 넣는다.
     * 예)
     * a = "234";
     * num = parseInt(a);
     * 
     * num >> 234 (숫자이다.)
     * 
     * 예2)
     * a="hi";
     * num = parseInt(a);
     * 
     * num >> NAN (숫자가 아니다.)
     * 
     * case2)
     * 문자열을 숫자(소수)로 바꾸는 경우
     * 
     * parseFloat() >> 괄호 안에 문자열을 넣는다.
     * 
     * 예)
     * b = "3.14";
     * num = parseFloat(b);
     * 
     * num >> 3.14(소수) 
     * 
     * case3)
     * 숫자, boolean형을 문자열로 바꾸는 경우
     *  변수이름.toString(); >> 변수이름이 붙음, 괄호안에는 아무것도 쓰지 않음
     *  변수 안의 값을 문자열로 바꾸어 주는 코드
     *  예) 
     *  a = 3;
     *  str = a.toString();
     * 
     *  str >> "3" (숫자가 아닌 문자열)
     * 
     *  b=true;
     *  b.toString();
     * 
     *  b = "true";
     *  
     *  * 모든 자료형은 toString()코드로 문자열로 바꿀 수 있다.
     * 문자열은 number형으로만 바꾸는 코드(parseInt(), parseFloat())가 제공된다.
     * 
     *  주의)문자열을 boolean형으로 바꾸는 기능을 제공하는 코드는 공식적으로 없음
     *  변환을 하려면, 직접 변환 코드를 작성해야 함
     * 
     */
//연산자

/**
 * 산술연산자(+,-,*,/,%): 수 계산에 사용
 * % (나머지, 모듈러 연산)의 활용 : 나머지의 값이 항상 나누는 값보다 작다는 점을 이용해서 
 *                                특정 범위의 값을 얻고 싶을 때 활용
 *                                 예)0~2사이의 값을 원할때, 특정 수를 3으로 나누고 나머지를 취함 
 */

/**
 * 대입연산자 ( = ) : 데이터를 변수에 저장하는 연산자
 * 좌측에는 변수가, 우측에는 값을 적는다.
 * 예) a = a + 2;
 * 우측 : 변수 a에 저장된 값과 2를 더한 결과값
 * 좌측 : 변수 a
 * 축약형태 : a += 2;(더하고) a -= 2;(빼고) a *= 2;(곱하고) a /= 2;(나누고) a %= 2;(나머지 저장)
 */

//증가 연산자 & 감소 연산자
/**
 * ++ : 증가 연산자, 변수의 값을 1 증가
 * 예)
 * b = 1;
 * b++;
 * b >> 2
 * 
 * -- : 감소 연산자, 변수의 값을 1 감소
 * b = 0;
 * b--;
 * b >> -1
 * 
 * 활용 : 데이터의 묶음인 배열(리스트)에서 순서대로 데이터를 찾아갈 때
 * 주소에 증가 연산자, 감소 연산자를 활용하여 데이터를 참조한다.
 */
// 변수이름++와 ++변수이름의 차이
/**
 * case 1)!!!!!!
 * a = 1;
 * x = a++;
 * 
 * x >> 1, a >> 2
 * (변수 x에 먼저 저장하고 변수 a의 값을 1 더한다.)
 * 
 * case 2)
 * a = 1;
 * x = ++a;
 * 
 * x >> 2, a >> 2
 * (변수 a값을 1 더하고, 변수 x에 a의 값을 저장한다.)
 */

//비교 연산자
 /**
  * 값의 크기를 비교하는 연산자 결과 값이 true 혹은 false로 나타난다.
  * 예) 10 < 20 (10은 20보다 작다) >> true(참)
  * 예2) 20 < 10 (20은 10보다 작다) >> false(거짓)
  * 
  * a < b (a는 b보다 작다.)
  * a > b (a는 b보다 크다.)
  * a <= b (a는 b보다 작거나 같다.)
  * a >= b (a는 b보다 크거나 같다.)
  * a == b (a와 b는 같다.)
  * a != b (a와 b는 다르다.)
  */

//삼항 연산자
/**
 * 조건식의 결과에 따라 값이나 처리를 선택하여 처리하는 연산자.
 * 
 * 조건식 ? 조건식이 참일 경우의 값 : 조건식이 거짓일 경우의 값
 * 
 * point = 90;
 * a = (point > 75) ? "합격" : "불합격"; >>> a = "합격";
 * 
 * a >> "합격"
 */

//논리 연산자
 /**
  * 여러개의 비교연산자(조건)를 조합하여 활용할 때 활용하는 연산자.
  * 
  * 형태 : 조건1 && 조건2 
  * 의미 : 조건1 그리고 조건2 (조건1과 조건2가 모두 만족할 때 전체 조건이 참)
  * 사용예 : ((a>=10) && (a<50))
  * 
  * 형태 : 조건1 || 조건2
  * 의미 : 조건1 또는 조건2 (조건1과 2가 둘 중 하나라도 만족하면 전체 조건이 참)
  * 사용예: ((a==1) || (a==100))
  * 
  * 형태 : !조건1
  * 의미 : 조건1이 아니다. (반대)
  * 사용예 : !(a == 100 )
  * 
  * 수학적 표기와 다른 것에 주의합시다.
  * 예)
  * 의미 : a 값은 4보다 크고 4.5보다 작거나 같다.
  * 수학적 표기 : 4<a<=4.5
  * 논리연산자 : (4 < a) && (a <= 4.5)
  */

//연산자 우선순위
/**
 * 규칙1 : 괄호()로 둘러싸인 부분을 무조건 먼저 계산
 * 규칙2 : 같은 순위일 경우는 왼편부터 계산
 * 규칙3 : 대입은 오른쪽부터 시작
 * 예)
 * (d/(a+b))*c
 * 
 * 실행1 : a+b >> 괄호로 둘러싸였다.
 * 실행2 : d/(a+b) >> *,/ 비교했을 때 왼편 먼저 계산. 
 *        괄호를 활용해 표현하는 것이 좋음  (d/(a+b))*c
 * 예) a = b = c = 1;
 * 
 * 실행1 : c = 1;
 * 실행2 : b = c;
 * 실행3 : a = b;
 */ 