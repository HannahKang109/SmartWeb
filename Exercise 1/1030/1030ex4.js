/*두개의 문자열을 입력받아서 (prompt()) 그 중 글자가 더 긴 문자열을 보여주는 코드를 작성

예시)
1: 장수하늘소
2: 하늘소
출력 : 장수하늘소

결과물 : 두개 중 긴 문자열
재료 : 문자열 2개, 각 문자열의 길이

내가 한 것
*/
input=window.prompt("첫번째 문자를 입력하세요.");
input2=window.prompt("두번째 문자를 입력하세요.");

a=input.length;
b=input2.length;

if(a>b){
window.document.write(input);
}
else if(a<b){
window.document.write(input2);   
}
else{
window.document.write("두 문자열의 길이가 동일합니다.");    
}

/*
msg1 =""; //첫번째 문자열
msg2 =""; //두번째 문자열
result =""; // 긴 문자열
msg1_length = 0; // 첫번째 문자열 길이
msg2_length = 0; // 두번째 문자열 길이

msg1=window.prompt("첫번째 문자열을 입력하세요.");
msg2=window.prompt("두번째 문자열을 입력하세요.");

msg1_length = msg1.length;
msg2_length = msg2.length;

if(msg1_length < msg2_length ) {
    result = msg2;
} else if(msg1_length > msg2_length){
    result = msg1;
} else {
    result = "두 문자열의 길이가 같습니다.";
}

window.document.write(result);
*/