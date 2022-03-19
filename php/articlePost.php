<?php 
header('Content-Type: application/json; ch  arset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到js給我的資料
    $dir = "../assets/image";
    $from = $_FILES['articlePic']['tmp_name'];
	// $articleContent = json_decode($_POST['ArticleContent']);
    // $MemNo = json_decode($_POST['MemNo']);
	$message['message'] = "傳成功了";

    // 抓到文章編號
    $sqlNumber = "select articleNo from discusArt ORDER BY articleNo DESC LIMIT 1";
    $sqlNos = $pdo->query($sqlNumber);
    $sqlNo = $sqlNos->fetchAll(PDO::FETCH_ASSOC);
    // 文章編號+1
    $sqlNoNew = $sqlNo[0]["articleNo"] + 1;

    // 抓到時間
    $today = date('Y-m-d H:i:s');

    // 給圖片新檔名
    $fileName = $_FILES['articlePic']['name']; //AAAA.png['input name']['附檔名']
    $name = explode('.',$fileName); // [AAAA,png]//檔案全名
    // 圖片新檔名
    $newName = uniqid().".".$name[1];
    $to = "$dir/".$newName;//複製之目標[路徑]以及[暫存檔名]
    if(copy($from,$to)){
        // echo "上傳成功";
    }else{
        // echo "上傳失敗";
    }

    // 文章標題
    $articleTitle = $_POST['articleTitle'];
    // 文章內容
    $articleContent = nl2br($_POST['articleContent']);
    
    $memNo = $_GET['memNo'];
    // 資料庫語法
    $table ='discusArt';//資料庫的table名稱
    // $value = "$sqlNoNew,$MemNo,'$today','未檢舉','無須審核',0,'$newName','$articleTitle','$articleContent','是'";
    $value = "$sqlNoNew,$memNo,'$today','未檢舉','無須審核',0,'$newName','$articleTitle','$articleContent','是'";
    // echo $value;
    // 傳到資料庫裏面去
    $sql = "insert into $table values ($value)";

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
header('Refresh:0.1;url=../articleAll.html');
	// echo json_encode($message,JSON_UNESCAPED_UNICODE);
    // echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>