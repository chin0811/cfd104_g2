<?php
	$dbname = "cdf104_g2";
	$user = "root";
	$password = "0911024335";
	// $dbname = "tibamefe_cfd104g2"; 
	// $user = "tibamefe_since2021"; 
	// $password = "vwRBSb.j&K#E"; 

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";

	$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
	
	//建立pdo物件
	$pdo = new PDO($dsn, $user, $password, $options);	
?>