<?php
	include_once("model/Model.php");
	 
	class Controller {
		 public $model;	
	 
		 public function __construct()  
		 {  
			  $this->model = new Model();
		 } 
		
		 public function invoke()
		 {
			  if (!isset($_GET['blog']))
			  {
				   //If no blog is required, display the entire blog
				   $blogs = $this->model->getBlogList();
				   include 'views/bloglist.php';
			  }
			  else
			  {
				   //Show blog is required
				   $blog = $this->model->getBlog($_GET['blog']);
				   include 'views/viewblog.php';
			  }
		 }
	}
?>