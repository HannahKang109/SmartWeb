/**3개의 과일이름을 나열하는 배열을 정의
 * 배열값을 그냥 출력 & 반복문으로 출력
 * 
 * window.prompt()함수를 활용해서 웹브라우저에서 
 * 입력한 숫자 5개를 배열에 저장하고 배열안의 숫자를 평균하여 표시하자.
 * 반복문을 활용해서 window.prompt()함수를 5번 호출하고 저장하자.
 */ 
name_list1 = new Array("딸기","포도","체리");
name_list2 = ["딸기","포도","체리"];

window.document.write(name_list1[0],name_list1[1],name_list1[2],"<br>"); 
// 데이터가 많아질때는 하기와 같이 반복문 for를 써서 출력하는 것이 간편함

for(i=0;i<3;i++){
    //i가 0~2로 반복됨
    window.document.write(name_list1[i],"<br>");
}
/**
 * 웹브라우저의 개발자 콘솔 화면(f12)에 변수 혹은 배열의 데이터를 출력하려면,
 * console.log()함수를 활용함
 */
console.log(name_list2);

/*
a = "234";
num = parseInt(a);
num >> 234(숫자)
*/
/*
num = 0;
for(i=0;i<5;i++){
    num = new array(a[i]);
    a[i] = window.prompt("숫자를 입력하세요","");
sum = 0;
sum += num;
ave = sum / 5;
}
window.document.write("평균 =", ave);
*/

a = [20,30,40,50,60];
num = parseInt(a);
window.document.write("숫자 =", a);
for(num=0;num<5;num++){
sum = 0;
sum += num;
ave = sum / 5;
}
window.document.write("평균 =", ave);