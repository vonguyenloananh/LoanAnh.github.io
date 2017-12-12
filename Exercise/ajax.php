<!DOCTYPE html>
<html>
	<html lang = "en-us">
	<head>
		<meta charset="utf-8">
		<title>Upload file</title>
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	</head>
	 
	<body>
		<form method="post" id="form_login">
			<table>
				<tr>
					<td>
						<label>Username:</label>
						<input type="text" name="username" id="username"/>
					</td>
				</tr>
				<tr>
					<td>
						 <button id="button_login" type="submit">Login</button>
					</td>
				</tr>
			</table>
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
				var data = $('form#form_login').serialize();
				//Using function $.ajax()
				$.ajax({
				type : 'POST', 
				url  : '', 
				data : data,
				success :  function(data)
					   {                       
							if(data == 'true')
							{
								alert('OK');
							}
					   }
				});
				return false;
			});
		});
		</script>
</html>


