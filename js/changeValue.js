var modifyData = document.querySelector('.modifyData');
var confirmTheChanges = document.querySelector('.confirmTheChanges');
var changeValue = document.querySelectorAll('.changeValue');
// let arr = [] // 儲存原本的資料
modifyData.style.display = "block"
confirmTheChanges.style.display = "none"

for (let i = 0; i < 10; i++) {
    // arr.push(changeValue[i].getAttribute("value"));
    try {
        document.querySelectorAll('.changeValue')[i].style.display = "none";
        document.querySelectorAll('.showChangeValue')[i].style.display = "inline-block";
    } catch {}
}


modifyData.onclick = function(e) {
    for (let i = 0; i < 10; i++) {
        // arr.push(changeValue[i].getAttribute("value"));
        try {
            document.querySelectorAll('.changeValue')[i].style.display = "inline-block";
            document.querySelectorAll('.showChangeValue')[i].style.display = "none";
            $($('.changeValue')[i]).val($($('.showChangeValue')[i]).text());
            changeValue[i].removeAttribute("disabled");
            console.log('yes');
        } catch {
            console.log('err');
        }
    }
    modifyData.style.display = "none"
    confirmTheChanges.style.display = "block"
}

confirmTheChanges.onclick = function(e) {
    // arr = [] // 資料清空
    var dmemPwd = $('.changeValue[name="7"]').val() == "***********" ? "***********" : $('.changeValue[name="7"]').val();
    var dcreditCard = $('.changeValue[name="6"]').val() == '' ? 0 : $('.changeValue[name="6"]').val();

    var re = /^\d{4}\d{4}\d{4}\d{4}$/;
    if (!re.test($('.changeValue[name="6"]').val())) {
        alert("信用卡尚未填寫完成!!!");
        return;
    } else {

        $.ajax({
            type: 'POST',
            url: 'php/modifyMember.php',
            data: {
                "memNo": $('#memNo3DPage').text(),
                "memNickName": $('.changeValue[name="1"]').val(),
                "memName": $('.changeValue[name="2"]').val(),
                "email": $('.changeValue[name="3"]').val(),
                "phone": $('.changeValue[name="4"]').val(),
                "address": $('.changeValue[name="5"]').val(),
                "creditCard": dcreditCard,
                "memPwd": dmemPwd
            },
            success(res) {
                for (let i = 0; i < 10; i++) {
                    try {
                        document.querySelectorAll('.changeValue')[i].style.display = "none";
                        document.querySelectorAll('.showChangeValue')[i].style.display = "inline-block";
                        document.querySelectorAll('.showChangeValue')[i].innerHTML = document.querySelectorAll('.changeValue')[i].value;
                        changeValue[i].style.border = "none"
                        changeValue[i].setAttribute("disabled", "");
                    } catch {}
                }
                modifyData.style.display = "block";
                confirmTheChanges.style.display = "none";
            },
            error(e) {
                console.log('ajax error');
                console.log(e.responseText);
                console.log(e);
            }
        });
    }
}

/* 關閉視窗後
closes.onclick = function(e){
    bouncingBox.style.display = "none"
    modifyData.style.display = "block"
    confirmTheChanges.style.display = "none"
}
*/