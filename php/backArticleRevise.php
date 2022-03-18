<?php 
	header('Content-Type: application/json; charset=utf-8');
	require_once("g2_dataConnect.php");
	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		// 抓到文章編號
		$articleNo = $_POST['articleNo'];
		// 抓到檢舉狀態
		$reportChanged = $_POST['reportChanged'];
		// 抓到審核狀態
		$auditChanged = $_POST['auditChanged'];
		// 抓到顯示狀態
		$visibleChanged = $_POST['visibleChanged'];
		// 傳成功訊息
		$message['message'] = "傳成功了";
		// 資料庫名稱
		$table ='discusArt';//資料庫的table名稱
		
		// 資料庫語法
		$sql = "update $table SET reportState='$reportChanged', auditState='$auditChanged', visibleStale='$visibleChanged' WHERE articleNo=$articleNo";

		// 傳到資料庫裏面去
		try {
			$statement = $pdo->prepare($sql);
			$result = $statement->execute();
			if ($result) {
				$msg['msg'] = '更新成功';
			}
			else {
				$msg['msg'] = '更新失敗';
			}
		}
		catch (PDOException $e){
			$msg['msg'] = $e -> getMessage();
		}


	}else{
		$message['message'] = "大失敗";
	}
	echo json_encode($sql,JSON_UNESCAPED_UNICODE);
?>