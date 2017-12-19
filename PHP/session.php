<!doctype html>
<html lang="en"> 
	<?php
		session_start();

		if( isset( $_SESSION['counter'] ) )
		{
		  $_SESSION['counter'] += 1;
		}
		else
		{
		  $_SESSION['counter'] = 1;
		}
		$msg = "Bạn đã truy cập trang này ".  $_SESSION['counter'];
		$msg .= " lần trong session này.";
	?>
	<head>
		<meta charset="utf-8">
		<title>Demo session in PHP</title>
	</head>
   
	<body>
		<?php  echo ( $msg ); ?>
	</body>
</html>