<?php 
try {
	require_once("g2_dataConnect.php");
    session_start();
    $memNo=$_SESSION["memNo"];

    $Status =$_POST['Status'];

    if($Status == '0')//取得
	$sql = "SELECT * FROM favList INNER JOIN com ON favList.productNumber = com.prodNo INNER JOIN comImg ON favList.productNumber = comImg.prodNo INNER JOIN actord ON favList.productNumber = actOrd.productNumber Where favList.memNo='$memNo'";
    else
    {
    $favoriteListNumber =$_POST['favoriteListNumber'];

    $sql = "DELETE FROM favList Where favoriteListNumber = '$favoriteListNumber' and memNo='$memNo'";
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