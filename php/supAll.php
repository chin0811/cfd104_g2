<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement
	// $getJSON = file_get_contents('php://input');
    // $getAll = json_decode($getJSON,true);
    // $getData = $getAll['selectMethod'];
	// echo json_encode($data,JSON_UNESCAPED_UNICODE);
	// empty()
	// isset()
	// echo $_GET['maxNumber'];
	if(empty($_GET['maxNumber'])){
		$sql = "SELECT * FROM liveSupRec WHERE quizNo = '{$_GET['index']}'";
	}else{
		$sql = "SELECT * FROM liveSupRec WHERE quizNo = '{$_GET['index']}' AND chatNo > {$_GET['maxNumber']} ";
		
	}
	
	// $sql = "SELECT * FROM liveSupRec WHERE quizNo = 1";
	$datas = $pdo->query($sql);
	$data = $datas->fetchAll(PDO::FETCH_ASSOC);
	echo  json_encode($data,JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>