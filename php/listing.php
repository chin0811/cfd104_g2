<?php
    // require_once("g2_dataConnect.php");
    // try {
        // 資料庫設定
        //$host = "cfd104g5.asuscomm.com";
        //$dbname = "cfd104_g2";//資料庫名子
        //$user = "root"; // 記得改成自己的名字
        //$password = "Eric20212022";
        //$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8"; // 本地端伺服器port
        //$options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_CASE=>PDO::CASE_NATURAL);

        // 建立pdo物件
        //$pdo = new PDO($dsn, $user, $password, $options);
    // }
    // catch (Exception $e) {
    //     echo "錯誤行號 : ", $e->getLine(), "<br>";
    //     echo "錯誤原因 : ", $e->getMessage(), "<br>";
    // }

header('Content-Type: application/json; charset=utf-8');
require_once("g2_dataConnect.php");
// echo
// $newName =['','','','']; //多圖打開
// if($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // 確認是否收到form給我的資料
// 	$message['message'] = "傳成功了";
//     // 修改資料庫
//     $newName = [];
//     // 資料庫語法
//     $table ='com';//資料庫的table名稱
//     switch($_FILES["pic"]["error"]){ //["input name"][""]
//         case UPLOAD_ERR_OK:
//             $dir = "images";
//             if(file_exists($dir)==false){
//                 mkdir($dir); //make directory
//             }
//                 $from = $_FILES['pic']['tmp_name']; //含路徑['input name']['暫存路徑']
//                 $fileName = $_FILES['pic']['name']; //AAAA.png['input name']['附檔名']
//                 $name = explode('.',$fileName);	// [AAAA,png]//檔案全名
//                 //流水號產生
//                 $newName = uniqid().".".$name[1];
//                 // $to = "$dir/" . $_FILES['pic']['name'];
//                 $to = $dir."/".$newName;
//             if(copy($from, $to)){
//                 echo $to;
//                 echo "上傳成功~";
//             }else{
//                 echo "上傳失敗~";
//             }
//             break;
//         //為上傳檔案
//         case UPLOAD_ERR_NO_FILE:
//             echo "檔案未選 <br>";
//             break;
//         //
//         default:
//             echo "系統暫時不能提供服務~";
//     }


    $table ='com';
    //input所對應之欄位['填寫input name'] //圖片欄位放{$newName}
    $sqlNumber = "select prodNo from com ORDER BY prodNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $prodNoNew = $dataNumber[0]["prodNo"] + 1;
    // $sqlNumber = "select memNo from com ORDER BY memNo DESC LIMIT 1";
    // $datas = $pdo->query($sqlNumber);
	// $dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    // $memNoNew1 = $dataNumber[0]["memNo"] + 1;
    $productIntro = $_POST['productIntro'];
    $ad = $_POST['ad'];
    $papers = $_FILES['paper']['name'];
    $type = $_POST['type'];
    $artName = $_POST['artName'];
    $artistName = $_POST['artistName'];
    $memNo = $_GET['memNo'];
    $value = "$prodNoNew,$memNo,'未販售','$artName','$productIntro','$ad','$papers','$type','未審查','$artistName'";
    //商品編號	販售會員編號 販售狀態 商品資訊	廣告狀態 商品鑑定證書 商品分類 審核狀態	商品名稱
    //資料放入sql之指令
    $sql = "insert into $table values($value)";
    // echo $sql; //sql指令
    // 傳到資料庫裏面去
    // :src='images/xxxx'

    try {
        $statement = $pdo->prepare($sql);
        $result = $statement->execute();
        if ($result) {
            // $msg['msg'] = '更新成功';
        }
        else {
            // $msg['msg'] = '更新失敗';
        }
    }
    catch (PDOException $e){
        // $msg['msg'] = $e -> getMessage();
    }


