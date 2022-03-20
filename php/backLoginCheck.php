<?php
//記得要使用session之前，要先啟用serssion
//啟用輸出緩衝區
//啟用session
session_start();
// echo "id : ", session_id() ,"<br>";
//自session中取回登入者資料
if(isset($_SESSION["adminId"]) == true){
	$result = ["adminNo" => $_SESSION["adminNo"] ,"adminClass" =>$_SESSION["adminClass"], "adminId" => $_SESSION["adminId"], "adminName" => $_SESSION["adminName"]
	];
	echo json_encode($result);
}else{ 
	// echo "{}";
}
?> 


