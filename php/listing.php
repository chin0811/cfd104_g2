<?php
    // 資料庫設定
    // require_once("g2_dataConnect.php");
    // try {
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

    $table ='com';//資料庫的table名稱
    //input所對應之欄位['填寫input name'] //圖片欄位放{$newName}
    $sqlNumber = "select prodNo from com ORDER BY prodNo DESC LIMIT 1";
    $datas = $pdo->query($sqlNumber);
	$dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    $prodNoNew = $dataNumber[0]["prodNo"] + 1;
    // $sqlNumber = "select memNo from com ORDER BY memNo DESC LIMIT 1";
    // $datas = $pdo->query($sqlNumber);
	// $dataNumber = $datas->fetchAll(PDO::FETCH_ASSOC);
    // $memNoNew1 = $dataNumber[0]["memNo"] + 1;


    //變數設定
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
    echo $sql;
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



    //資料庫語法
    foreach($_FILES["pic"]["error"] as $i=>$error){//["input name"][""]
        switch($error){
            case UPLOAD_ERR_OK:
                $dir = "../assets/image";//圖片傳到的資料夾路徑
                if(file_exists($dir)==false){
                    mkdir($dir); //make directory
                }
                    $from = $_FILES['pic']['tmp_name'][$i]; //含路徑['input name']['暫存路徑']
                    // 流水號產生
                    $fileName = $_FILES['pic']['name'][$i]; //AAAA.png['input name']['附檔名']
                    $name = explode('.',$fileName);	// [AAAA,png]//檔案全名
                    $newName = uniqid().".".$name[1];

                    //抓到資料庫圖片後放入最後編號+1
                    $sqlImgNumber = "select imgNo from comimg ORDER BY imgNo DESC LIMIT 1";
                    $imgdatas = $pdo->query($sqlImgNumber);
                    $imgdataNumber = $imgdatas->fetchAll(PDO::FETCH_ASSOC);
                    $imgNoNew = $imgdataNumber[0]["imgNo"] + 1;



                    // $valueImg = "$imgNoNew,$prodNoNew,'$newName'";
                    $valueImg = "$imgNoNew,$prodNoNew,'$newName'";
                    $sqlImg = "insert into comimg values($valueImg)";//將圖片檔名放到另一個表格
                    echo $sqlImg;

                    // echo $valueImg;
                    // $newName[$i] = $newName1;
                    // array_push($newName,$newName1); //(變數,流水號新增放入前面變數)
                    $to = "$dir/" . $_FILES['pic']['name'][$i];
                    // $to = $dir."/".$newName;
                    $statement1 = $pdo->prepare($sqlImg);//圖片檔名.附檔名用pdo傳到sql
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
?>