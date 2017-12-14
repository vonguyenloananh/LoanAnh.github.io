<!DOCTYPE html>
<html lang = "en-us">
	<?php
		$cookie = $_COOKIE;
	?>
	<head>
		<meta charset="utf-8">
		<title>Upload file</title>
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	</head>
	 
	<body>	
		<label>ID session:</label><input type="text" name="id_session" id="id_session"/>
		<br/>
		<label>Value session:</label><input type="text" name="val_session"  id="val_session"/>
		<br/>
		<button onclick="createSession()">Create session</button>
		<h3 id="result"></h3>
		
		<script>			
			function createSession() {
				var id_session = $("#id_session").val();
				var val_session = $("#val_session").val();
				var array = [id_session, val_session];
				var json = JSON.stringify(array);
				$.ajax({
					type: "post",
					url: "create.php",
					data: {
						json: json
					},
					success: function(res) {
						$("#result").html(res);
					}
				});								
			}
		</script>
	</body>
</html>




