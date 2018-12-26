/**
 * 앞에서 작성한 (과일이름 배열)에 수박, 무화과를 뒤에 추가하고 맨처음 요소를 삭제하고 출력하기
 */

name_list1 = new Array("딸기","포도","체리");
for(i=0; i<name_list1.length; i++){
    window.document.write(name_list1[i],"<br>")
}
name_list1.push("수박","무화과");
for(i=0; i<name_list1.length; i++){
    window.document.write(name_list1[i],"<br>")
}
name_list1.shift();
for(i=0; i<name_list1.length; i++){
    window.document.write(name_list1[i],"<br>")
}
console.log(name_list1);

