var arr = new Array();


var eye_loc_cnt= Number(localStorage["cart_eye_cnt"]);
var jang_loc_cnt= Number(localStorage["cart_jang_cnt"]);
var born_loc_cnt = Number(localStorage["cart_born_cnt"]);
var tooth_loc_cnt = Number(localStorage["cart_tooth_cnt"]);
var skin_loc_cnt = Number(localStorage["cart_skin_cnt"]);
var heart_loc_cnt =Number(localStorage["cart_heart_cnt"]);
var standard_loc_cnt = Number(localStorage["cart_standard_cnt"]);
var standard2_loc_cnt = Number(localStorage["cart_standard2_cnt"]);


var eye_inner = document.getElementsByClassName("eye_cnt");
var jang_inner = document.getElementsByClassName("jang_cnt");
var born_inner = document.getElementsByClassName("born_cnt");
var tooth_inner = document.getElementsByClassName("tooth_cnt");
var skin_inner = document.getElementsByClassName("skin_cnt");
var heart_inner = document.getElementsByClassName("heart_cnt");
var standard_inner = document.getElementsByClassName("standard_cnt");
var standard2_inner = document.getElementsByClassName("standard2_cnt");

var eye_total =0;
var eye_pri = document.getElementsByClassName("eye_price");
eye_total = eye_loc_cnt*12500;

var jang_total =0;
var jang_pri = document.getElementsByClassName("jang_price");
jang_total = jang_loc_cnt*14500;

var born_total =0;
var born_pri = document.getElementsByClassName("born_price");
born_total = born_loc_cnt*16500;

var tooth_total =0;
var tooth_pri = document.getElementsByClassName("tooth_price");
tooth_total = tooth_loc_cnt*16500;

var skin_total =0;
var skin_pri = document.getElementsByClassName("skin_price");
skin_total = skin_loc_cnt*17500;

var heart_total =0;
var heart_pri = document.getElementsByClassName("heart_price");
heart_total = heart_loc_cnt*19500;

var standard_total =0;
var standard_pri = document.getElementsByClassName("standard_price");
standard_total = standard_loc_cnt*19500;

var standard2_total =0;
var standard2_pri = document.getElementsByClassName("standard2_price");
standard2_total = standard2_loc_cnt*19500;



function get_value(){
    for(var i=0; i<=7; i++){
        if(localStorage["cart"+i]==null){
            continue;
        }
        else{
            arr[i] = localStorage["cart"+i];
        }
    }for(j=0; j<arr.length; j++){
        if(arr[j]==null){
            arr.splice(j,1);
            j--;
        }
    }
}
var cart_arr = document.getElementsByClassName("cart_pro");
var cart_total =document.getElementsByClassName("cart_total");
var cart_total1 = document.getElementsByClassName("cart_total1");
var sum=0;
var price_total=0;

function display_cart(){
   for(var i=0; i<=7; i++){
      cart_arr[i].style.display="none";
   }
   for(var j=0; j<=arr.length; j++){
         if(arr[j]=="eye"){
            cart_arr[0].style.display=null;
            // comma(eye_total)
            eye_pri[0].innerHTML =comma(eye_total);
            eye_inner[0].innerHTML = "수량: "+eye_loc_cnt+"개";
            price_total +=eye_total;
            sum+=12500;
         }else if(arr[j]=="jang"){
            cart_arr[1].style.display=null;
            jang_pri[0].innerHTML =comma(jang_total);
            jang_inner[0].innerHTML = "수량: "+jang_loc_cnt+"개";
            price_total +=jang_total;
            sum+=14500;
         }else if(arr[j]=="born"){
            cart_arr[2].style.display=null;
            born_pri[0].innerHTML =comma(born_total);
            born_inner[0].innerHTML = "수량: "+born_loc_cnt+"개";
            price_total +=born_total;
            sum+=16500;
         }else if(arr[j]=="tooth"){
            cart_arr[3].style.display=null;
            tooth_pri[0].innerHTML =comma(tooth_total);
            tooth_inner[0].innerHTML = "수량: "+tooth_loc_cnt+"개";
            price_total +=tooth_total;
            sum+=16500;
         }else if(arr[j]=="skin"){
            cart_arr[4].style.display=null;
            skin_pri[0].innerHTML =comma(skin_total);
            skin_inner[0].innerHTML = "수량: "+skin_loc_cnt+"개";
            price_total +=skin_total;
            sum+=17500;
         }else if(arr[j]=="heart"){
            cart_arr[5].style.display=null;
            heart_pri[0].innerHTML =comma(heart_total);
            heart_inner[0].innerHTML = "수량: "+heart_loc_cnt+"개";
            price_total +=heart_total;
            sum+=19500;
         }else if(arr[j]=="standard"){
            cart_arr[6].style.display=null;
            standard_pri[0].innerHTML =comma(standard_total);
            standard_inner[0].innerHTML = "수량: "+standard_loc_cnt+"개";
            price_total +=standard_total;
            sum+=19500;
         }else if(arr[j]=="standard2"){
            cart_arr[7].style.display=null;
            standard2_pri[0].innerHTML =comma(standard2_total);
            standard2_inner[0].innerHTML = "수량: "+standard2_loc_cnt+"개";
            price_total +=standard2_total;
            sum+=19500;
         }
      }
      if(price_total>=50000){
         price_total=price_total
         cart_total[0].innerHTML = "배송비 미포함";
		 cart_total1[0].innerHTML =comma(price_total);
      }else{
         price_total= price_total+2500
         cart_total[0].innerHTML = "배송비 포함";
		 cart_total1[0].innerHTML =comma(price_total);
		}
   
}


function comma(num){
    var len, point, str; 
       
    num = num + ""; 
    point = num.length % 3 ;
    len = num.length; 
   
    str = num.substring(0, point); 
    while (point < len) { 
        if (str != "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    }
    return str+"원";
}

// var g_oWindow = null;
// var g_oInterval = null;
// var popup = function() {
//    var popupX = (document.body.offsetWidth / 2) - (200 / 2);
//    var popupY= (document.body.offsetHeight / 2) - (300 / 2);
//     g_oWindow = window.open('pay.html', '네이버팝업', 'width=400px,height=400px,scrollbars=no, status=no, toolbars=no, location=no, left='+ popupX + ',top='+ popupY);
//     // 0.5초 마다 감지
//     g_oInterval = window.setInterval(function() {
//         try {
//             // 창이 꺼졌는지 판단
//             if( g_oWindow == null || g_oWindow.closed ) {
//                 window.clearInterval(g_oInterval);
//                 g_oWindow = null;
//                 // Todo....
//                 //.....
//                 alert('창 close');
//             }
//         } catch (e) { }
//     }, 500);
// };




function openPop(){
   var popupX = (document.body.offsetWidth / 2) - (200 / 2);
   var popupY= (document.body.offsetHeight / 2) - (300 / 2);
   var popup = window.open('pay.html', '네이버팝업', 'width=460px,height=480px,scrollbars=no, status=no, toolbars=no, titlebar:no, location=no, left='+ popupX + ',top='+ popupY);

//    popup.onbeforeunload = function(){
//       console.log("closed");
//   }
}
function Mes(){
   alert("gg");
}

// function move(url){
//    q = confirm("[확인] 선택시 이동합니다");
//    if(q){
//    alert("1111");
//    location.replace(url);
//    }
// }



// var popup;

// function openPopup() {
//   popup = window.open('./sample_pop.html', "팝업창", "width = 500, height = 500, top = 50, left = 50, location = no");

 
// }