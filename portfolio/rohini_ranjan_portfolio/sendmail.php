<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "rohiniranjan059@gmail.com"; // Your Gmail address
    $subject = "Someone Trying to contact you from your portfolio";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Email successfully sent!";
    } else {
        echo "Email sending failed...";
    }
}
?>
