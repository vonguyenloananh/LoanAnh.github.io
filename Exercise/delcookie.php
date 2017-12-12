<?php
   setcookie( "name", "", time()- 60, "/","", 0);
   setcookie( "position", "", time()- 60, "/","", 0);
?>
<html>  
   <head>
      <title>Delete Cookie in PHP</title>
   </head>
   
	<body>
	  <?php echo "Delete Cookie in PHP" ?>
	</body>   
</html>