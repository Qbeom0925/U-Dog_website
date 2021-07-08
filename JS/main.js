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
}
function returnUrlParams() {
    var array = [], hash;
    //직접가져기
    //var url = "http://goddfs?idx=233&name=goddfs";
    //var url_Address = url.slice(url.indexOf('?') + 1).split('&');
    //URL 에서 가져오기
    var url_Address = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < url_Address.length; i++) {
        hash = url_Address[i].split('=');
        array.push(hash[1]);
        //console.log(hash);
        array[hash[0]] = hash[1];
    }
    return array;
}