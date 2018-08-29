<?php

session_start();

if (isset($_POST['submit'])){
    include 'db.php';

    $username = mysqli_real_escape_string($conn, $_POST['uid']);
    $pass = mysqli_real_escape_string($conn, $_POST['pass']);

    //errors
    //00 = empty: 01 = Username: 02 = Password
    //check if empty
    if (empty($username) || empty($pass)) {
        header("Location: ../index.php?login=error00");
        exit();
    }else{
        $sql = "SELECT * FROM users WHERE userUID='$username'";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);
        if($resultCheck < 1){
            header("Location: ../index.php?login=error01");
            exit();
        } else{
            if($row = mysqli_fetch_assoc($result)){
                // dehash pass
                $hashedpassCheck = password_verify($pass, $row['userPass']);
                if ($hashedpassCheck == false) {
                    header("Location: ../index.php?login=error02");
                    exit();
                }elseif($hashedpassCheck == true){
                    // log in
                    $_SESSION['uId'] = $row['userId'];
                    $_SESSION['uFirst'] = $row['userFirst'];
                    $_SESSION['uLast'] = $row['userLast'];
                    $_SESSION['uEmail'] = $row['userEmail'];
                    $_SESSION['UID'] = $row['userUID'];
                    header("Location: ../index.php?login=success");
                    exit();
                }
            }
        }
    }
}else{
     header("Location: ../login.php?login=error");
      exit();
}