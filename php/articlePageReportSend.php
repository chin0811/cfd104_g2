<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
    // 收到檢舉的VALUE
	$Report = ($_POST['Report']);
    $ArticleNo = json_decode($_POST['ArticleNo']);
	$message['message'] = "傳成功了";

    // 資料庫語法
    $table ='discusArt';//資料庫的table名稱
    $thisArticleNo = "$ArticleNo";
    //傳進來的東西，是要可以直接寫進sql的行式
    $sql = "update $table set reportState ='$Report',
                              auditState = '待審核'
                              where articleNo = $thisArticleNo";
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
	echo json_encode($message,JSON_UNESCAPED_UNICODE);
    // echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>