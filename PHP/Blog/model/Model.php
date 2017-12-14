<?php
	include_once("model/Blog.php");
	 
	class Model {
		
		//Get all blog
		public function getBlogList()
		{
			return array(
				"Blog 1" => new Blog("Blog 1", "Welcome to blog 1"),
				"Blog 2" => new Blog("Blog 2", "Welcome to blog 2"),
				"Blog 3" => new Blog("Blog 3", "Welcome to blog 3"),
			);
		}
		
		//Get a specific blog when click tilte blog
		public function getBlog($title)
		{
			$allBlogs = $this->getBlogList();
			return $allBlogs[$title];
		}
		
		
	}
?>