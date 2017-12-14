<?php
	require("../sessiondb.php");	
	if (isset($_POST['id_session'])) {
		//read data session by id
		$session = new sessiondb();

		//set session id
		session_id($_POST['id_session']);
		
		// Set to true if using https
		$session->start_session('_s', false);
		echo "<br /> Session value is: <br />";
		print_r(implode(",",$_SESSION));
	}	
?>
	 
