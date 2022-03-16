<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
    $sqlNumber = "select issueNo from robsup ORDER BY issueNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $memNoNew = $dataNumber[0]["issueNo"] + 1;
    $robSupKey = $_POST['robSupKey'];
	$robSupWord = $_POST['robSupWord'];
    $value = "$memNoNew,'$robSupKey','$robSupWord'";
    // echo $value;
    

	$message['message'] = "傳成功了";
    // 修改資料庫
    // 資料庫語法
    $table ='robsup';//資料庫的table名稱
    // $value =json_decode($_POST['administrators']);//傳進來的東西，是要可以直接寫進sql的行式
    $sql = "insert into $table values($value)";
    
	header('Refresh:0.5;url=../backRobSup.html');
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
// }else{
// 	$message['message'] = "傳送失敗";
// }
	// echo json_encode($message,JSON_UNESCAPED_UNICODE);
    // echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>