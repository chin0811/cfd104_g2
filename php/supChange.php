<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	
	$quizNo = $_GET['quizNo'];
	$sql = "update liveSup SET finishState='結束' WHERE quizNo=$quizNo";
	$statement = $pdo->prepare($sql);
	$result = $statement->execute();
	
	// $sql = "SELECT * FROM liveSupRec WHERE quizNo = 1";
	

} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>