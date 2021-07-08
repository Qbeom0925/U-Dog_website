var index = document.getElementsByClassName("contents");

function start(){
    for(i=1; i<index.length; i++){
        index[i].style.display = "none";
    }
}

function part1_change(){  //설문시작
    index[0].style.display = "none";
    index[1].style.display = null;
}


function part2_change(name){  //이름
    index[1].style.display = "none";
    index[2].style.display = null;
    name = document.getElementById("dog_name").value;
    console.log(name);
    var name1 = document.getElementsByClassName('name');
    name1[0].innerHTML=name+"의 생년월일은 언제인가요??";
}

$(function(name){
    $("#date3").datepicker({ //생일
        onSelect:function(dateText, inst) {
            console.log(dateText);
            console.log(inst);
    }});
});

function part3_change(name, dataText){ //몸무게
    index[2].style.display = "none";
    index[3].style.display = null;
    birthday =document.getElementById("date3").value;
    name = document.getElementById("dog_name").value;
    var weight1 = document.getElementsByClassName('weight');
    weight1[0].innerHTML=name+"의 몸무게는 몇인가요??";
}

function part4_change(name){ //성별
    index[3].style.display = "none";
    index[4].style.display = null;
    weight = document.getElementById("weight").value;
    name = document.getElementById("dog_name").value;
    var gender1 = document.getElementsByClassName('gender');
    gender1[0].innerHTML=name+"의 성별은 무엇인가요??";
}

function part5_change(name){
    index[4].style.display = "none";
    index[5].style.display = null;
    name = document.getElementById("dog_name").value;
    var kind1 = document.getElementsByClassName('kind');
    kind1[0].innerHTML=name+"는 강아지인가요 고양이인가요??";
}

function part6_change(name){
    index[5].style.display = "none";
    index[6].style.display = null;
    name = document.getElementById("dog_name").value;
    var object1 = document.getElementsByClassName('object');
    object1[0].innerHTML=name+"의 품종은 무엇인가요??";
}

function part7_change(name){
    index[6].style.display = "none";
    index[7].style.display = null;
    name = document.getElementById("dog_name").value;
    var neutralization1 = document.getElementsByClassName('neutralization');
    neutralization1[0].innerHTML=name+"는 중성화 수술을 했나요??";
}

function part8_change(name){
    index[7].style.display = "none";
    index[8].style.display = null;
    name = document.getElementById("dog_name").value;
    var prevention1 = document.getElementsByClassName('prevention');
    prevention1[0].innerHTML=name+"는 예방접종을 했나요??";
}

function part9_change(name){
    index[8].style.display = "none";
    index[9].style.display = null;
    name = document.getElementById("dog_name").value;
    var num1 = document.getElementsByClassName('num');
    num1[0].innerHTML=name+"는 등록번호가 있나요??";
}

function part10_change(name){
    index[9].style.display = "none";
    index[10].style.display = null;
    name = document.getElementById("dog_name").value;
    var disease1 = document.getElementsByClassName('disease');
    disease1[0].innerHTML=name+"는 과거 질병이 있나요??";
}

function part11_change(name){
    index[10].style.display = "none";
    index[11].style.display = null;
    name = document.getElementById("dog_name").value;
    var allergy1 = document.getElementsByClassName('allergy');
    allergy1[0].innerHTML=name+"는 알레르기 반응이 있는 음식이 있나요??";
}

function part12_change(name){
    index[11].style.display = "none";
    index[12].style.display = null;
    name = document.getElementById("dog_name").value;
    var meal1 = document.getElementsByClassName('meal');
    meal1[0].innerHTML=name+"는 하루에 식사를 얼마나 하나요??";
}

function part13_change(name){
    index[12].style.display = "none";
    index[13].style.display = null;
    name = document.getElementById("dog_name").value;
    var pee1 = document.getElementsByClassName('pee');
    pee1[0].innerHTML=name+"는 하루에 소변을 얼마나 하나요??";
}

function part14_change(name){
    index[13].style.display = "none";
    index[14].style.display = null;
    name = document.getElementById("dog_name").value;
    var poop1 = document.getElementsByClassName('poop');
    poop1[0].innerHTML=name+"는 하루에 대변을 얼마나 하나요??";
}

function part15_change(){
    index[14].style.display = "none";
    index[15].style.display = null;


    // // var send_array = Array();
    // // var send_cnt = 0;
    // // var chkbox = $(".checkSelect");
    
    // // for(i=0;i<chkbox.length;i++) {
    // //     if (chkbox[i].checked == true){
    // //         send_array[send_cnt] = chkbox[i].value;
    // //         send_cnt++;
    // //     }
    // // }
    // // $("#array").val(send_array);

    // var name = document.getElementById("dog_name").value;
    // var birthday = document.getElementById("date3").value;
    // var weight = document.getElementById("weight").value;
    // var gender = document.getElementById("gender").value;
    // var kind = document.getElementById("kind").value;
    // var object = document.getElementById("object").value;
    // var neutralization = document.getElementById("neutralization").value;
    // var prevention = document.getElementById("prevention").value;
    // var num = document.getElementById("num").value;
    // var disease = document.getElementsByClassName("Disease").value;
    // var allergy = document.getElementById("allergy").value;
    // var meal = document.getElementById("meal").value;
    // var pee = document.getElementById("pee").value;
    // var poop = document.getElementById("poop").value;

    // var disease = document.getElementsByName("disease").length;



    // var end1 = document.getElementsByClassName('end');
    // end1[0].innerHTML+="<h5>"+name+"의 정보입니다."+"</h5>";
    // end1[1].innerHTML+="<h5>"+"생일: "+birthday+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"몸무게: "+weight+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"성별: "+gender+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"종: "+kind+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"품종: "+object+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"중성화: "+neutralization+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"예방접종: "+prevention+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"등록번호: "+num+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"과거질병: "+"</h5>";
    // for (var i=0; i<disease; i++) {
    //     if (document.getElementsByName("disease")[i].checked == true) {
    //         end1[1].innerHTML += ' '+document.getElementsByName("disease")[i].value + ' ';
    //     }
    // }
    // end1[1].innerHTML+="<br>";
    // end1[1].innerHTML+="<h5>"+"알러지: "+allergy+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"하루 식사 횟수: "+meal+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"하루 소변 횟수: "+pee+"</h5>"+"<br>";
    // end1[1].innerHTML+="<h5>"+"하루 대변 횟수: "+poop+"</h5>"+"<br>";
}

