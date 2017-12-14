<html>
	<head></head>
	<body>
		<table>
			<h2>Welcome to my Blog</h2>
			<?php 
				foreach ($blogs as $title => $blog)
				{
					echo '<tr><td><a href="index.php?blog='.$blog->title.'">'.$blog->title.'</a></td><td>';
				}
			?>
		</table>
	</body>
</html>