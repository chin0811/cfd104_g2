<?php
    try {
        // 資料庫設定
        $host = "localhost";
        $dbname = "cfd104_g2";
        $user = "root"; // 記得改成自己的名字
        $password = "0911024335";
    
        $dsn = "mysql:host=$host;port=3306;dbname=$dbname;charset=utf8";
    
        $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);
    
        // 建立pdo物件
        $pdo = new PDO($dsn, $user, $password, $options);
    }
    catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }
?>