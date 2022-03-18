<?php 
try {
	require_once("g2_dataConnect.php");
    session_start();
    $memNo=$_SESSION["memNo"];

    $Status =$_POST['Status'];

    if($Status == '0')//取得
	$sql = "SELECT * FROM favlist INNER JOIN com ON favlist.productNumber = com.prodNo Where favlist.memNo='$memNo'";
    else
    {
    $favoriteListNumber =$_POST['favoriteListNumber'];

    $sql = "DELETE FROM favlist Where favoriteListNumber = '$favoriteListNumber' and memNo='$memNo'";
    }

	$datas = $pdo->query($sql);
	$data = $datas->fetchAll(PDO::FETCH_ASSOC);
	echo  json_encode($data,JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>