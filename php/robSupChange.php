<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement
	$data = json_decode(file_get_contents('php://input'), true);
	// $getAll = json_decode($data,true);
	echo $data['robSupKey'];
	// $robSupKey = $data['robSupKey'];
	// $robSupWord = $data['robSupWord'];
	// $robSupNo = $data['robSupNo'];
	// $sql = "select * from member where memId=:memId and memPwd=:memPsw";
	// $sql = "update robsup set keyWord='$robSupKey' ,ans='$robSupWords' where issueNo = $robSupNo";
	// echo $sql;
	// $dataChange = $pdo->exec($sql);



} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
