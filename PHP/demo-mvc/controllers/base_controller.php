<?php
	class BaseController
	{
	  protected $folder; // Variable is a folder in the views folder
	  
	  // The function return results to the user.
	  function render($file, $data = array())
	  {
		//Check file exists or not exists 
		$view_file = 'views/' . $this->folder . '/' . $file . '.php';
		if (is_file($view_file)) {
		  //If file exists, create variables containing the value passed at the call of the function
		  extract($data);
		  //Save values when run file view template in variable $content
		  ob_start();
		  require_once($view_file);
		  $content = ob_get_clean();
		  //Call variable $content from general template, return result to user
		  require_once('views/layouts/application.php');
		} else {
		  //If file not exists redirects to the error page.
		  header('Location: index.php?controller=pages&action=error');
		}
	  }
	}
?>