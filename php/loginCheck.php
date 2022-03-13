<?php
//記得要使用session之前，要先啟用serssion
//啟用輸出緩衝區
//啟用session
session_start();
// echo "id : ", session_id() ,"<br>";
//自session中取回登入者資料
if(isset($_SESSION["memId"]) == true){
	$result = ["memNo" => $_SESSION["memNo"] ,"memId" =>$_SESSION["memId"], "memName" => $_SESSION["memName"], "phone" => $_SESSION["phone"],"email" => $_SESSION["email"],"memNickName" => $_SESSION["memNickName"],"address" => $_SESSION["address"],"creditCard" => $_SESSION["creditCard"],"virChaNo" => $_SESSION["virChaNo"],"virBgNo" => $_SESSION["virBgNo"]];
	echo json_encode($result);
}else{ 
	// echo "{}";
}
?> 


