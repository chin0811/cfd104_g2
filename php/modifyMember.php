<?php
header('Content-Type: application/json; charset=utf-8');
require_once ("g2_dataConnect.php");
// 如果 ajax 使用 POST 傳送才處理
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 如果沒有傳 資料表 或 需要的資料欄位 回傳錯誤
    // 在 ajax 中 console.log(data.msg)，可看見 '資料表或欄位未設定' 提示字
    if (!isset($_POST['memNo'])) {
        $msg['msg'] = '資料表或欄位未設定';
        echo json_encode($msg);
        return;
    };
    if ($_POST["memPwd"] == "***********") $sql = "update member set memName='{$_POST['memName']}',memNickName='{$_POST['memNickName']}' ,memName='{$_POST['memName']}' ,email='{$_POST['email']}' ,phone='{$_POST['phone']}' ,address='{$_POST['address']}' ,creditCard={$_POST['creditCard']} where memNo={$_POST['memNo']}";
    else $sql = "update member set memName='{$_POST['memName']}',memNickName='{$_POST['memNickName']}' ,memName='{$_POST['memName']}' ,email='{$_POST['email']}' ,phone='{$_POST['phone']}' ,address='{$_POST['address']}' ,creditCard={$_POST['creditCard']},memPwd='{$_POST['memPwd']}' where memNo={$_POST['memNo']}";
    // 執行sql
    try {
        $result = $pdo->exec($sql);
        if ($result == 1) {
            $sql = "select * from member where memNo={$_POST['memNo']}";
            $table = $pdo->query($sql);
            $row = $table->fetch(PDO::FETCH_ASSOC);
            //重寫session
            session_start();
            $_SESSION["memNickName"] = $_POST['memNickName'];
            $_SESSION["memName"] = $_POST['memName'];
            $_SESSION["email"] = $_POST['email'];
            $_SESSION["phone"] = $_POST['phone'];
            $_SESSION["address"] = $_POST['address'];
            $_SESSION["creditCard"] = $_POST['creditCard'];
            echo json_encode($row);
        } else {
            $msg['msg'] = '沒有更新。';
            echo json_encode($msg);
        }
    }
    catch(PDOException $e) {
        $msg['msg'] = $e->getMessage();
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }
} else {
    $msg['msg'] = '請使用POST';
    echo json_encode("連線失敗");
}
?>