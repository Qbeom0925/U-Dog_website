<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $conn = mysqli_connect("localhost", "root", "123456", "abc_corp");

    $user_id = $_POST['id'];
    $user_pw = $_POST['pw'];
    
    $query = "select * from user where id='$user_id' and pw='$user_pw'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);

    if($user_id==""){
        echo "<script>alert('아이디나 비밀번호가 맞지 않습니다.'); location.href='login.html';</script>";
    }
    else if($user_id==$row['id'] && $user_pw==$row['pw']){
        $_SESSION['id']=$row['id'];
        $_SESSION['pw']=$row['pw'];
        echo "<script>alert('로그인 성공'); location.href='index.html?index=123';
        var  a = document.getElementById('login_bf');
        a.innerHTML='로그아웃';
        </script>";
    }
    else{
        echo "<script>alert('아이디나 비밀번호가 맞지 않습니다.'); location.href='login.html';</script>";
    }
    mysqli_close($conn);
?>
</body>
</html>