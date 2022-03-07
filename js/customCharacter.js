/* 人物更換 */
const adjustmentLever = document.querySelectorAll(".adjustmentLever");
const checkbox = document.querySelectorAll(".checkbox");
const characterAdjustment = document.querySelectorAll(".characterAdjustment");
const pictureChange = document.querySelectorAll(".pictureChange img");
let adjustmentArr = [0, 0, 0]
    /* 風格圓圈轉換 */
const styleRound = document.querySelectorAll(".styleRound");
const characterAdjustment_box = document.querySelectorAll(".characterAdjustment_box");
/* 點擊更換按鈕遮罩 */
const controlBlock = document.querySelector(".controlBlock");
/* cookie */
let gender = "男性"

/*
function chk(input) {
    console.log(input)
    for (var i = 0; i < 2; i++) {
        checkbox[i].checked = false; /* 將所有 checkInput 取消 checked 
    }
    input.checked = true; /* 返回的該 checkInput 設為 checked 
    if (checkbox[0].checked) { /* 判斷是男是女 
        adjustmentArr[0] = 0;
    } else {
        adjustmentArr[0] = 1;
    }
    return true;
}
*/

/* 點擊更換圖片 */
for (let i = 0; 6 > i; i++) {
    pictureChange[i].onclick = function(e) {
        //chk(checkbox[0])
        adjustmentLever[0].value = i;
        adjustmentLever[1].value = 0;
        console.log(i);
        ChangeCookieImg();
    }
}
/*
for (let i = 6; pictureChange.length > i; i++) {
    pictureChange[i].onclick = function(e) {
        //chk(checkbox[1])
        adjustmentLever[0].value = i - 6;
        adjustmentLever[1].value = 0;
        console.log(i);
    }
}
*/


/* 男女轉換 */
const switchBetween_round = document.querySelector(".switchBetween .switchBetween_round");
switchBetween_round.addEventListener('click', function(e) {
    if (switchBetween_round.style.right == "-9px") {
        switchBetween_round.style.right = "33px"
        gender = "女性"
        adjustmentArr[0] = 1;
        pictureChange[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
        pictureChange[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
        pictureChange[2].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
        pictureChange[3].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
        pictureChange[4].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
        pictureChange[5].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
    } else {
        switchBetween_round.style.right = "-9px"
        gender = "男性"
        adjustmentArr[0] = 0;
        pictureChange[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
        pictureChange[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
        pictureChange[2].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
        pictureChange[3].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
        pictureChange[4].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
        pictureChange[5].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
    }
})


window.setInterval(function() {
    adjustmentArr[1] = adjustmentLever[0].value
    adjustmentArr[2] = adjustmentLever[1].value
    if (adjustmentArr[0] == 0) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon003.png");
            }
        }
    }
    if (adjustmentArr[0] == 1) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa003.png");
            }
        }
    }
    /* 圈圈轉變
    for (let i = 0; 3 > i; i++) {
        styleRound[i].style.background = "#394897"
        if (adjustmentArr[2] == i) {
            styleRound[i].style.background = "#FFD60A"
        }
    }
    */
}, 10000);

// characterAdjustment.addEventListener('click', ChangeCookieImg);

ChangeCookieImg();
function ChangeCookieImg(){
    adjustmentArr[1] = adjustmentLever[0].value
    adjustmentArr[2] = adjustmentLever[1].value
    if (adjustmentArr[0] == 0) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Christopher003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Eric003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Liam003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Mark003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Owen003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Simon003.png");
            }
        }
    }
    if (adjustmentArr[0] == 1) {
        if (adjustmentArr[1] == 0) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Emma003.png");
            }
        }
        if (adjustmentArr[1] == 1) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Evelyn003.png");
            }
        }
        if (adjustmentArr[1] == 2) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Jane003.png");
            }
        }
        if (adjustmentArr[1] == 3) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Lilly003.png");
            }
        }
        if (adjustmentArr[1] == 4) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Marilyn003.png");
            }
        }
        if (adjustmentArr[1] == 5) {
            characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
            characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa001.png");
            if (adjustmentArr[2] == 1) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa002.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa002.png");
            }
            if (adjustmentArr[2] == 2) {
                characterAdjustment[0].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa003.png");
                characterAdjustment[1].setAttribute("src", "assets/image/customCharacter/PowerPeople_Melissa003.png");
            }
        }
    }
    /* 圈圈轉變
    for (let i = 0; 3 > i; i++) {
        styleRound[i].style.background = "#394897"
        if (adjustmentArr[2] == i) {
            styleRound[i].style.background = "#FFD60A"
        }
    }
    */
}

/* 更改背景色 */
styleRound[0].onclick = function(e) {
    characterAdjustment_box[0].style.background = "#FFD60A";
    characterAdjustment_box[1].style.background = "#FFD60A";
}
styleRound[1].onclick = function(e) {
    characterAdjustment_box[0].style.background = "#394897";
    characterAdjustment_box[1].style.background = "#394897";
}
styleRound[2].onclick = function(e) {
    characterAdjustment_box[0].style.background = "#BCBCBC";
    characterAdjustment_box[1].style.background = "#BCBCBC";
}



/* 修改確認 */
const characterModification = document.querySelector(".characterModification");
const characterConfirmation = document.querySelector(".characterConfirmation");
characterConfirmation.style.display = "none"
characterModification.style.display = "block"

characterModification.onclick = function() {
    for (let i = 0; i < 2; i++) {
        //checkbox[i].removeAttribute("disabled");
        adjustmentLever[i].removeAttribute("disabled");
    }
    characterModification.style.display = "none"
    characterConfirmation.style.display = "block"
    controlBlock.classList.remove('mask');
    document.querySelector(".controlBlock").style.display = "flex";
};

characterConfirmation.onclick = function() {
    for (let i = 0; i < 2; i++) {
        //checkbox[i].setAttribute("disabled", "");
        adjustmentLever[i].setAttribute("disabled", "");
    }
    characterConfirmation.style.display = "none"
    characterModification.style.display = "block"
    controlBlock.classList.add('mask');
    document.querySelector(".controlBlock").style.display = "none";
};

/* cookie */
document.cookie = `adjustmentArr=${adjustmentArr}`;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
let cookie_adjustmentArr = getCookie('adjustmentArr').split(',');
window.onload = function() {
    qadjustmentArr = cookie_adjustmentArr;
}