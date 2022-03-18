<?php 
try{
	require_once("g2_dataConnect.php");
	$sql = "select * from actOrd join com on actOrd.productNumber = com.prodNo  where com.prodNo = {$_GET["number"]}";
	$products = $pdo->query($sql);
	$prodRow = $products->fetch(PDO::FETCH_ASSOC);
    echo json_encode($prodRow,JSON_UNESCAPED_UNICODE);
}catch(PDOException $e){
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
 ?>