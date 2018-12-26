/**자동차 오브젝트 만들기
 * 다음과 같이 각 차량에 대한 오브젝트를 생성하고
 * 배열에 저장하여 for문으로 내용 출력하기
 * 
 * 
 * 
 * 
 * 제작사       차량명      색상        연료        시동을 건다
 * 기아         소울        빨강        가솔린      화면에 "붕붕~" 출력
 * 현대         코나        은색        전기        화면에 "위잉위잉~" 출력
 * 쌍용         티볼리      검정        디젤        화면에 "우와아앙" 출력
 */
/*
Car = [];
Kia = {
    name : "Soul",
    color : "red",
    fuel : "gasolin",
    turn_on : function(){
        return "붕붕~";
    }
};

Hyundai = {
    name : "Kona",
    color : "silver",
    fuel : "electric",
    turn_on : function(){
        return "위잉위잉~";
    }
};

Ssangyong = {
    name : "Tivoli",
    color : "black",
    fuel : "disel",
    turn_on : function(){
        return "우와아앙~";
    }
}

Car.push(Kia);
Car.push(Hyundai);
Car.push(Ssangyong);

for(i=0; i<=2; i++){
    for(j=0; j<=3; j++)
    window.document.write("<br>",Car[i][j]);
}

Car.push(car1);
Car.push(car2);
Car.push(car3);
*/

car1 = {
    type : 1,
    company : "Kia",
    name : "Soul",
    color : "red",
    fuel : "gasolin",
    turn_on : function(){
        return "붕붕~";
    }
};

car2 = {
    type : 2,
    company : "Hyundai",
    name : "Kona",
    color : "silver",
    fuel : "electric",
    voltage : "10v",
    turn_on : function(){
        return "위잉위잉~";
    }
};

car3 = {
    type : 1,
    company : "Ssangyong",
    name : "Tivoli",
    color : "black",
    fuel : "disel",
    turn_on : function(){
        return "우와아앙~";
    }
}

cars = [car1, car2, car3];


for(i=0; i < cars.length; i++){
    // i : 0, 1, 2
    if(cars[i].type == 2){
        window.document.write("<br>",cars[i].voltage);
    }
    window.document.write("<br>",cars[i].company);
    window.document.write("<br>",cars[i].name);
    window.document.write("<br>",cars[i].color);
    window.document.write("<br>",cars[i].fuel);
    window.document.write("<br>",cars[i].turn_on());
}
