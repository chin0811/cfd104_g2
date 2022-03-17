<?php
    try {
        // 資料庫設定
        $host = "cfd104g5.asuscomm.com";
        $dbname = "cdf104_g2";//資料庫名子
        $user = "root"; // 記得改成自己的名字
        $password = "123";
        $dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8"; // 本地端伺服器port
        $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);

        // 建立pdo物件
        $pdo = new PDO($dsn, $user, $password, $options);
    }
    catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
    }
?>

<?php
header('Content-Type: application/json; charset=utf-8');
// require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到form給我的資料
	$message['message'] = "傳成功了";
    // 修改資料庫

    // 資料庫語法
    $table ='com';//資料庫的table名稱
    switch($_FILES["pic"]["error"]){ //["input name"][""]
        case UPLOAD_ERR_OK:
            $dir = "images";
            if(file_exists($dir)==false){
                mkdir($dir); //make directory
            }
                $from = $_FILES['pic']['tmp_name']; //含路徑['input name']['暫存路徑']
                $fileName = $_FILES['pic']['name']; //AAAA.png['input name']['附檔名']
                $name = explode('.',$fileName);	// [AAAA,png]//檔案全名
                //流水號產生
                $newName = uniqid().".".$name[1];
                // $to = "$dir/" . $_FILES['pic']['name'];
                $to = $dir."/".$newName;
            if(copy($from, $to)){
                echo $to;
                echo "上傳成功~";
            }else{
                echo "上傳失敗~";
            }
            break;
        //為上傳檔案
        case UPLOAD_ERR_NO_FILE:
            echo "檔案未選 <br>";
            break;
        //
        default:
            echo "系統暫時不能提供服務~";
    }
    //input所對應之欄位['填寫input name'] //圖片欄位放{$newName}
    $sqlNumber = "select prodNo from com ORDER BY prodNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $memNoNew = $dataNumber[0]["prodNo"] + 1;
    $sqlNumber = "select memNo from com ORDER BY memNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $memNoNew1 = $dataNumber[0]["memNo"] + 1;
    $productIntro = $_POST['productIntro'];
    $ad = $_POST['ad'];
    $papers = $_FILES['papers']['name'];
    $type = $_POST['type'];
    $artistName = $_POST['artistName'];
    $value = "$memNoNew,$memNoNew1,'$newName','NULL','$productIntro','$ad','$papers','$type','未審查','$artistName'";//商品編號	販售會員編號 圖片 販售狀態 商品資訊	廣告狀態 商品鑑定證書 商品分類 審核狀態	商品名稱
    //資料放入sql之指令
    $sql = "insert into $table values($value)";
    echo $sql;
    // 傳到資料庫裏面去
    // :src='images/xxxx'
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
echo $msg['msg'];
?>