<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	$sql = "SELECT * FROM liveSup WHERE finishState = '未結束' AND memNo = {$_GET['memNo']}";
	$datas = $pdo->query($sql);
	$data = $datas->fetchAll(PDO::FETCH_ASSOC);
	if($data){
		// echo '成功';
		echo  json_encode($data,JSON_UNESCAPED_UNICODE);
		// echo $data;
	}else{
		// echo '失敗';
		$sqlNumber = "select quizNo from liveSup ORDER BY quizNo DESC LIMIT 1";
		$datas = $pdo->query($sqlNumber);
		$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
		$quizNoNew = $dataNumber[0]["quizNo"] + 1;
		$today = date('Y-m-d H:i:s');

		// 1 = 客服人員
		$createValue = "$quizNoNew,{$_GET['memNo']},1,'$today','未結束'";
		$createSql = "insert into liveSup values($createValue)";
		$statement = $pdo->prepare($createSql);
        $result = $statement->execute();
		$sql = "SELECT * FROM liveSup WHERE finishState = '未結束' AND memNo = {$_GET['memNo']}";
		$datas = $pdo->query($sql);
		$data = $datas->fetchAll(PDO::FETCH_ASSOC);
		echo  json_encode($data,JSON_UNESCAPED_UNICODE);
	}
	
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>