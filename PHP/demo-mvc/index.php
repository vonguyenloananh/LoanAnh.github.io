<?php
	include_once('connection.php');
	session_start();
	include_once('/libraries/core/sessiondb.class.php');
	
	if (isset($_GET['controller'])) {
		$controller = $_GET['controller'];
		if (isset($_GET['action'])) {
		$action = $_GET['action'];
		} else {
		$action = 'index';
		}
	} else {
		$controller = 'pages';
		$action = 'home';
	}
	require_once('routes.php');
	
	//Demo transaction
	$databaseConnect = new DB();
	$pdo = $databaseConnect->getInstance();
	$sql1 = "INSERT INTO demo Values('NULL', 'Tilte', 'Content')";
	$sql2 = "UPDATE demo SET content='content new' WHERE content='Content'";
	$pdo->beginTransaction();
	$result1 = $pdo->exec($sql1);
	$result2 = $pdo->exec($sql2);
	if(!$result1 || !$result2) {
		$pdo->rollback();
		echo "<br/> Error";
	} else {
		$pdo->commit();
		echo "<br/> Update successful";
	}
		

?>