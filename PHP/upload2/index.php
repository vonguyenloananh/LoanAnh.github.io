<!DOCTYPE html>
<html lang = "en-us">
	
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta charset = "UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="js/jquery.form.js"></script>
		
		<style>
			#form_upload_ajax { 
				padding: 10px; 
				border-radius: 5px;
			}
			#progress {
				border: 1px solid; 
				width: 325px; 
				height: 20px; 
				margin-top: 10px;
				text-align: center;
				position: relative;
			}
			#progressbar { 
				background: blue; 
				height: 20px; 
				width: 0px;
			}
			#percent { 
				position: absolute; 
				left: 50%; 
				top: 0px;
			}
		</style>
	</head> 
	<body>
		
		<form id="ajax" method="post" action="upload.php" enctype="multipart/form-data">
			<input type="file" name="img[]" multiple/>
			<input type="submit" value="Upload" id="upload"/>
		</form>
	  
		<div id="progress">
		<div id="progressbar"></div>
		<div id="percent">0%</div>
		</div>
	  
		<div id="result">
		</div>
		
		
		<script>
			var progressbar = $('#progressbar');
			var percent = $('#percent');
			var result = $('#result');
			var percentValue = "0%";

			$('#ajax').ajaxForm({
			  //Before uploading value in progress is 0%
			  beforeUpload: function() {
				result.empty();
				percentValue = "0%";
				progressbar.width = percentValue;
				percent.html(percentValue);
			  },
			  
			  //while uploading value in progress increase
			  uploadProgress: function(event, position, total, percentComplete) {
				var percentValue = percentComplete + '%';
				progressbar.width(percentValue)
				percent.html(percentValue);
			  },
			  
			  //when uploading file finish value in progress is 100%
			  success: function() {
				var percentValue = '100%';
				progressbar.width(percentValue)
				percent.html(percentValue);
			  },
			  
			  //Add response text to div #result when uploading complete
			  complete: function(xhr) {      
				$('#result').html(xhr.responseText);
			  }
			});
		</script>
	</body>
</html>