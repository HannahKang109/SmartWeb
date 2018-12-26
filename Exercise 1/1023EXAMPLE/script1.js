
/**if문을 사용해서 점수별 성적을 출력하는 코드를 작성하시오.
 * 90점 이상 : A
 * 80점 이상 : B
 * 70점 이상 : C
 * 60점 이상 : D
 * 60점 미만 : F
 * 
 * 출력) 당신의 점수는 99점, A입니다.
 */

 a=99;
 if(a>=90){
    window.document.write("당신의 점수는", a,"점, A입니다.");
}   else if(a>=80){
    window.document.write("당신의 점수는", a,"점, B입니다.");    
    }
    else if(a>=70){
    window.document.write("당신의 점수는", a,"점, C입니다.");    
    }
    else if(a>=60){
    window.document.write("당신의 점수는", a,"점, D입니다.");    
    } 
 else{
    window.document.write("당신의 점수는", a,"점, F입니다.");     
 }
