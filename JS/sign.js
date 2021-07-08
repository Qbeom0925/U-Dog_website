// 핸드폰번호 제약
    // function numberadmin(){
    //     var phonenum = document.getElementById("tel");
    //     if(phonenum.length != 11){
    //         alert("번호 입력 규정에맞게 입력해주세요.");
    //     }
    // }
    function check_all()
    {
        if(document.getElementById("checkall").checked==true){
        for(var i=0; i<4; i++){
            document.getElementsByName("checkbox")[i].checked = true;
        }
    }
    else
    {
        for(var i=0; i<4; i++){
            document.getElementsByName("checkbox")[i].checked = false;
            }  
    }
    }

    // 
    function numberadmin(){

        var nametext = document.getElementById("name");
        var telltext = document.getElementById("tell");
        var admintext = document.getElementById("admin");

        var name = nametext.value;
        var tell = telltext.value;
        var admin = admintext.value;

        if(name.length<2){
            alert("이름 형식을 지켜주세요.");
            nametext.value="";
            nametext.focus();
            return false;
        }
        else if(tell.length<10){
            alert("전화번호를 확인해주세요.");
            telltext.value="";
            telltext.focus();
            return false;
        }
        else{
            alert("인증메세지는 1111 입니다.");
            admintext.disabled = false;
            admintext.focus();
            return false;
        }
    }


    function a(){
        var admintext = document.getElementsByClassName("disabled");
        var admin = admintext[0].value;

        if(admin==="1111"){
            alert("인증되었습니다. 밑에 정보를 마저 입력해주세요.");
            admintext[0].disabled = true;
            return false;
        }
        else{
            alert("인증번호가 잘못되었습니다.");
            return false;
        }
    }


    // 
    function check(){

        // var nametext = document.getElementById("name");
        var idtext = document.getElementById("loginid");
        var pwtext = document.getElementById("loginpw");
        var cpwtext = document.getElementById("confirmpw");

        // var name = nametext.value;
        var id = idtext.value;
        var pw = pwtext.value;
        var cpw = cpwtext.value;

        

        if(id.length<4){
            alert("아이디를 4자리 이상 입력해주세요.");
            idtext.value="";
            idtext.focus();
            return false;
        }
        if(pw.length<4){
            alert("비밀번호는 4자리이상 13자리이하로 입력해주세요.");
            pwtext.value="";
            pwtext.focus();
            return false;
        }

        if(pw!=cpw){
            alert("비밀번호란 두개를 동일하게 입력해주세요.");
            pwtext.value="";
            pwtext.focus();
            return false;
        }

        for(var i=0; i<3; i++){
            if(document.getElementsByName("checkbox")[i].checked == false){
                alert("동의사항을 확인해주세요.");
                document.getElementsByName("checkbox")[i].focus();
                return false;
            }
        }
    }
