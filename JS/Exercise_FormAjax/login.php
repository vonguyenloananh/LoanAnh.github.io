<?php
	if($_SERVER['REQUEST_METHOD'] == "POST") {
		$name = $pass = $email = $birth = "";
		$nameError = $passError = $birthError = $emailError = "";
		$error = false;
		// Set username
		if (empty($_POST['username'])) {
			$nameError = "Username length min 8 letter";
			$error = true;
		} else {
			$parttern = ("/^[A-Za-z0-9]+$/"); 
			if(!preg_match($parttern, (mb_strlen($_POST['username'], 'UTF-8') > 8))) {
				$nameError = "Username have some special character";
				$error = true;
			} 
			if(preg_match($parttern, (mb_strlen($_POST['username'], 'UTF-8') < 8))) {
				$nameError = "Username length min 8 letter";
				$error = true;
			}
			if(preg_match($parttern, (mb_strlen($_POST['username'], 'UTF-8') > 8))) {
				$name = $_POST['username'];
				$nameError = "OK";
				
			}
		}
	
		// Set password	
		if (empty($_POST['password'])) {
			$passError = "Password length min 8 letter";
			$error = true;
		} else {
			if(mb_strlen($_POST['password'], 'UTF-8')<8) {
				$passError = "Password length min 8 letter";
				$error = true;
			} 
			if(mb_strlen($_POST['password'], 'UTF-8')>8) {
					$pass = $_POST['password'];
					$passError = "OK";
			}
		}
		
		// Set email
		if (empty($_POST['email'])) {
			$emailError = "Email wrong format";
			$error = true;
		} else {
			$parttern = ("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/"); 
			if(!preg_match($parttern,$_POST['email'])) {
				$emailError = "Email wrong format";
				$error = true;
			} else { 
				$email = $_POST['email'];
				$emailError = "OK";
			}
		}
		
		// Set birthday
		if (empty($_POST['calen'])) {
			$birthError = "Birthday wrong format";
			$error = true;
		} else {
			$parttern = ("/^\d{1,2}\/\d{1,2}\/\d{4}$/"); 
			if(!preg_match($parttern,$_POST['calen'])) {
				$birthError = "Birthday wrong format";
				$error = true;
			} else {
					$birth = $_POST['calen'];
					$birthError = "OK";
			}
		}
		
		if($error) {
			echo 'Username: '.$nameError.' <br/>';
			echo 'Password: '.$passError.' <br/>';
			echo 'Email: '.$emailError.' <br/>';
			echo 'Birthday: '.$birthError.' <br/>';
			
		}
	}

	//Get username
	$user = $_POST["username"];
	//echo "username = $user";
	
	//Connect MySQL database
	mysql_connect("localhost","root",""); 
	mysql_select_db("user");
	
	$sql = "SELECT * FROM username_list WHERE username = '$user'";
	
	$result = mysql_query($sql);

	$flag = 0;
	while($row=mysql_fetch_array($result)) {
		echo "<h1 style='color:red'> True!!!!</h1>"; //username isp exist
		$flag = $flag+1;
	}
	if($flag == 0) {
		echo "<h1 style='color:red'> False!!!!</h1>"; //username is not exist
	}
			
?>