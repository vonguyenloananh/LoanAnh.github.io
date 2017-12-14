<?php
	require("../sessiondb.php");

	if (isset($_POST["json"])) {
		$json = $_POST["json"];

		//convert json to array
		$arr = json_decode($json);

		//creat new sessiondb
		$session = new sessiondb();

		//set session_id
		session_id($arr[0]);
		
	    // Set to true if using https
	    $session->start_session('_s', false);
		$_SESSION["id"] = $arr[1];
		echo "Session ID is: <br />";
		echo session_id();
		echo "<br /> Session value is: <br />";
		print_r(implode(",",$_SESSION));
	}
?>