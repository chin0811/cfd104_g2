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
            "creditCard": $('.changeValue[name="6"]').val(),
        },
        success(res) {
            if (res.msg !== false) {
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
            } else {
                alert("修改失敗，請重新登入。");
                location.href = "login.html";
            }

        },
        error(e) {
            console.log('ajax error');
            console.log(e.responseText);
            console.log(e);
        }
    });
}

/* 關閉視窗後
closes.onclick = function(e){
    bouncingBox.style.display = "none"
    modifyData.style.display = "block"
    confirmTheChanges.style.display = "none"
}
*/