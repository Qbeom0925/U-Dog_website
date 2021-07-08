var arr = new Array();
var total1 = document.getElementsByClassName("total");
var total2 = document.getElementsByClassName("total1");
var footer = document.getElementsByClassName("foot");

// localStorage["cart0"] = "eye"
// localStorage["cart1"] = "jang";
// localStorage["cart2"] = "born";
// localStorage["cart3"] = "tooth";
// localStorage["cart4"] = "skin";
// localStorage["cart5"] = "heart";
// localStorage["cart6"] = "standard";
// localStorage["cart7"] = "standard2";
// var cnt = localStorage.getItem["cart_eye_cnt"];

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


// function check_cnt(){
//    eye_loc_cnt= Number(localStorage["cart_eye_cnt"]);
// }
function su_eye_cart(){
   if(eye_loc_cnt>1){
   eye_loc_cnt--;
   localStorage["cart_eye_cnt"] = eye_loc_cnt;
   }else{
      alert("최소 1개 이상은 존재해야합니다.");
   }
   pricae_check();
   window.location.reload();
}
function add_eye_cart(){
   eye_loc_cnt += 1;
   localStorage["cart_eye_cnt"] = eye_loc_cnt;
   window.location.reload();
}
function su_jang_cart(){
   if(jang_loc_cnt>1){
      jang_loc_cnt--;
      localStorage["cart_jang_cnt"] = jang_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_jang_cart(){
   jang_loc_cnt += 1;
   localStorage["cart_jang_cnt"] = jang_loc_cnt;
   window.location.reload();
}
function su_born_cart(){
   if(born_loc_cnt>1){
      born_loc_cnt--;
      localStorage["cart_born_cnt"] = born_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_born_cart(){
   born_loc_cnt += 1;
   localStorage["cart_born_cnt"] = born_loc_cnt;
   window.location.reload();
}
function su_tooth_cart(){
   if(tooth_loc_cnt>1){
      tooth_loc_cnt--;
      localStorage["cart_tooth_cnt"] = tooth_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_tooth_cart(){
   tooth_loc_cnt += 1;
   localStorage["cart_tooth_cnt"] = tooth_loc_cnt;
   window.location.reload();
}
function su_skin_cart(){
   if(skin_loc_cnt>1){
      skin_loc_cnt--;
      localStorage["cart_skin_cnt"] = skin_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_skin_cart(){
   skin_loc_cnt += 1;
   localStorage["cart_skin_cnt"] = skin_loc_cnt;
   window.location.reload();
}
function su_heart_cart(){
   if(heart_loc_cnt>1){
      heart_loc_cnt--;
      localStorage["cart_heart_cnt"] = heart_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_heart_cart(){
   heart_loc_cnt += 1;
   localStorage["cart_heart_cnt"] = heart_loc_cnt;
   window.location.reload();
}
function su_standard_cart(){
   if(standard_loc_cnt>1){
      standard_loc_cnt--;
      localStorage["cart_standard_cnt"] = standard_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_standard_cart(){
   standard_loc_cnt += 1;
   localStorage["cart_standard_cnt"] = standard_loc_cnt;
   window.location.reload();
}
function su_standard2_cart(){
   if(standard2_loc_cnt>1){
      standard2_loc_cnt--;
      localStorage["cart_standard2_cnt"] = standard2_loc_cnt;
      }else{
         alert("최소 1개 이상은 존재해야합니다.");
      }
      pricae_check();
      window.location.reload();

}
function add_standard2_cart(){
   standard2_loc_cnt += 1;
   localStorage["cart_standard2_cnt"] = standard2_loc_cnt;
   window.location.reload();
}



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
      total1[0].style.display ="none";
      footer[0].style.display = "none";
      total2[0].style.display = "none";
    }

var index = document.getElementsByClassName("middle");
var product_total = document.getElementById
var cart_dis = new Array();
function check_value(){
   for(var i=0; i<=arr.length; i++){
      if(arr[i]!=null){
         // cart_dis[i]= document.getElementById("cart_in");
         index[0].style.display = "none";
         index[1].style.display = null;
         total1[0].style.display = null;
         footer[0].style.display = null;
         total2[0].style.display = null;
         eye_inner[0].innerHTML = eye_loc_cnt;
         jang_inner[0].innerHTML = jang_loc_cnt;
         born_inner[0].innerHTML = born_loc_cnt;
         tooth_inner[0].innerHTML = tooth_loc_cnt;
         skin_inner[0].innerHTML = skin_loc_cnt;
         heart_inner[0].innerHTML = heart_loc_cnt;
         standard_inner[0].innerHTML = standard_loc_cnt;
         standard2_inner[0].innerHTML = standard2_loc_cnt;
      }
   }
}


var cart_arr = document.getElementsByClassName("cart_pro");

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
            price_total +=eye_total;
            sum+=12500;
         }else if(arr[j]=="jang"){
            cart_arr[1].style.display=null;
            jang_pri[0].innerHTML =comma(jang_total);
            price_total +=jang_total;
            sum+=14500;
         }else if(arr[j]=="born"){
            cart_arr[2].style.display=null;
            born_pri[0].innerHTML =comma(born_total);
            price_total +=born_total;
            sum+=16500;
         }else if(arr[j]=="tooth"){
            cart_arr[3].style.display=null;
            tooth_pri[0].innerHTML =comma(tooth_total);
            price_total +=tooth_total;
            sum+=16500;
         }else if(arr[j]=="skin"){
            cart_arr[4].style.display=null;
            skin_pri[0].innerHTML =comma(skin_total);
            price_total +=skin_total;
            sum+=17500;
         }else if(arr[j]=="heart"){
            cart_arr[5].style.display=null;
            heart_pri[0].innerHTML =comma(heart_total);
            price_total +=heart_total;
            sum+=19500;
         }else if(arr[j]=="standard"){
            cart_arr[6].style.display=null;
            standard_pri[0].innerHTML =comma(standard_total);
            price_total +=standard_total;
            sum+=19500;
         }else if(arr[j]=="standard2"){
            cart_arr[7].style.display=null;
            standard2_pri[0].innerHTML =comma(standard2_total);
            price_total +=standard2_total;
            sum+=19500;
         }
      }
   //  = Number(eye_total+jang_total+born_total+tooth_total+skin_total+heart_total+standard_total+standard2_total);
   // window.location.reload();
   pricae_check();

}

function pricae_check(){
   var freeprice = document.getElementById("free");
   var price_total_comm
   price_total_comm=comma(price_total);
   total1[0].innerHTML = price_total_comm;
   price_total +=2500;
   // total1[0].innerHTML += sum+"원";
   if(price_total-2500>=50000){
      price_total-=2500;
      total1[1].innerHTML += comma(price_total);
      freeprice.style.textDecoration = "line-through";
   }else{
      total1[1].innerHTML += comma(price_total);
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

// var cart_dis = new Array();
// for(var j=0; j<=arr.length; j++){
//    cart_dis[j]= document.getElementsByClassName("cart_in");
// }







function delete_cart(){
   localStorage.clear();
}
function delete_eye() {
   localStorage.removeItem("cart0"); 
   localStorage.removeItem("cart_eye_cnt");
}
function delete_jang(){
   localStorage.removeItem("cart1"); 
   localStorage.removeItem("cart_jang_cnt");
}
function delete_born(){
   localStorage.removeItem("cart2"); 
   localStorage.removeItem("cart_bron_cnt");
}
function delete_tooth(){
   localStorage.removeItem("cart3");
   localStorage.removeItem("cart_tooth_cnt");
}
function delete_skin(){
   localStorage.removeItem("cart4"); 
   localStorage.removeItem("cart_skin_cnt");
}
function delete_heart(){
   localStorage.removeItem("cart5"); 
   localStorage.removeItem("cart_heart_cnt");
}
function delete_standard(){
   localStorage.removeItem("cart6"); 
   localStorage.removeItem("cart_standard_cnt");
}
function delete_standard2(){
   localStorage.removeItem("cart7"); 
   localStorage.removeItem("cart_standard2_cnt");
}

function buy_clik(){
    location.href="buy.html";
}