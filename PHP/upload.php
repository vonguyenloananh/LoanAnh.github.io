<!DOCTYPE html>
<html>
	<html lang = "en-us">
	<head>
	<meta charset="utf-8">	
	</head>
	 
	<body>
		<h2>Upload file</h2>
		<form method="post" enctype="multipart/form-data">
			<input type="file" name="file_upload" />
			<input type="submit" value="Upload" />
		</form>
	</body>
	
	<?php
		if(isset($_FILES['file_upload'])){
			$file_name = $_FILES['file_upload']['name'];
			move_uploaded_file($_FILES['file_upload']['tmp_name'] , 'C:\xampp\htdocs\DemoTest\\'.$_FILES['file_upload']['name']);
		
		}
	?>
</html>