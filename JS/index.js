function loginpage(){
    location.href="login.html";
}

function productpage(){
    location.href="product.html";
}

function shopmainpage(){
    location.href="index.html";
}

function fn_load() {
    var str = returnUrlParams();
    if(str==123){
        var a = document.getElementsByClassName("loginbtn");
        a[0].style.display = "none";
        a[1].style.display = "initial";
    }
    else{
        var a = document.getElementsByClassName("loginbtn");
        a[0].style.display = "initial";
        a[1].style.display = "none";
    }
    if(str==123){
        var b = document.getElementsByClassName("main_login");
        b[0].style.display = "none";
        b[1].style.display = "initial";
    }
    else{
        var b = document.getElementsByClassName("main_login");
        b[0].style.display = "initial";
        b[1].style.display = "none";
    }
}
function returnUrlParams() {
    var array = [], hash;
  
    var url_Address = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url_Address.length; i++) {
        hash = url_Address[i].split('=');
        array.push(hash[1]);
        //console.log(hash);
        array[hash[0]] = hash[1];
    }
    return array;
}
