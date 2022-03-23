
<form id="idFormAioCheckOut" method="post" action="php/ECPay/ECPay_CreateOrder.php">
    <label>
        <input type="text" name="MerchantTradeNo" value="${m}" class="form-control"/>
    </label>
    <label class="col-xs-12">
        <input type="hidden" name="MerchantTradeDate" value="${new Date().format('yyyy-MM-dd hh:mm:ss')}" class="form-control"/>
    </label>
    <label class="col-xs-12">
        <input type="hidden" name="PaymentType" value="aio" class="form-control"/>

    </label>
    <label class="col-xs-12">
        <input type="hidden" name="TotalAmount" value="${arrOrder[i].closingPrice}" class="form-control"/>
    </label>
    <label class="col-xs-12">
        <input type="hidden" name="TradeDesc" value="藝術品" class="form-control"/>
    </label>
    <label class="col-xs-12">
        <input type="hidden" name="ItemName" value='${arrOrder[i].productName}' class="form-control"/>
    </label>
     <label class="col-xs-12" >
        <input type="hidden" name="ChoosePayment" value="Credit"/>
    </label>
    <button type="submit" class="btn btn-default round round3dBtn">前往付款頁面</button>
</form>
 
