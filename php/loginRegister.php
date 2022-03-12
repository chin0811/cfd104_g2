<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $getJSON = file_get_contents('php://input');
    $getAll = json_decode($getJSON,true);
    $getData = $getAll['sendData'];
    // echo $getData;
    $sqlNumber = "select memNo from member ORDER BY memNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $today = date('Y-m-d H:i:s');
    $memNoNew = $dataNumber[0]["memNo"] + 1;

    //刪除""
    $str_sec = explode('"',$getData);
    // echo print_r($str_sec);
    
    $value = "$memNoNew,".$str_sec[1].",'NULL','$today','正常',0,1,1";
    // $value = "31,'asdasdasd','asdasdasd','asdasdasd','adasdas','asdasdasd@asd.asd','12312321','12312','NULL','2022-03-12 16:01:44','正常',0,1,1";
    // echo  json_encode($value,JSON_UNESCAPED_UNICODE);
    echo $value;
    

	$message['message'] = "傳成功了";
    // 修改資料庫
    // 資料庫語法
    $table ='member';//資料庫的table名稱
    // $value =json_decode($_POST['administrators']);//傳進來的東西，是要可以直接寫進sql的行式
    $sql = "insert into $table values($value)";
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
	$message['message'] = "傳送失敗";
}
	// echo json_encode($message,JSON_UNESCAPED_UNICODE);
    echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>