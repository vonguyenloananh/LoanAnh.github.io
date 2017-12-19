<?php
	//Set cookie
	setcookie("name", "Vo Nguyen Loan Anh", time()+3600, "/","", 0);	//The cookie is valid for 1 hour
	setcookie("position", "Fresher", time()+3600, "/", "",  0);
?>
<html>
	<head>
	  <title>Demo Cookie in PHP</title>
	</head>

	<body>   
		<?php
		//Get cookie
		 echo $_COOKIE["name"]. "<br />"; 
		 echo $_COOKIE["position"] . "<br />";
	
		?>
   </body> 
</html>