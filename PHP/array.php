<?php
	/* Set Array 1*/
	$arr1 = array("2","11", "4", "3");
	echo "Mảng 1: <br />";
	print_r ($arr1);
	echo "<br />";
	echo "<br />";
	
	/* Set Array 2*/
	$arr2 = array("4", "5", "7");
	echo "Mảng 2: <br />";
	print_r ($arr2);
	echo "<br />";
	echo "<br />";
	
	/**
	* findValue
	*Search for values ​​in the array:
	*@param: {$arr}
	*@return Found if value in the array, else return Not found 
	*/
	function findVal($arr){
		$tmp = array($arr);
		foreach ($tmp as $key => $value){
			if(!is_array ($value))
			{
				echo "Invalied paramater " . $key . "<br />";
			} 
		}
		if(is_array($arr)) {
			if (in_array("1", $arr)) {
				echo "Found";
			} else {
				echo "Not found";
			}
		}
	}
	/**
	* mergeArr
	*Merge 2 array, remove duplicate
	*@param: {$arr1, $arr2} are two array
	*@return string(*)
	*/
	function mergeArr($arr1, $arr2) {
		global $result;	// array(*)
		$tmp = array($arr1, $arr2);
		foreach ($tmp as $key => $value){
			if(!is_array ($value))
			{
				echo "Invalied paramater " . $key . "<br />";
			} 
		}
		if(is_array($arr1) && is_array($arr2)) {
				$merge = array_merge($arr1, $arr2);
				echo "Array after merge array and remove duplicate are: <br />";
				$result = array_unique($merge);
				print_r(implode(",", $result));
		}
	}
	
	/**
	* printVal
	*Find value the sum of its digits is divisible by 2
	*@param: {$arr} is a array
	*@return value
	*/
	function printVal($arr){
		$tmp = array($arr);
		foreach ($tmp as $key => $value){
			if(!is_array ($value))
			{
				echo "Invalied paramater " . $key . "<br />";
			} 
		}
		if(is_array($arr)) {
			echo "Value the sum of its digits is divisible by 2 is: <br />";
			foreach ($arr as $value){
				$sum = 0; 
				$tmp = $value;
				while($value > 0) {
					$sur =  $value % 10;
					$value = $value / 10; 
					$sum += $sur; 	
				}
				if($sum % 2 == 0)
				{
					echo $tmp . ",";
				}
				
			}
		}
	}
	
	/**
	*valEsc
	*Find value of the 1st array that it exists in (*)
	*@param: {$arr1, $arr2} are two array
	*@return value arranges ascending
	*/
	function valEsc($arr1, $arr2){
		$tmp1 = array($arr1, $arr2);
		foreach ($tmp1 as $key => $value){
			if(!is_array ($value))
			{
				echo "Invalied paramater " . $key . "<br />";
			} 
		}
		if(is_array($arr1) && is_array($arr2)) {
			$tmp2 = array_intersect($arr1, $arr2);
			echo "Value of the 1st array that it exists in (*) and arranges ascending are: <br />";
			$result = sort($tmp2);
			print_r(implode(",", $tmp2));	
		}
	}
	
	/**
	*valDes
	*Find value of the 1st array that key of it not exists in (*)
	*@param: {$arr1, $arr2} are two array
	*@return value sort descending
	*/
	function valDes($arr1, $arr2){
		$tmp1 = array($arr1, $arr2);
		foreach ($tmp1 as $key => $value){
			if(!is_array ($value))
			{
				echo "Invalied paramater " . $key . "<br />";
			} 
		}
		if(is_array($arr1) && is_array($arr2)) {
			$tmp2 = array_intersect_key($arr1,$arr2);
			echo "Value of the 1st array that key of it not exists in (*) and sort descending are: <br />";
			$result = arsort($tmp2);
			print_r(implode(",", $tmp2));
		}
	}
	//Print result
	/*Bài 1*/
	echo "***Bai tap 1*** <br />";
	findVal($arr1);
	echo "<br />";
	echo "<br />";
	
	/*Bài 2*/
	echo "***Bai tap 2*** <br />";
	mergeArr($arr1, $arr2);
	echo "<br />";
	echo "<br />";
	
	/*Bài 3*/
	echo "***Bai tap 3*** <br />";
	printVal($result);
	echo "<br />";
	echo "<br />";
	
	/*Bài 4*/
	echo "***Bai tap 4*** <br />";
	valEsc($arr1, $result);
	echo "<br />";
	echo "<br />";
	
	/*Bài 5*/
	echo "***Bai tap 5*** <br />";
	valDes($arr1, $result);
	echo "<br />";
	echo "<br />";
?>
