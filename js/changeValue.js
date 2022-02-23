const modifyData = document.querySelector('.modifyData');
const confirmTheChanges = document.querySelector('.confirmTheChanges');
const changeValue = document.querySelectorAll('.changeValue');
// let arr = [] // 儲存原本的資料
modifyData.style.display = "block"
confirmTheChanges.style.display = "none"

modifyData.onclick = function(e){
    for(let i=0; i<10; i++){
        // arr.push(changeValue[i].getAttribute("value"));
        changeValue[i].style.border = "1px solid #000"
        changeValue[i].removeAttribute("disabled");
    }
    modifyData.style.display = "none"
    confirmTheChanges.style.display = "block"
}

confirmTheChanges.onclick = function(e){
    // arr = [] // 資料清空
    for(let i=0; i<10; i++){
        // arr.push(changeValue[i].getAttribute("value")); // 寫入新資料
        changeValue[i].style.border = "none"
        changeValue[i].setAttribute("disabled","");
    }
    modifyData.style.display = "block"
    confirmTheChanges.style.display = "none"
}

/* 關閉視窗後
closes.onclick = function(e){
    bouncingBox.style.display = "none"
    modifyData.style.display = "block"
    confirmTheChanges.style.display = "none"
}
*/