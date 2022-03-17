<?php 
//在這裡取得資料的門票
try {
	require_once("g2_dataConnect.php");
	//執行sql指令並取得pdoStatement
	$articleNo = $_GET['articleNo'];
	$sql = "select M.memName, F.content, F.messageTime
			from forumMes F join member M on F.memNo=M.memNo
			where F.articleNo = $articleNo 
			order by F.messageTime DESC;";
	$myArticleComments = $pdo->query($sql);
	$prodRow = $myArticleComments->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRow,JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
