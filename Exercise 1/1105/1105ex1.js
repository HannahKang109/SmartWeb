/**스마트폰을 대상으로 정하고 오브젝트 만들기
 * 
 * 제작사   기기명      색상        특징        전화가 온다(함수)
 * 삼성     S6         화이트      듀얼액정     화면에"전화왔어요" 출력
 */

 smartphone = {
         company : "Samsung",  
         name : "S6",
         color : "white",
         feature : "dual screen",
         call : function () {
             return "전화왔어요";
         } 
     }
 

 window.document.write("<br>",smartphone.name,"<br>",smartphone.feature,"<br>",smartphone.call());
 
 
/**
 * 대상의 상태 : 스마트폰 전원, 스마트폰 통화중  >> 데이터
 * 대상의 행동 : 전화를 건다. 문자메시지를 보낸다. 사진을 찍는다.  >> 함수
 */

smartphone = {
    on_off : "on",
    calling : "callling",
    call_func : function() {
        return "전화중입니다.";    
    },
    sms : function() {
        return "문자를 보냅니다.";    
    },
    photo : function() {
        return "사진을 찍습니다.";    
    },
}

window.document.write("<br>","지금 켜져 있나요?", smartphone.on_off);
window.document.write("<br>","전화중인가요?",smartphone.call_func());