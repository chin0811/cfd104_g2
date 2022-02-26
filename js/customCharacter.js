/* 人物更換 */
const adjustmentLever = document.querySelectorAll(".adjustmentLever");
const checkbox = document.querySelectorAll(".checkbox");
const characterAdjustment = document.querySelector(".characterAdjustment");
const pictureChange = document.querySelectorAll(".pictureChange img");
let adjustmentArr = [0, 0, 0]
    /* 風格圓圈轉換 */
const styleRound = document.querySelectorAll(".styleRound");
/* 點擊更換按鈕遮罩 */
const clickPeople = document.querySelector(".clickPeople");

function chk(input) {
    console.log(input)
    for (var i = 0; i < 2; i++) {
        checkbox[i].checked = false; /* 將所有 checkInput 取消 checked */
    }
    input.checked = true; /* 返回的該 checkInput 設為 checked */
    if (checkbox[0].checked) { /* 判斷是男是女 */
        adjustmentArr[0] = 0;
    } else {
        adjustmentArr[0] = 1;
    }
    return true;
}

/* 點擊更換圖片 */
for (let i = 0; 6 > i; i++) {
    pictureChange[i].onclick = function(e) {
        chk(checkbox[0])
        adjustmentLever[0].value = i;
        adjustmentLever[1].value = 0;
        console.log(i);
        /*
        characterAdjustment.setAttribute("src",this.src);
        */
    }
}
for (let i = 6; pictureChange.length > i; i++) {
    pictureChange[i].onclick = function(e) {
        chk(checkbox[1])
        adjustmentLever[0].value = i - 6;
        adjustmentLever[1].value = 0;
        console.log(i);
        /*
        characterAdjustment.setAttribute("src",this.src);
        */
    }
}



window.setInterval(function() {
    adjustmentArr[1] = adjustmentLever[0].value
    adjustmentArr[2] = adjustmentLever[1].value
    if (adjustmentArr[0] == 0) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon003.png");
            }
        }
    }
    if (adjustmentArr[0] == 1) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment.setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa003.png");
            }
        }
    }
    for (let i = 0; 3 > i; i++) {
        styleRound[i].style.background = "#394897"
        if (adjustmentArr[2] == i) {
            styleRound[i].style.background = "#FFD60A"
        }
    }
}, 100);



/* 修改確認 */
const characterModification = document.querySelector(".characterModification");
const characterConfirmation = document.querySelector(".characterConfirmation");
characterConfirmation.style.display = "none"
characterModification.style.display = "block"

characterModification.onclick = function() {
    for (let i = 0; i < 2; i++) {
        checkbox[i].removeAttribute("disabled");
        adjustmentLever[i].removeAttribute("disabled");
    }
    characterModification.style.display = "none"
    characterConfirmation.style.display = "block"
    clickPeople.classList.remove('mask');
};

characterConfirmation.onclick = function() {
    for (let i = 0; i < 2; i++) {
        checkbox[i].setAttribute("disabled", "");
        adjustmentLever[i].setAttribute("disabled", "");
    }
    characterConfirmation.style.display = "none"
    characterModification.style.display = "block"
    clickPeople.classList.add('mask');
};