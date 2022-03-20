<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement
	$data = json_decode(file_get_contents('php://input'), true);
	$sql = "select * from administrator where adminId = :memId and adminPwd = :memPsw";
	$member = $pdo->prepare($sql);
	$member -> bindValue(":memId",$data['loginMemId']);
    $member -> bindValue(":memPsw",$data['loginMemPsw']);
	$member->execute();
	if( $member->rowCount() == 0){
		echo 0;
	}else{ //success
		$memRow = $member->fetch(PDO::FETCH_ASSOC);
		session_start();
		$_SESSION["adminNo"] = $memRow["adminNo"];
		$_SESSION["adminClass"] = $memRow["adminClass"];
		$_SESSION["adminId"] = $memRow["adminId"];
		$_SESSION["adminName"] = $memRow["adminName"];
		// echo json_encode($memRow ,JSON_UNESCAPED_UNICODE);
		echo 1;  
	}


} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
