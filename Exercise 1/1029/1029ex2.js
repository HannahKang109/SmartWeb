/*국어, 영어, 수학 성적을 매개변수로 받아 평균을 반환하는 함수 만들기*/

/**
 * 결과물 : 평균
 * 재료 : 국어, 영어, 수학 점수
 */

result = 0;
korean = 90;
english = 60;
math = 50;

function average (akorean, aenglish, amath){ //함수 인식
    sum = akorean + aenglish + amath;
    return sum/3; 
}
result = average(korean, english, math); //함수 호출
window.document.write("값은 ?",result);

