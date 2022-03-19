<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
	$inputPrice = $_POST['inputPrice'];
    $pKey = $_POST['pKey']; 
    $auctionNo = $_POST['auctionNo'];
    $memId = $_POST['memId'];
	$message['message'] = "傳成功了";
    // 修改資料庫
    // 資料庫語法
    $table ='bidHis';//資料庫的table名稱
    
    $sql = "insert into $table values($pKey,$auctionNo,$memId,$inputPrice,'2020-01-01')";

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
	// echo json_encode($message,JSON_UNESCAPED_UNICODE);
    echo json_encode($sql,JSON_UNESCAPED_UNICODE);
?>