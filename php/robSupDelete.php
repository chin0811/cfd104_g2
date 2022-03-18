<?php 
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");





try {
//     $statement = $pdo->prepare($sql);
//     $result = $statement->execute();
    // if ($result) {
    //     $msg['msg'] = '更新成功';
    // }
    // else {
    //     $msg['msg'] = '更新失敗';
    // }
    $index = $_GET['index'];
    $sql="DELETE FROM robSup WHERE issueNo=$index";
    $statement = $pdo->exec($sql);
    // $statement = $pdo->prepare($sql);
    // $result = $statement->execute();
    // header('Refresh:0.5;url=../backRobSup.html');
    $msg['msg'] = "成功";
}
catch (PDOException $e){
    $msg['msg'] = $e -> getMessage();
}
// }else{
// 	$message['message'] = "傳送失敗";
// }
	// echo json_encode($message,JSON_UNESCAPED_UNICODE);
    echo json_encode($msg,JSON_UNESCAPED_UNICODE);
?>