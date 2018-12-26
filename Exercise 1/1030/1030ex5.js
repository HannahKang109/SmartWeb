/**
 * 2~12 사이의 임의의 수를 반환하는 dice()함수 만들기
 */
/*
 dice = Math.round((Math.random() * 10)+2);
 window.document.write("주사위를 던지세요 <br>",dice,"<br>");
 dice2 = Math.round((Math.random() * 10)+2);
 window.document.write("주사위를 한번 더 던지세요 <br>",dice2,"<br>");
 dice3= Math.floor((Math.random().toFix(1)*12)+2);
 window.document.write("주사위를 또 한번 던지세요 <br>",dice3,"<br>");
*/
  //공식
 /**
  * n부터 m까지의 정수로 된 난수가 필요하다면,
  * Math.floor((Math.random()*m)+n);
  */


// 1~6까지만 나오는 주사위 함수
function dice(){
    return Math.floor(Math.random()*6) + 1;
}
function twoDice(){
    return dice() + dice();
}

console.log("내가 던진 주사위 값은?: ", twoDice());


