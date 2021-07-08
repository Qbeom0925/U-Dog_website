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
    $user_phone = $_POST['phone'];
    
    $query = "select * from user where id='$user_id' and phone='$user_phone'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);

    if($user_id==$row['id'] && $user_phone==$row['phone']){
        $_SESSION['id']=$row['id'];
        $_SESSION['phone']=$row['phone'];
        echo "<script>alert('고객님의 비밀번호는 ".$row['pw']." 입니다.'); location.href='login.html';
        </script>";
    }
    else{
        echo "<script>alert('아이디나 전화번호가 맞지 않습니다.'); location.href='pwfind.html';</script>";
    }
    mysqli_close($conn);
?>
</body>
</html>



