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
    $user_name = $_POST['name'];
    $user_phone = $_POST['phone'];

    $sql = "INSERT INTO user (id, pw, name, phone) VALUES ('$user_id', '$user_pw', '$user_name', '$user_phone')";
    $result = mysqli_query($conn, $sql);

    if($result === false){
        echo "저장하지 못했습니다";
        error_log(mysqli_error($conn));
    }
    else{
        echo "<script>alert('{$user_name} 님 회원가입 되었습니다.'); location.href='login.html';</script>";
    }
    mysqli_close($conn);
    print "<hr/><a href='index.html'>메인화면으로 이동</a>";
    ?>
</body>
</html>

