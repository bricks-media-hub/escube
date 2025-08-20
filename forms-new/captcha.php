<?php
//staring session
session_start();

//Initializing PHP variable with string
$captchanumber = '1234567890';

//Getting first 6 word after shuffle
$captchanumber = substr(str_shuffle($captchanumber), 0, 4);

//Initializing session variable with above generated sub-string
$_SESSION["code"] = $captchanumber;

//Generating CAPTCHA
$image = imagecreatefromjpeg("js/bg.jpg");
$foreground = imagecolorallocate($image, 255, 255, 255); //font color

imagestring($image, 5, 45, 8, $captchanumber, $foreground);
header('Content-type: image/jpg');
imagepng($image);
?>