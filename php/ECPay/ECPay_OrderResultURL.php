<?php
//include "db_func.php"; 
require_once 'ECPay.Payment.Integration.php';
 
// 將 post 資料轉成字串 儲存 SaveData
$String = print_r( $_POST, true );
//file_put_contents( 'tmp/ECPay.txt', $String, FILE_APPEND );
 
//writelogV1("tmp/log.txt" ,"ECPay_OrderResultURL.php======================");  
//writelogV1("tmp/log.txt" ,$String); 
 
 
define( 'ECPay_MerchantID', '2000132' );
define( 'ECPay_HashKey', '5294y06JbISpM5x9' );
define( 'ECPay_HashIV', 'v77hoKGq4kWxNNIS' );
 
// 重新整理回傳參數。
$arParameters = $_POST;
foreach ($arParameters as $keys => $value) {
    if ($keys != 'CheckMacValue') {
        if ($keys == 'PaymentType') {
            $value = str_replace('_CVS', '', $value);
            $value = str_replace('_BARCODE', '', $value);
            $value = str_replace('_CreditCard', '', $value);
        }
        if ($keys == 'PeriodType') {
            $value = str_replace('Y', 'Year', $value);
            $value = str_replace('M', 'Month', $value);
            $value = str_replace('D', 'Day', $value);
        }
        $arFeedback[$keys] = $value;
    }
}
 
// 計算出 CheckMacValue
$CheckMacValue = ECPay_CheckMacValue::generate( $arParameters, ECPay_HashKey, ECPay_HashIV );
 
// 必須要支付成功並且驗證碼正確
if ( $_POST['RtnCode'] =='1' && $CheckMacValue == $_POST['CheckMacValue'] ){
    // 
    // 要處理的程式放在這裡，例如將線上服務啟用、更新訂單資料庫付款資訊等
    // 
}
 
// 接收到資訊回應ok
echo 'OK!付款成功';