<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement

	// $getJSON = file_get_contents('php://input');
    // $getAll = json_decode($getJSON,true);
    // $getData = $getAll['datas'];
	$robSupNo = $_POST['robSupNo'];
	$robSupKey = $_POST['robSupKey'];
	$robSupWord = $_POST['robSupWord'];
	$sql = "update robsup set keyWord='$robSupKey' ,ans='$robSupWord' where issueNo = $robSupNo";
	$pdo->exec($sql);
	header('Refresh:0.5;url=../backRobSup.html');

} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
