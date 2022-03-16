<?php
    // 資料庫連線檔
    // 記得去改帳號
    include('connectdb.php');
    // header 格式
    header('Content-Type: application/json; charset=utf-8');
    // 如果 ajax 使用 POST 傳送才處理
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['id'])) {
        $msg['msg'] = '請重新登入';
        echo json_encode($msg);
        return;
        }
        // 查詢會員資料
        $id = $_POST['id'];
        // sql 查詢語法
        $sql = "select * FROM favlist";
        //$msg['sql'] = $sql;   

            // 取得 join 資料表
            $commodity = $_POST['commodity'];
            // 取得 join 條件
            $productNumber = $_POST['productNumber'];
            // sql join 語法
            $joinSql = "$commodity on ($productNumber = $commodity.prodNo)";
            // 將 join 語法 加入前面的 select 語法中
            $sql = "$sql join $joinSql";
            // js console.log(data.sql) 可以看串完的完整語法
            $msg['sql']="$sql join $joinSql";    

            // 取得查詢條件
            $where = "memNo=$id";
            // sql where 語法
            // 將 join 語法 加入前面的 select 語法中
            $sql = "$sql where $where";
            // js console.log(data.sql) 可以看串完的完整語法
            $msg['sql'] = $sql;
        // 執行sql
        try {
            $result = $pdo -> query($sql);
            $count = $result->rowCount();
        
            if ($count > 0) {
            $msg['msg'] = $result -> fetchAll(PDO::FETCH_ASSOC);
        }
        else {
            $msg['msg'] = false;
        }
    }
    catch (PDOException $e){
    $msg['msg'] = $e -> getMessage();
    }
}
else {
    $msg['msg'] = '請使用POST';
}
echo json_encode($msg);
?>