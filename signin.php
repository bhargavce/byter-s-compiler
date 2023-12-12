<?php
// if ($_POST['signin']) {
    $conn = mysqli_connect("localhost", "root", "", "compiler");
    $eid = $_POST['email-id'];
    $uname = $_POST['user_name'];
    $pass = $_POST['your_pass'];

    $sql = "SELECT * FROM `registration` WHERE `email` = '$eid';";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num == 1) {
        while ($row = mysqli_fetch_assoc($result)) {
            if ($pass == $row['password'] and $uname == $row['username']) {
                $login = true;
                session_start();
                $_SESSION['loggedin'] = true;
                $_SESSION['username'] = $uname;
                header("location:./index2.html");
            } else {
                $showError = "password or username does not match. please try again...!!";
            
            }
        }
    } else {
        $showError = "Login failed. please try again...!!";
    }
// }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="pop.css">
</head>

<body>
    <?php
    if ($showError) {
        echo "
        <html>
            <body>
            <script>
                alert('$showError');
                location.href = 'log.html'
                localStorage.setItem('session', 2);
             </script>
            <body>
        <html> ";
    }
    ?>
    <script>
        localStorage.setItem('session', 1);
    </script>
</body>
</html>