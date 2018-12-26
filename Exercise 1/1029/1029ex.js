
/**제비뽑기 프로그램을 만들자
 * 
 * 뽑은 숫자 
 * 7 - 축하합니다. 1등! 유럽 여행권에 당첨되었습니다.
 * 2,5 - 축하합니다. 2등! 100인치 TV에 당첨되었습니다.
 * 4,6,9 - 축하합니다. 3등! 10만원 상품권에 당첨되었습니다.
 * 이외의 숫자 - 티슈를 드립니다.
 * 
 * 결과물 : 출력되는 메시지
 * 재료 : 입력한 숫자, 등수별 숫자
*/
/*
select_num = "";
select_num = window.prompt("뽑은 숫자를 입력해 주세요.","");
switch(select_num){
    case "7":
    window.document.write("축하합니다. 1등! 유럽 여행권에 당첨되었습니다.");
    break;
    case "2":
    case "5":
    window.document.write("축하합니다. 2등! 100인치 TV에 당첨되었습니다.");
    break;
    case "4":
    case "6":
    case "9":
    window.document.write("축하합니다. 3등! 10만원 상품권에 당첨되었습니다.");
    break;  
    default:
    window.document.write("티슈를 드립니다.");  
}
*/
//내가 한 것

/**switch(select_num){
    case 7:
    window.document.write("축하합니다. 1등! 유럽 여행권에 당첨되었습니다.")
    break;
    case 2:
    case 5:
    mes = window.prompt("축하합니다. 2등! 100인치 TV에 당첨되었습니다.");
    break;
    case 4:
    case 6:
    case 9:
    mes = window.prompt("축하합니다. 3등! 10만원 상품권에 당첨되었습니다.");
    break;  
    default:
    mes = window.prompt("티슈를 드립니다.");  
}

*/
//함수

/**
 * 프로그램 안에서 반복해서 수행하는 계산이나 작업을 하나로 묶어 놓은 구조
 * 함수를 활용해서 이전에 작성했던 코드를 재사용 할 수 있음
 * 함수 내의 코드에서 오류가 발생했을 경우, 함수의 내용만 수정하면
 * 함수가 적용된 모든 부분에 같이 적용됨 => 유지 보수가 편함
 * 
 * 주의해야 될 점)
 * 함수는 기능에 따라서 각자 다른 이름을 가짐
 * 함수 이름은 기능을 이해할 수 있도록 이름을 정해야 함
 * 
 * 함수는 기능에 따라서 필요한 재료(데이터)가 필요할 수 있음
 * 이를 매개변수라 함. 함수를 만들때 매개변수도 같이 표시
 * 참고로 매개변수가 필요하지 않은 경우 별도로 함수에 표시하지 않음
 * 
 * 함수는 기능에 따라서 반환값(리턴값)이 있거나 없을 수 있음
 * 반환값은 함수가 기능을 수행한 결과 값
 * 결과를 반환하는 코드(return)을 활용하여 함수의 결과 값을 도출
 * 예시) num = window.prompt("안녕하세요","");
 * window.prompt()함수의 반환값은 변수 num에 들어감
 * 참고로 반환값이 없을 때는 결과를 반환하는 코드(return)를 작성하지 않아도 됨 
 * 
 * 기본형태)
 * function 함수이름(매개변수1, 매개변수2, 매개변수3,...){
 *  함수가 처리하는 내용
 *  return 결과값
 * }
 */
/**
 * 예시)두 수를 더하는 함수
 */
/**
 * 함수 이름 조건 : 영문자, 숫자, 언더바(_), 달러기호($)를 쓸 수 있음
 *                 단, 맨 처음 문자는 숫자가 올 수 없음
 *                 대문자, 소문자를 구분함
 */
/*function addNumber (number1, number2){
    window.document.write(number1, "<br>");
    window.document.write(number2, "<br>");

    sum = number1 + number2;

    return sum;
}

/**
 * 함수 사용법
 */
/*
result = addNumber(1,2);
window.document.write("결과값 :", result);
*/
/*제비 뽑기 프로그램을 함수로 만들기*/

select_num = "";
select_num = window.prompt("뽑은 숫자를 입력해 주세요.","");

function pickLotto(select_num){
    switch(select_num){
        case "7":
        window.document.write("축하합니다. 1등! 유럽 여행권에 당첨되었습니다.");
        break;
        case "2":
        case "5":
        window.document.write("축하합니다. 2등! 100인치 TV에 당첨되었습니다.");
        break;
        case "4":
        case "6":
        case "9":
        window.document.write("축하합니다. 3등! 10만원 상품권에 당첨되었습니다.");
        break;  
        default:
        window.document.write("티슈를 드립니다.");   
}

}
pickLotto(select_num);

//변수의 인식 범위(scope)

/**
 * 함수 밖에서도 사용할 수 있는 변수(글로벌 변수, 전역변수), 
 * 함수 안에서만 쓸 수 있는 변수(로컬변수, 지역변수)를 구분하여 활용할 수 있음 ==>헷갈림 방지
 */

 /**
  * 로컬 변수
  * 
  * 로컬 변수는 그 변수를 선언한 함수 내에서만 사용할 수 있는 함수이며,
  * 그 범위는 함수를 감싸고 있는 대괄호{}의 시작부터 끝까지임
  * 함수 안에서 만들 수 있으며, 변수명 앞에 var 키워드를 붙여 만들 수 있음
  * 
  * 기본형태)
  * function myFunction(){
  *     var num1 = 1; //지역변수
  *     num2 = 2; // 전역변수    
  * }
  */

  a = 1; // 전역변수

  function showNumber(){  // 함수 인식
      var a;
      a = 2; // 지역변수
      window.document.write(a,"<br>");
  }

  showNumber();  // 함수 실행
  window.document.write(a);

 /**
  * 지역변수는 {}괄호로 묶인 부분만 활용할 수 있으므로 함수 밖에서는 활용할 수 없음
  * 예시에서 변수의 이름이 같지만 변수를 참조하는 위치
  * (함수 밖/안)에 따라 값이 다르게 처리됨
  * var를 붙임
  */
 
// 글로벌 함수
/**
 * 함수의 외부에서 만들고 사용한 변수를 글로벌 변수, 전역 변수라고 함
 * 글로벌 변수는 함수의 안이나 밖에서 참조, 변경 할 수 있음
 * var를 붙이지 않음
 */

 num1 = 1;
 function showNumber2() {
     var num1 = 3;
    
 }
 showNumber2();
 window.document.write("<br>전역변수 :", num1);

 /**
  * 지역변수, 전역변수의 활용
  * 
  * 지역변수는 함수 내에서 임시 값을 저장하는 용도(임시저장장소)
  * 전역변수는 되도록이면 함수 밖에서 활용함
  * 전역변수 값이 필요하면 매개변수로 전역변수 값을 받음
  * >>실수로 전역변수 값을 잘못 대입하면,
  * 코드 전체의 전역변수 값이 변경될 수 있으므로 주의해야 함
  */