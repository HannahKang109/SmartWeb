/** 1에서 10까지의 합을 구하는 프로그램 
 * 결과물 : 1~10까지 더한 값
 * 재료(매개변수 : 기능을 실행하는데 필요한 데이터) : 덧셈할 수, 반복하는 횟수

*/

//for 문 사용
sum = 0; // 덧셈을 한 결과를 저장하는 변수
num = 1; // 더하는 수
times = 1; // 반복하는 횟수 (10회 반복)
for(times = 1; times <= 10; times++){
    window.document.write("더한값 :",num,"<br>"); 
    window.document.write("더한 횟수 :",times,"<br>"); 
    sum = sum + num; // sum += num과 동일
    num += 1;//num=num+1과 동일
}
window.document.write("결과 :",sum,"<br>"); 
//합계 구하기 -> 이전 숫자 +1


//for 문 사용 내가 한 것
sum = 0; // 덧셈을 한 결과를 저장하는 변수
for(i = 1; i <= 10; i++){
    sum += i;
}
window.document.write(sum); 
//합계 구하기 -> 이전 숫자 +1


//while 문 사용
sum = 0; // 덧셈을 한 결과를 저장하는 변수
num = 1; // 더하는 수
times = 1; // 반복하는 횟수 (10회 반복)


while( times <= 10 ){
    window.document.write("더한값 :",num,"<br>"); 
    window.document.write("더한 횟수 :",times,"<br>"); 
    sum = sum + num; // sum += num과 동일
    num += 1;//num=num+1과 동일
    times = times + 1;
}
    window.document.write("결과 :",sum,"<br>"); 


//while 문 사용 내가 한 것
a = 0;
sum = 0;
while( a < 10 ){
    a++;
    sum += a;
}
window.document.write(sum); 
// 이전 숫자 +1 -> 합계 구하기

//do~while문 사용
sum = 0; // 덧셈을 한 결과를 저장하는 변수
num = 1; // 더하는 수
times = 1; // 반복하는 횟수 (10회 반복)

//반복을 실행하기 전
do { 
    window.document.write("더한값 :",num,"<br>"); 
    window.document.write("더한 횟수 :",times,"<br>"); 
    window.document.write("더한 결과물 :",sum,"<br>"); 
    sum = sum + num;
    num = num + 1;
    times = times + 1;
} while ( times <= 10);
window.document.write("결과 :",sum,"<br>"); 

/** 
 * 루프 중단하기
 * 
 * for문이나 while 같은 반복문을 도중에 중단하는 방법
 * 이때 break문을 사용
 * 반복문 안에 break가 있으면, 반복문 대괄호 부분의 마지막으로 코드의 실행 흐름이 이동
 * 
 * 기본형태)
 * while(조건){
 *  실행되는 부분 1
 *  break;
 *  실행이 안되는 부분
 * }
 *  실행되는 부분 2
 *  
*/

b = 2;
for(a=0; a<5; a++) {
    //a는 0,1,2,3,4
    if(b == a) {
        break;
    }
    window.document.write(b,'빼기', a,"=", b-a,"<br>");
}

/**
 * 반복 실행을 다음 차례로 옮기기(반복 실행을 생략하기)
 * 
 * break문은 실행중인 루프처리를 중단하지만 
 * continue 문은 현재 반복 처리만 생략(if조건에 해당하는 부분만 실행하지 않음)하고
 * 다음번 반복 처리를 수행한다.
 * 
 * 기본형태)
 * while(조건){
 *  실행되는 부분 1
 *  if(조건 2){
 * continue;
 * }
 *  실행이 될 수도 안 될 수도 있는 부분
 * }
 *  실행되는 부분 2
 */
window.document.write("continue를 활용한 뺄셈하기<br>");
 b = 2;
for(a=0; a<5; a++) {
    //a는 0,1,2,3,4
    if(b == a) {
        continue;
    }
    window.document.write(b,'빼기', a,"=", b-a,"<br>");
}

/**
 * 선택문
 * 
 * 프로그램의 실행 흐름에서 
 * 값에 따라 다른 처리를 해야할 경우를 
 * 간단하게 처리하기 위한 구문
 * 
 * switch문은 여러개의 case라는 선택사항에 따라 값이 맞는 것을 골라 처리
 * 선택사항 값이 맞지 않는 경우는 default 선택으로 넘어간다. 
 * 처리 후 break문을 활용하여 실행을 중지한다.
 * 
 * 기본형태)
 * switch(변수이름) {
 *    case 변수값 1:
 *      처리하고 싶은 내용
 *      break;
 *    case 변수값 2:
 *      처리하고 싶은 내용 2
 *      break;
 *    default :
 *      처리하고 싶은 내용 3
 * }
 */
i = 30;
switch(i){
    case 10:
        window.document.write("변수값은 10이다.<br>");
        break;
    case 20:
        window.document.write("변수값은 20이다.<br>");
        break;
    default:
        window.document.write("변수값은 10,20이 아니다.<br>");
}

//break 문을 생략하는 경우 
/**
 * 예시) 월마다 말일을 알려주는 프로그램을 작성할 때
 * 각 case마다 같은 처리를 하는 경우는 
 * break를 의도적으로 제외하여 코드를 작성하면
 * 여러번 반복해서 작성하지 않아도 됨
 */ 
month = 12;

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        window.document.write(month,"월의 말일은 31일이다.");
        break;
    case 2:
        day = 28;
        window.document.write(month,"월의 말일은 28일이다.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        window.document.write(month,"월의 말일은 30일이다.");
        break;

    default:
        window.document.write("1~12월 사이를 입력하세요.");
        break;
}
window.document.write(month,"월은", day);

/**
 * 참고 : 웹페이지에서 사용자에게 값 입력받기
 * 
 * 변수 = window.prompt("메시지 내용", "기본값"); 코드를 사용하면
 * 웹페이지에서 사용자에게 입력 받을 수 있는 대화상자가 나타난다.
 * 변수에 사용자가 입력한 값이 저장된다.
 */
mes = window.prompt("입력하는 대화상자", "안녕하세요.")
window.document.write(mes);




