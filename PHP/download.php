<?php
	header("Content-disposition: attachment; filename=Data.csv");
	header("Content-type: application/pdf");
	readfile("Data.csv");
?>
