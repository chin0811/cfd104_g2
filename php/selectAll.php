<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
	$table = json_decode($_POST['table']);
	$message['message'] = "傳成功了";
    // 修改資料庫
    // 資料庫語法
    $sql = "select * from $table";

    // 傳到資料庫裏面去
    try {
        $get = $pdo->prepare($sql);
        $result = $get->execute();
		$prodRow = $get->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($prodRow,JSON_UNESCAPED_UNICODE);
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