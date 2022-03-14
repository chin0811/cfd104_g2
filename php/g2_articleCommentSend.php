<?php 
header('Content-Type: application/json; ch  arset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
	$MyComment = json_decode($_POST['MyComment']);
	$message['message'] = "傳成功了";
    // 修改資料庫

    // 資料庫語法
    $table ='forummes';//資料庫的table名稱
    $value =json_decode($_POST['MyComment']);//傳進來的東西，是要可以直接寫進sql的行式
    $sql = "insert into $table value ($value)";
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
    echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>