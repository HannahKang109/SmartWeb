//정규 표현

/**
 * 문자열을 추상적으로 표현(패턴)하여 
 * 주어진 문자열이 올바른 자료인지 검사하기 위한 방법
 * 
 * 숫자표현
 * [0-9] >> 0,1,2,3,4,5,6,7,8,9
 * 
 * 예시1)
 * 입력 : 1
 * 패턴 : [0-9]
 * >> 바른 입력
 * 
 * 예시2)
 * 입력 : a
 * 패턴 : [0-9]
 * >> 틀린 입력
 * 
 * 문자 표현
 * [a-z] >> 소문자 a에서 z까지 허용
 * [A-Z] >> 대문자 A에서 Z까지 허용
 * [a-zA-Z] >> 소문자 a에서 z까지 & 대문자 A에서 Z까지 허용
 * 
 * 예시)
 * 입력 : a
 * 패턴 : [a-b]
 * >> 바른 입력
 * 
 * 예시)
 * 입력 : f
 * 패턴 : [a-c]
 * >> 틀린 입력
 * 
 * 특수문자 표현
 * [~!@#$%^&*()] >> 대괄호 안에 허용할 특수 문자를 입력
 * 
 * 예시)
 * 입력 : /
 * 패턴 : [!@#]
 * >> 틀린 입력
 * 
 * 예시)
 * 입력 : /
 * 패턴 : [!@/#]
 * >> 바른 입력
 */

test_pat = /[0-9]/;
test_pat_2 = /[a-b]/;
test_pat_3 = /[~!@]/;

user_input = "a" // 사용자가 입력한 내용

/**
 * 패턴.test(검사할 문자열);
 * 
 * 검사할 문자열이 패턴에 맞는 바른 입력일 경우 true를 리턴
 * 검사할 문자열이 패턴에 맞지 않는 틀린 입력일 경우에는 false를 리턴
 */
window.document.write(test_pat_2.test(user_input));

/** 오브젝트(Object)형
/* 사용자가 기본 자료형(number, string, boolean)을 조합해서 만든 
/* 사용자 정의 형태의 자료형
*/ 

/**
 * 오브젝트 이름 = { 자료이름 : 데이터값, 자료이름 : 데이터값 }
 */

 a = { name : "배철수", score : 100 };
 b = { name : "홍길동", score : 40 };

 /**
  * 오브젝트에 저장된 값을 읽어오려면?
  * 
  * 오브젝트 이름.자료이름 >> 데이터값 리턴
  */

window.document.write("<br>", a.score);

/** 경우에 따라서 데이터값은 숫자,문자,배열,함수 */

person = {
    name : "손흥민",
    number : 7,
    id : 3123,
    family : ["아버지", "어머니", "형"],
    say_hello : function() {
        return " Good morning!";
    }
}
window.document.write("<br>", person.name);
window.document.write("<br>", person.number);
window.document.write("<br>", person.id);
window.document.write("<br>", person.family);
window.document.write("<br>", person.say_hello());

//오브젝트 안에 오브젝트를 넣을 수 있음

player = {
    son : {    
    name : "손흥민",
    number : 7,
    id : 3123,
    family : ["아버지", "어머니", "형"],
    say_hello : function() {
        return " Good morning!";
    }
},
    park : {    
        name : "박지성",
        number : 13,
        id : 3129,
        family : ["아버지", "어머니", "동생"],
        say_hello : function() {
            return " Good job!";
        }
    }
}

window.document.write("<br>",player.park.name);
//배열에 오브젝트를 넣을 수 있음

korean = [];
son = {    
    name : "손흥민",
    number : 7,
    id : 3123,
    family : ["아버지", "어머니", "형"],
    say_hello : function() {
        return " Good morning!";
    }
};
    park = {    
        name : "박지성",
        number : 13,
        id : 3129,
        family : ["아버지", "어머니", "동생"],
        say_hello : function() {
            return " Good job!";
        }
    }
    korean.push(son);
    korean.push(park);

    window.document.write("<br>",korean[1].name);
    window.document.write("<br>",korean[1].number);
    window.document.write("<br>",korean[1].id);
    window.document.write("<br>",korean[1].family);
    window.document.write("<br>",korean[1].say_hello());



