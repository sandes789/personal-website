<?php

$fullname = $_REQUEST['name']; 
$email = $_REQUEST['email'];
$msg = $_REQUEST['message'];  


$to = 'sansshrestha@gmail.com';
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.'"'.$fullname.'" '.'<'. $email . '>'."\r\n";
//echo $headers;
//$headers .= "Cc: " . $cc . "\r\n";
//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";
$message = '';
$message .= '<strong>Name: </strong>' . $fullname . "<br>";
$message .= '<strong>Email: </strong>' . $email . "<br>";
$message .= '<strong>Message: </strong>' . $msg . "<br>";
if (mail($to, $subject, $message, $headers) )
{	
	echo '1';
}
else
{
	echo '0';
}
?>