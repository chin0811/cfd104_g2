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
            // changeValue[i].style.border = "1px solid #000"
            changeValue[i].removeAttribute("disabled");
        } catch {}
    }
    modifyData.style.display = "none"
        // $('.modifyData').hide();
    confirmTheChanges.style.display = "block"
        // $('.confirmTheChanges').show();
}

confirmTheChanges.onclick = function(e) {
    // arr = [] // 資料清空
    for (let i = 0; i < 10; i++) {
        // arr.push(changeValue[i].getAttribute("value")); // 寫入新資料
        try {
            document.querySelectorAll('.changeValue')[i].style.display = "none";
            document.querySelectorAll('.showChangeValue')[i].style.display = "inline-block";
            document.querySelectorAll('.showChangeValue')[i].innerHTML = document.querySelectorAll('.changeValue')[i].value;
            changeValue[i].style.border = "none"
            changeValue[i].setAttribute("disabled", "");
        } catch {}
    }
    modifyData.style.display = "block"
        // $('.modifyData').show();
    confirmTheChanges.style.display = "none"
        // $('.confirmTheChanges').hide();
}

/* 關閉視窗後
closes.onclick = function(e){
    bouncingBox.style.display = "none"
    modifyData.style.display = "block"
    confirmTheChanges.style.display = "none"
}
*/