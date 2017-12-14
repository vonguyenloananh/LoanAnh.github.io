<?php
	$file  = $_FILES['img'];
	$count = count($file['name']);//Get total number of uploaded files
	for($i=0; $i<=$count-1; $i++) {
		move_uploaded_file($_FILES['img']['tmp_name'][$i],"upload/".$_FILES['img']['name'][$i]); //download file to upload folder
		$url  = "upload/".$_FILES['img']['name'][$i];
		echo "<img src='".$url."' width='400px' height='400px' /><hr/><br/>";	//upload file from upload folder
	}
?>