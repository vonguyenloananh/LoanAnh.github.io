<!DOCTYPE html>
<html>
	<html lang = "en-us">
	<head>
		<meta charset="utf-8">
		<title>Upload file</title>
		<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
	</head>
	 
	<body>
		<form method="post" id="caculation">		
			<label>Array Number:</label><input type="text" name="number" id="number"/>
			<br/>
			<button id="button_login" type="submit">Caculation</button>
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
				var number = $("input[name='number']").val();
				
				//Check validate input
				if(number == ''){
					alert('Please input value format number 1, number 2,....');
					return false;
				} 
	
				//Get value in form caculation
				var data = $('form#caculation').serialize();
				//Using function $.ajax()
				$.ajax({
				type : 'POST', 
				url  : 'caculation.php', 
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


