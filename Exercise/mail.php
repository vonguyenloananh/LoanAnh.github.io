<html>
   
   <head>
      <title>Gửi email trong PHP</title>
   </head>
   
   <body>
      
      <?php
         $to = "phonglecanh@gmail.com";
         $subject = "Demo send mail in PHP";
         
         $message = "<b>こんにちは</b>";
         $message .= "<h1>私の名前はローンアン.</h1>";
         
         $header = "From:loananh30101995@gmail.com \r\n";
         $header = "Cc:phonglecanh@gmail.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $send = mail ($to,$subject,$message,$header);
         
         if( $send == true )
         {
            echo "Gửi email thành công ...";
         }
         else
         {
            echo "Không thể gửi email ...";
         }
      ?>
      
   </body>
</html>