function part16_change(name){
    index[15].style.display = "none";
    index[16].style.display = null;
    name = document.getElementById("dog_name").value;
    var end1 = document.getElementsByClassName('end');
    end1[2].innerHTML+="<h3>"+name+"에게 맞춤형 간식입니다."+"</h3>";

    var arr = [];
    var disease = document.getElementsByName("disease").length;
    for (var i=0; i<disease; i++) {
        if (document.getElementsByName("disease")[i].checked == true) {
            arr[i] = document.getElementsByName("disease")[i].value;
        }
    }
    var food1 = document.getElementById('food');
    // food1.innerHTML="<p>ㅇㄴㄻㄴㅇㄹ<p>";

    if(arr!=null){
        for(var j=0; j<arr.length; j++){
                if(arr[j]=="born"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/born.jpg'"+"><div class='exp'><h4>관절 튼튼 근육 튼튼<br>부드러운 소고기</h4><ul><li>관절 개선</li><li>근육 증가</li><li>영양공급</li></ul></div> <button id='end_btn' type='button' onclick=born_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }else if(arr[j]=="skin"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/skin.jpg'"+"><div class='exp'><h4>피부 증상을 위한<br>뽀송뽀송 치킨</h4><ul><li>피부보습/피부건강</li><li>피부염 개선</li><li>알러지 개선</li></ul></div> <button id='end_btn' type='button' onclick=skin_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }else if(arr[j]=="jang"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/jang.jpg'"+"><div class='exp'><h4>장 건강을 위한<br>강아지 소세지</h4><ul><li>변비 증상 개선</li><li>복통 개선</li><li>부담 없는 간식 소세지</li></ul></div> <button id='end_btn' type='button' onclick=jang_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }else if(arr[j]=="eye"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/eye.jpg'"+"><div class='exp'><h4>눈 건강을 위한<br>eye조아 육포</h4><ul><li>강아지들의 눈건강</li><li>눈 건조 증상 감소</li><li>+ 영양분까지 포함</li></ul></div> <button id='end_btn' type='button' onclick=eye_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }else if (arr[j]=="mouth"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/tooth.jpg'"+"><div class='exp'><h4>치아건강을 위한<br>일석이조 강아지껌</h4><ul><li>입냄새 제거</li><li>치석 제거</li><li>종합적인 구강관리</li></ul></div> <button id='end_btn' type='button' onclick=tooth_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }else if(arr[j]=="heart"){
                    food1.innerHTML +="<div class='foodimg1'><img class='foodimg' src="+"'media/food/heart.jpg'"+"><div class='exp'><h4>심장기능 개선<br>영양공급 육포</h4><ul><li>면역력 개선</li><li>심장병 완화</li><li>스트레스 완화</li></ul></div> <button id='end_btn' type='button' onclick=heart_add() class='btn btn-outline-warning'>장바구니 담기</button></div>";
                }
        }
    }
    var foodimg1 = document.getElementsByClassName("foodimg1");
    var foodimg = document.getElementsByClassName("foodimg");


    // if(foodimg1.length==1){
    //     foodimg1[0].style.width="48%";
    //     foodimg[0].style.width="90%";
    // }

    // if(foodimg1.length==2){
    //     foodimg1[0].style.width="48%";
    //     foodimg1[1].style.width="48%";
    //     foodimg[0].style.width="90%";
    //     foodimg[1].style.width="90%";
    // }
    // for(var k=0; k<foodimg1.length; k++){
    //     foodimg1[k].style.width="48%";
    //     foodimg[k].style.width="90%";
    // }                                           
}
function eye_add() {
    localStorage["cart0"] = "eye";
    localStorage["cart_eye_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function jang_add() {
    localStorage["cart1"] = "jang";
    localStorage["cart_jang_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function born_add() {
    localStorage["cart2"] = "born";
    localStorage["cart_born_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function tooth_add() {
    localStorage["cart3"] = "tooth";
    localStorage["cart_tooth_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function skin_add() {
    localStorage["cart4"] = "skin";
    localStorage["cart_skin_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function heart_add() {
    localStorage["cart5"] = "heart";
    localStorage["cart_heart_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function standard_add() {
    localStorage["cart6"] = "standard";
    localStorage["cart_standard_cnt"] = 1;
    alert("장바구니 담기 완료");
}
function standard2_add() {
    localStorage["cart7"] = "standard2";
    localStorage["cart_standard2_cnt"] = 1;
    alert("장바구니 담기 완료");
}

function product_change(){
    location.href="product.html";
}