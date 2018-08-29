<?php

if(isset($_POST['submit'])){
    include_once 'db.php';

    $first = mysqli_real_escape_string($conn, $_POST['first']);
    $last = mysqli_real_escape_string($conn, $_POST['last']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['pass']);

    //Error HAndlers
    //Check for empty fields
    if (empty($first) || empty($last) || empty($email) || empty($username) || empty($pass) ) {
        header("Location: ../signup.php?signup=empty");
        exit();
    } else{
        //check if input chars are valid 
        if (!preg_match("/^[a-zA-Z]*$/", $first) ||!preg_match("/^[a-zA-Z]*$/", $last) ) {
            header("Location: ../signup.php?signup=invalidChar");
            exit();
        }else{
            //Check if email is valid
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                header("Location: ../signup.php?signup=invalidEmail");
                exit();
            }else{
                $sql = "SELECT * FROM users WHERE userUID = '$username'";
                $result = mysqli_query($conn, $sql);
                $resultCheck = mysqli_num_rows($result);

                if ($resultCheck > 0) {
                    header("Location: ../signup.php?signup=invalidUsername");
                    exit();
                }else{
                    //hash password
                    $hashedpass = password_hash($pass, PASSWORD_DEFAULT);
                    //insert user to db
                    $sql = "INSERT INTO users (userFirst, userLast, userEmail, userUID, userPass) VALUES ('$first','$last','$email','$username','$hashedpass');";
                    mysqli_query($conn, $sql);
                    header("Location: ../signup.php?signup=success");
                    exit();
                }
            }
        }
    }

}else{
    header("Location: ../signup.php");
    exit();
}