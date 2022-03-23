<?php 
try {
	require_once("g2_dataConnect.php");
    session_start();
    $memNo=$_SESSION["memNo"];
    $orderStatus =$_POST['orderStatus'];
    if($orderStatus == '0')
	$sql = "SELECT * FROM actOrd INNER JOIN com ON actOrd.productNumber = com.prodNo INNER JOIN comImg ON actOrd.productNumber = comImg.prodNo Where orderStatus !='訂單結單' and memNoSale='$memNo'";
    else
    $sql = "SELECT * FROM actOrd INNER JOIN com ON actOrd.productNumber = com.prodNo INNER JOIN comImg ON actOrd.productNumber = comImg.prodNo Where orderStatus ='訂單結單' and memNoSale='$memNo'";

	$datas = $pdo->query($sql);
	$data = $datas->fetchAll(PDO::FETCH_ASSOC);
	echo  json_encode($data,JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>