$tableActord ='actord';//資料庫的table名稱
    //input所對應之欄位['填寫input name'] //圖片欄位放{$newName}
    $sqlNumberActord = "select auctionNo from actord ORDER BY auctionNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumberActord);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $actionNo = $dataNumber[0]["auctionNo"] + 1;

    //資料傳進actord拍賣與訂單資料庫
    //$productIntro = $_POST['productIntro'];//com
    //$ad = $_POST['ad'];//com
    //$papers = $_FILES['paper']['name'];//com
    //$type = $_POST['type'];//com
    //$artName = $_POST['artName'];//
    //$artistName = $_POST['artistName'];//


    //自動生成//1.商品編號
    //自動生成//2.販售會員編號
    //共用//$memNo = $_GET['memNo'];//com共用 拍賣會員編號
    $startPrice = $_POST['starPrice'];//3.$起標價
    $price = $_POST['price'];//4.$定價
    $bidInterval = $_POST['bidPitch'];//5.$標價間距
    $dateInterval = $_POST['time'];//6.$競標拍賣時間長度


    $value = "$actionNo,$prodNoNew,$memNo,null,$startPrice,$price,null,null,null,'未上架',null,null,null,null,null,null,null,null,$bidInterval,'0',null,$dateInterval";
    //拍賣編號(流水) 商品編號(連結)	 販售會員編號(連結) 買家編號(固定)  起標價  定價  結標價(固定) 起始日(固定) 結速日(固定) 拍賣狀態(固定) 創建日期(固定) 訂單狀態(固定) 收件者(固定) 收件者phone(固定) 收記者地址(固定) 寄件者名子(固定) 寄件者phone(固定) 寄件者地址(固定) 標價間距 拍賣讚數(固定) 競標時間(固定) 拍賣天數
    //資料放入sql之指令
    $sqlActord = "insert into $tableActord values($value)";
    // echo $sqlActord; //sql到sqlActord 表指令
    // 傳到資料庫裏面去
    // :src='images/xxxx'

    try {
        $statement = $pdo->prepare($sqlActord);
        $result = $statement->execute();
        if ($result) {
            // $msg['msg'] = '更新成功';
        }
        else {
            // $msg['msg'] = '更新失敗';
        }
    }
    catch (PDOException $e){
        // $msg['msg'] = $e -> getMessage();
    }






    //資料庫語法
   //資料庫的table名稱
    foreach($_FILES["pic"]["error"] as $i=>$error){//["input name"][""]
        switch($error){
            case UPLOAD_ERR_OK:
                $dir = "../assets/image";
                if(file_exists($dir)==false){
                    mkdir($dir); //make directory
                }
                    $from = $_FILES['pic']['tmp_name'][$i]; //含路徑['input name']['暫存路徑']
                    $fileName = $_FILES['pic']['name'][$i]; //AAAA.png['input name']['附檔名']
                    $name = explode('.',$fileName);	// [AAAA,png]//檔案全名
                    // 流水號產生

                    $sqlImgNumber = "select imgNo from comimg ORDER BY imgNo DESC LIMIT 1";
                    $imgdatas = $pdo->query($sqlImgNumber);
                    $imgdataNumber = $imgdatas->fetchAll(PDO::FETCH_ASSOC);
                    $imgNoNew = $imgdataNumber[0]["imgNo"] + 1;


                    $newName = uniqid().".".$name[1];
                    // $valueImg = "$imgNoNew,$prodNoNew,'$newName'";
                    $valueImg = "$imgNoNew,$prodNoNew,'$newName'";
                    $sqlImg = "insert into comimg values($valueImg)";
                    //echo $sqlImg;  //sql到Img表指令
                    
                    // echo $valueImg;
                    // $newName[$i] = $newName1;
                    // array_push($newName,$newName1); //(變數,流水號新增放入前面變數)
                    $to = "$dir/" . $_FILES['pic']['name'][$i];
                    // $to = $dir."/".$newName;
                    $statement1 = $pdo->prepare($sqlImg);
                    $result1 = $statement1->execute();
                   

                if(copy($from, $to)){
                    // echo $to;
                    // echo "上傳成功~";
                }else{
                    // echo "上傳失敗~";
                }
                break;
            //為上傳檔案
            case UPLOAD_ERR_NO_FILE:
                // echo "檔案未選 <br>";
                break;
            
            default:
                // echo "系統暫時不能提供服務~";
        }
    }

// }else{
// 	$message['message'] = "大失敗";
// }
// echo $msg['msg'];
echo "<script> alert('送出成功');</script>";
header('Refresh:2;url=../homePage.html');
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert('上傳成功')
    </script>
</head>
<body>
    
</body>
</html> -->