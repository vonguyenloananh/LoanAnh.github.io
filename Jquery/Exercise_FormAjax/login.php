<?php	
	if($_SERVER['REQUEST_METHOD'] == "POST") {
		$username = $_POST["username"];
		$password = $_POST["password"];
		$email = $_POST["email"];
		$birthday = $_POST["birthday"];
		// Check input username
		function checkUsername($username) {
			if (empty($username)) {
				return false;
			} else {
				$parttern = ("/^[A-Za-z0-9]+$/"); 
				if ((strlen($username) > 8)){
					if(!preg_match($parttern, $username)) {
						return false;
					}
				}
				if(preg_match($parttern, strlen($username) < 8)) {
					return false;
				}
				if(preg_match($parttern, strlen($username) > 8)) {
					return true;
					
				}
			}
		}
	
		// Check input password	
		function checkPassword($password) {
			if (empty($password)) {
				return false;
			} else {
				if(strlen($password) < 8) {
					return false;
				} 
				if(strlen($password) > 8) {
						return true;
				}
			}
		}
		
		// Check input email
		function checkEmail($email) {
			if (empty($email)) {
				return false;
			} else {
				$parttern = ("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/"); 
				if(!preg_match($parttern, $email)) {
					return false;
				} else { 
					return true;
				}
			}
		}
		
		// Set birthday
		function checkBirthday($birthday) {
			$curDate = strtotime(date("Y-m-d"));
			$birthday = strtotime($birthday);
			if ($birthday > $curDate) {
				return false;
			} else {
				return true;
			}
		}
	}

	//Get username
	$user = $_POST["username"];
	
	//Connect MySQL database
	$conn = mysqli_connect("localhost","id3285777_loananh","luzyou0807"); 
	if (!$conn) {
		die("Connection failed: ". mysqli_error());
	}
	$db_select = mysqli_select_db($conn,"id3285777_user");
	if (!$db_select) {
		die("Connection failed: ". mysqli_error());
	}
	mysqli_query($conn, "SET NAMES 'utf8'");
	$sql = "SELECT * FROM username_list WHERE username = '$user'";
	$result = mysqli_query($conn,$sql);
	$cn = NULL;
	function num_rows($sql = null) 
	{
        if ($this->cn)
        {
            $query = mysqli_query($this->cn, $sql);
            if ($query)
            {
                $row = mysqli_num_rows($query);
                return $row;
            }   
        }       
    }
	// Username is existing in Database
	$count = $result->num_rows;
	if($result !== false) {
		if ($count > 0) {
			while ($row = $result->fetch_assoc()) {
				 echo "Username ".$row["username"]. " is existing.";
			}
		} else {
			echo "Username ".$user. " doesn't exist.";
		}
	} else {
	    echo 'Database Error';
	}
	mysqli_close($conn);
?>