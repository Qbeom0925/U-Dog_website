var arr = new Array();
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

// localStorage["cart0"] = "eye"
// localStorage["cart1"] = "jang";
// localStorage["cart2"] = "born";
// localStorage["cart3"] = "tooth";
// localStorage["cart4"] = "skin";
// localStorage["cart5"] = "heart";
// localStorage["cart6"] = "standard";
// localStorage["cart7"] = "standard2";
var btn = document.getElementsByClassName("btn-wrap");
function Change_display(){
    for(var j=0; j<=arr.length; j++){
        if(arr[j]=="eye"){
            btn[0].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="jang"){
            btn[1].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="born"){
            btn[2].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="tooth"){
            btn[3].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="skin"){
            btn[4].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="heart"){
            btn[5].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="standard"){
            btn[6].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }else if(arr[j]=="standard2"){
            btn[7].innerHTML="<button id='button' type='button' class='btn btn-secondary' onclick=in_cart()>장바구니 담기 완료</button>";
        }
    }
}

function in_cart(){
    alert("이미 장바구니에 담겨 있습니다.");
}