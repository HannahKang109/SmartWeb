//구구단 2~4단까지만 출력하기/

for(i=2; i<=4; i++){
    for(j=1; j<=9; j++){
    window.document.write(i,"X", j,"=", i * j,"<br>");
    }
}


//오늘 날짜 출력하기 ( 시간 제외 )/

now = new Date(); // 현재 날짜
window.document.write(now,"<br>");

window.document.write(now.getFullYear(),"년",(now.getMonth()+1),"월",(now.getDate()),"일","<br>");

year = now.getFullYear();
month = now.getMonth()+1;
date = now.getDate();


window.document.write(year,"/", month,"/", date,"<br>");


//9개의 숫자값을 배열에 저장하고 각 열의 합계를 구하자
//28        38          62
//36        81          65
//47        46          46
//1열합     2열합       3열합

a = [ 28, 36, 47 ];
b = [ 38, 81, 46 ];
c = [ 62, 65, 46 ];
hab1 = a[0] + a[1] + a[2];
hab2 = b[0] + b[1] + b[2];
hab3 = c[0] + c[1] + c[2];

window.document.write("1열의 합",hab1,"<br>");
window.document.write("2열의 합",hab2,"<br>");
window.document.write("3열의 합",hab3,"<br>");


arr = [];
arr[0] = [28, 38, 62];
arr[1] = [36, 81, 65];
arr[2] = [47, 46, 46];

sum1 = 0;
sum2 = 0;
sum3 = 0;

for( i = 0; i < 3; i++) {
    //i : 0 1 2
    sum1 = sum1 + arr[i][0];
    sum2 = sum2 + arr[i][1];
    sum3 = sum3 + arr[i][2];
}

window.document.write("<br>", sum1, "/", sum2, "/", sum3);



