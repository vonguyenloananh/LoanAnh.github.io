<!DOCTYPE html>
<html>
	<html lang = "en-us">
	<head>
		<meta charset="utf-8">
		<title>Upload file</title>
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	</head>
	 
	<body>
		<form method="post" id="login">
			<label>Username:</label><input type="text" name="username" id="username"/>
			<br/>
			<button id="button_login" type="submit">Login</button>
			<br/>
			<h3 id="result"></h3>
		</form>
	</body>
	
	<script type="text/javascript">
		$(document).ready(function()
		{  
			//Set button submit
			var submit   = $("button[type='submit']");
			 
			//Click buuton submit
			submit.click(function()
			{
				//Get value input
				var username = $("input[name='username']").val();
				
				//Check validate input
				if(username == ''){
					alert('Please input value');
					return false;
				} 
	
				//Get value in form login
				var data = $('form#login').serialize();
				//Using function $.ajax()
				$.ajax({
				type : 'POST', 
				url  : 'result.php', 
				data : data,
				success :  function(data)
					   {                       
							$("#result").html(data);
					   }
				});
				return false;
			});
		});
		</script>
</html>