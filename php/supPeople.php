<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	if (empty($_GET['selectkey'])){
		$sql = "select * from livesup";
	}else{
		// $sql = "select * from robSup where keyWord = '{$_GET['selectkey']}'";
	}
	$datas = $pdo->query($sql);
	$data = $datas->fetchAll(PDO::FETCH_ASSOC);
	echo  json_encode($data,JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>