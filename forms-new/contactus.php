<?php
session_start();
if (!empty($_POST["captcha"])) {
	
	$captchaCode = $_SESSION["code"];
	$enteredcaptchaCode = $_POST['captcha'];
	

if($enteredcaptchaCode == $captchaCode){ 
			
       	
$NAME=$_POST['NAME'];
$EMAIL=$_POST['EMAIL'];
$MOBILE=$_POST['MOBILE'];
$SUBJECT=$_POST['SUBJECT'];
$Message=$_POST['Message'];
$captcha=$_POST['captcha'];


$to      = 'info@escubeindia.net';
$subject = 'Enquiry from Escube Airconditioning Pvt Ltd';
$message = 
"<table style='border:1px solid #e5e5e5' align='center' width='500' cellspacing='0' cellpadding='5' border='0'>
  <tbody>
   <tr>
    <td align='center' valign='middle' bgcolor='#efefef'>
     <table align='center' width='470' cellspacing='0' cellpadding='3' border='0'>
      <tbody>
      
       <tr>
        <td align='center' valign='middle'><h1>Escube Airconditioning Pvt Ltd</h1></td>
       </tr>
       
       <tr>
        <td>
          <table width='470' cellspacing='0' cellpadding='5' border='1'>
          <tbody>
          
         
           
          
           
          <tr>
            <td bgcolor='#ffffff'>
            <table style='color:#949494' align='center' width='430' cellspacing='0' cellpadding='0' border='0'>
             <tbody>
             <tr>
             <td style='color:#464646;font-weight:bold;font-size:13px;' colspan='3' height='35'>The enquiry details are below:</td>
             </tr>
             
              <tr style='color:#666; font-size:12px;'>
             <td width='175' height='35' ><strong>Name</strong></td>
             <td width='35' height='35'>:</td>
             <td width='365' height='35'>".$NAME."</td>
             </tr>

             <tr style='color:#666; font-size:12px;'>
               <td height='35'><strong>Email</strong></td>
               <td height='35'>:</td>
               <td height='35'>".$EMAIL."</a> </td>
             </tr>
			 
			 <tr style='color:#666; font-size:12px;'>
            <td height='35'><strong>Phone</strong></td>
            <td height='35'>:</td>
            <td height='35'>".$MOBILE."</td>
            </tr>

			<tr style='color:#666; font-size:12px;'>
             <td width='175' height='35' ><strong>Subject</strong></td>
             <td width='35' height='35'>:</td>
             <td width='365' height='35'>".$SUBJECT."</td>
             </tr>

			<tr style='color:#666; font-size:12px;'>
             <td width='175' height='35' ><strong>Message</strong></td>
             <td width='35' height='35'>:</td>
             <td width='365' height='35'>".$Message."</td>
             </tr>	
               
          
</tbody>
</table>
</td>
</tr>
          <tr>
            <td style='color:#464646;font-size:15px;line-height:18px;font-family:'Century Gothic'' align='center' bgcolor='#f7f7f7'>We hope that this Enquiry will help your <strong style='color:#177dbd'>Business Grow</strong></td></tr>
            <tr><td style='color:#464646;font-size:18px;line-height:28px;font-family:'Century Gothic' align='center' height='70' bgcolor='#f7f7f7'>
            <strong style='color:#177dbd'> Always Taking Sustained Efforts Towards Your Business Development</strong></td></tr> </tbody></table></td>
          </tr>
          
        </tbody>
        </table>
        </td>
      </tr>
      
    </tbody></table>";
$headers = '';	
$headers .= 'MIME-Version: 1.0' . "\r\n";  			
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 			
$headers .= "From: noreply@escubeindia.net \r\n";
$headers .= "CC:  \r\n";
$headers .= "Bcc: checkmail6622@gmail.com";
mail($to, $subject, $message, $headers);
// echo '<script type="text/javascript">  window.alert("Thank You For Contacting Us. Please pay the consultation fee amount selected and email to us the transaction  referensce to get the confirmation of your appointment.");</script>';
echo '<script type="text/javascript">window.location = "forms-new/ThankYou.html"</script>';
}
 
	else{
	 echo '<script type="text/javascript">window.alert("Captcha code not matched, please try again.");history.back();</script>';	
}
}
else
{
 echo '<script type="text/javascript">  window.alert("Please Fill a Form."); history.back();</script>';
 exit;}
?>

