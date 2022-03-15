<?php
header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 確認是否收到form給我的資料
	$message['message'] = "傳成功了";
    // 修改資料庫

    // 資料庫語法
    $table ='discusart';//資料庫的table名稱
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
    $value = "{$_POST['商品編號']},{$_POST['販售會員編號']},{$newName},{$_POST['販售狀態']},{$_POST['商品資訊']},{$_POST['廣告狀態']},{$_POST['商品鑑定證書']},{$_POST['商品分類']},{$_POST['審核狀態']},{$_POST['artistName']}";
    //商品編號	販售會員編號 圖片 販售狀態 商品資訊	廣告狀態 商品鑑定證書 商品分類 審核狀態	商品名稱
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
?>