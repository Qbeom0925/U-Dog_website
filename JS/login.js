function numbermaxlength(e, num){
    if(e.value.length > e.maxlength){
        e.value = e.value.slice(0, e.maxlength);
    }
}
function login(){
    var userid = document.getElementById("loginid");
    var userpw = document.getElementById("loginpw");

    var id = userid.value;
    var pw = userpw.value;

    if(id.length<3 || pw.length<4){
        alert("아이디 3자리 이상, 비밀번호는 4자리 이상 입력해주세요. ");
        userid.value="";
        userid.focus();
    }
}