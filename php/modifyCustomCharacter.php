<?php
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
// 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        // 如果沒有傳 資料表 或 需要的資料欄位 回傳錯誤
        // 在 ajax 中 console.log(data.msg)，可看見 '資料表或欄位未設定' 提示字
        session_start();
        $memNo=$_SESSION["memNo"];
        if (!isset($memNo)) {
            $msg['msg'] = '資料表或欄位未設定';
            echo json_encode($msg);
            return;
        };

        $sql = "update member set virBgNo={$_POST['virBgNo']},virChaNo={$_POST['virChaNo']} where memNo=$memNo";     
  
        // 執行sql
        try {
            $result = $pdo -> exec($sql);
            
            if ($result == 1) {
                $sql = "select * from member where memNo=$memNo";
                $table = $pdo -> query($sql);
                $row = $table -> fetch(PDO::FETCH_ASSOC);
                //重寫session
                // session_start();
                $_SESSION["virBgNo"] = $_POST['virBgNo'];
                $_SESSION["virChaNo"] = $_POST['virChaNo'];

                echo json_encode($row);
            }
        }
        catch (PDOException $e){
            $msg['msg'] = $e -> getMessage();
            echo "錯誤行號 : ", $e->getLine(), "<br>";
            echo "錯誤原因 : ", $e->getMessage(), "<br>";
        }
    }
    else {
        $msg['msg'] = '請使用POST';
        echo json_encode("連線失敗");
    }
?>