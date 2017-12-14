<?php
	$str1 = "ABCDE";
	$str2 = "CD";
	$str3 = "trim";
	/**
	*printStr
	*Print string in two ways: single quote and double quotes
	*@return string Money $__$ money 
	*/
	function printStr(){
		$val = '$__$';
		//single quote
		echo 'Money $__$ money' . "<br />";
		
		//double quote
		echo "Money $val money";
	}
	
	/**
	* findStr
	*@param: {$str1, $str2} are two string
	*Search for a substring in a parent string
	*@returns true if the second string is contained within the first string, else return false
	*/
	function findStr($str1, $str2){
		if (!is_string($str1) || !is_string($str2) ) {
			echo "Invalid parameter";
		} else {
			if (strpos($str1, $str2)) {
				echo "true";
			} else {
				echo "false";
			}
		}
	}
	
	/**
	* delStr
	*@param: {$str} is a string
	*Delete last character is "m"in string "trim"
	*@returns string "tri"
	*/
	function delStr($str){
		if (!is_string($str)) {
			echo "Invalid parameter";
		} else {
			echo(rtrim($str, "m"));
		}
	}
	
	/**
	* reverseStr
	*@param: {$str} is a string
	*Reverse string "trim" and delete chacrater using function ltrim
	*@returns string "irt"
	*/
	function reverseStr($str){
		if (!is_string($str)) {
			echo "Invalid parameter";
		} else {
			$str1 = strrev($str);
			echo(ltrim($str1, "m"));
		}
	}
	
	//Print result
	/*Bài 1*/
	echo "***Bai tap 1*** <br />";
	printStr();
	echo "<br />";
	echo "<br />";
	
	/*Bài 2*/
	echo "***Bai tap 2*** <br />";
	findStr($str1, $str2);
	echo "<br />";
	echo "<br />";
	
	/*Bài 3*/
	echo "***Bai tap 3*** <br />";
	delStr($str3);
	echo "<br />";
	echo "<br />";
	
	/*Bài 4*/
	echo "***Bai tap 3*** <br />";
	reverseStr($str3);
	echo "<br />";
	echo "<br />";
?>