<?php 
header('Content-Type: application/json; ch  arset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
	$articleContent = json_decode($_POST['ArticleContent']);
    $MemNo = json_decode($_POST['MemNo']);
	$message['message'] = "傳成功了";
    // 抓到文章編號
    $sqlNumber = "select articleNo from discusArt ORDER BY articleNo DESC LIMIT 1";
    $sqlNos = $pdo->query($sqlNumber);
    $sqlNo = $sqlNos->fetchAll(PDO::FETCH_ASSOC);
    // 文章編號+1
    $sqlNoNew = $sqlNo[0]["articleNo"] + 1;
    // 抓到時間
    $today = date('Y-m-d H:i:s');
    
    // 資料庫語法
    $table ='discusArt';//資料庫的table名稱
    $value = "$sqlNoNew,$MemNo,'$today',$articleContent";//文章編號+會員編號+時間
    
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