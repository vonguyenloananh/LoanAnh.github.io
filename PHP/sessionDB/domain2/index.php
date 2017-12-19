<!DOCTYPE html>
<html lang = "en-us">
	<head>
		<meta charset="utf-8">
		<title>Upload file</title>
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	</head>
	 
	<body>
		<label>ID session:</label><input type="text" name="id" id="id_session"/>
		<br/>
		<button onclick="readSession()">Read session</button>
		<h3 id="result"></h3>
		
		<script>
			function readSession(){
				var id_session = $("#id_session").val();
				
				$.ajax({
					type: "post",
					url: "read.php",
					data: {id_session: id_session},
					success: function(res) {
						$("#result").html(res);
					}
				});
			}
		</script>	
	</body>
</html>	
