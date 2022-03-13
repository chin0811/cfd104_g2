<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement
	$data = json_decode(file_get_contents('php://input'), true);
	$sql = "select * from member where memId=:memId and memPwd=:memPsw";

	$member = $pdo->prepare($sql);
	$member -> bindValue(":memId",$data['loginMemId']);
    $member -> bindValue(":memPsw",$data['loginMemPsw']);
	$member->execute();

	if( $member->rowCount() == 0){
		echo 0;
	}else{ //success
		$memRow = $member->fetch(PDO::FETCH_ASSOC);
		//寫入server端的session
		session_start();
		$_SESSION["memNo"] = $memRow["memNo"];
		$_SESSION["memNickName"] = $memRow["memNickName"];
		$_SESSION["memId"] = $memRow["memId"];
		$_SESSION["memName"] = $memRow["memName"];
		$_SESSION["email"] = $memRow["email"];
		$_SESSION["phone"] = $memRow["phone"];
		$_SESSION["address"] = $memRow["address"];
		$_SESSION["creditCard"] = $memRow["creditCard"];
		$_SESSION["virChaNo"] = $memRow["virChaNo"];
		$_SESSION["virBgNo"] = $memRow["virBgNo"];
		echo 1;  
	}


} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
