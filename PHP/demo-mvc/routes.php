<?php
	$controllers = array(
	  'pages' => ['home', 'error', 'index']
	); //Controllers in the system and actions can be invoked from that controller.

	//If the parameters received from the URL are not valid (not in the list controller) then the error page will be invoked.
	if (!array_key_exists($controller, $controllers) || !in_array($action, $controllers[$controller])) {
	  $controller = 'pages';
	  $action = 'error';
	}

	//The file defines the controller to be able to use the class defined in that file
	include_once('controllers/' . $controller . '_controller.php');
	//Create the controller class name from the values retrieved from the URL and returns to the user.
	$klass = str_replace('_', '', ucwords($controller, '_')) . 'Controller';
	$controller = new $klass;
	$controller->$action();
?>