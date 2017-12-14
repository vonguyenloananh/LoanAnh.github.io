<?php
	if (isset($_POST["number"])) {
		$arr_num = $_POST["number"];
		
		$arr = explode(",", $arr_num);	
		$n = count($arr);
		$sum = 0;
		$mul = 1;
		for($i = 0; $i < $n; $i++){
			$sum += $arr[$i];
			$mul *= $arr[$i];
		}
		$result = array($sum, $mul);
		print_r ($result);
	}
?>