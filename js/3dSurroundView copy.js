// Create viewer
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    //背景圖
    "panorama": "assets/image/3dSurroundView.page.jpg",
    "hfov": "120",
    "autoLoad": true,
    "hotSpots": [{
            "id": "accountManagement",
            "pitch": -30,
            "yaw": 50,
            "cssClass": "custom-hotspot accountManagement",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "帳號管理",
            "clickHandlerFunc": accountManagement
        },
        {
            "id": "collect",
            "pitch": -8,
            "yaw": 125,
            "cssClass": "custom-hotspot collect",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "收藏",
            "clickHandlerFunc": collect
        },
        {
            "id": "consumptionRecord",
            "pitch": -25,
            "yaw": 76,
            "cssClass": "custom-hotspot consumptionRecord",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "消費紀錄",
            "clickHandlerFunc": consumptionRecord
        },
        {
            "id": "customCharacter",
            "pitch": -10,
            "yaw": 218,
            "cssClass": "custom-hotspot customCharacter",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "客製化人物",
            "clickHandlerFunc": customCharacter
        },
        {
            "id": "myListing",
            "pitch": 25,
            "yaw": 348,
            "cssClass": "custom-hotspot myListing",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "我的上架",
            "clickHandlerFunc": myListing
        }
    ]
});

//宣告元素
const accountManagement_bouncing = document.querySelector(".accountManagement_bouncing");
const collect_bouncing = document.querySelector(".collect_bouncing");
const consumptionRecord_bouncing = document.querySelector(".consumptionRecord_bouncing");
const customCharacter_bouncing = document.querySelector(".customCharacter_bouncing");
const myListing_bouncing = document.querySelector(".myListing_bouncing");

const bouncingBox = document.querySelectorAll(".bouncingBox");
const closes3D = document.querySelectorAll(".close3D");
for (let i = 0; 5 > i; i++) {
    bouncingBox[i].style.display = "none"
}

// 創建圓點的function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 4 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 - 10 + 'px';
    if (screen.width >= 769) {
        span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.marginTop = -span.scrollHeight - 12 + 'px';
    }
}
window.onresize = function() {
    viewer.removeHotSpot("accountManagement");
    viewer.removeHotSpot("collect");
    viewer.removeHotSpot("consumptionRecord");
    viewer.removeHotSpot("customCharacter");
    viewer.removeHotSpot("myListing");
    viewer.addHotSpot({
        "id": "accountManagement",
        "pitch": -30,
        "yaw": 50,
        "cssClass": "custom-hotspot accountManagement",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "帳號管理",
        "clickHandlerFunc": accountManagement
    });
    viewer.addHotSpot({
        "id": "collect",
        "pitch": -8,
        "yaw": 125,
        "cssClass": "custom-hotspot collect",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "收藏",
        "clickHandlerFunc": collect
    });
    viewer.addHotSpot({
        "id": "consumptionRecord",
        "pitch": -25,
        "yaw": 76,
        "cssClass": "custom-hotspot consumptionRecord",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "消費紀錄",
        "clickHandlerFunc": consumptionRecord
    });
    viewer.addHotSpot({
        "id": "customCharacter",
        "pitch": -10,
        "yaw": 218,
        "cssClass": "custom-hotspot customCharacter",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "客製化人物",
        "clickHandlerFunc": customCharacter
    });
    viewer.addHotSpot({
        "id": "myListing",
        "pitch": 25,
        "yaw": 348,
        "cssClass": "custom-hotspot myListing",
        "createTooltipFunc": hotspot,
        "createTooltipArgs": "我的上架",
        "clickHandlerFunc": myListing
    });
}

//帳號管理
function accountManagement() {
    accountManagement_bouncing.style.display = "block"
    getaccountManagement();

}

//去後PHP得帳號session
async function getaccountManagement() {
    let url = 'php/loginCheck.php';
    try {
        let res = await fetch(url);
        // return await res.json();
        let memData = await res.json();
        $('#memNo3DPage').text(memData.memNo);
        $('#memNickName3DPage').text(memData.memNickName);
        $('#memId3DPage').text(memData.memId);
        $('#memPwd3DPage').text('***********');
        $('#memName3DPage').text(memData.memName);
        $('#email3DPage').text(memData.email);
        $('#phone3DPage').text(memData.phone);
        $('#address3DPage').text(memData.address);
        $('#creditCard3DPage').text(memData.creditCard);
        $('#enrollDate3DPage').text(memData.enrollDate);
        //人物背景色
        switch (memData.virBgNo) {
            case "0":
                characterAdjustment_box[0].style.background = "#FFD60A";
                characterAdjustment_box[1].style.background = "#FFD60A";
                characterAdjustment_box[0].setAttribute("name", 0);
                characterAdjustment_box[1].setAttribute("name", 0);
                break;
            case "1":
                characterAdjustment_box[0].style.background = "#394897";
                characterAdjustment_box[1].style.background = "#394897";
                characterAdjustment_box[0].setAttribute("name", 1);
                characterAdjustment_box[1].setAttribute("name", 1);
                break;
            case "2":
                characterAdjustment_box[0].style.background = "#BCBCBC";
                characterAdjustment_box[1].style.background = "#BCBCBC";
                characterAdjustment_box[0].setAttribute("name", 2);
                characterAdjustment_box[1].setAttribute("name", 2);
                break;
        }

        //人物圖片判斷
        let adjustmentArr_1 = 0;
        let adjustmentArr_2 = 0;
        let adjustmentArr_3 = 0;
        //判斷性別
        if (memData.virChaNo < 19) {
            adjustmentArr_1 = 0;
            //判斷哪一個人物
            adjustmentArr_2 = Math.floor((memData.virChaNo - 1) / 3);
        } else {
            adjustmentArr_1 = 1;
            //判斷哪一個人物
            adjustmentArr_2 = Math.floor(((memData.virChaNo - 18) - 1) / 3);
        }

        adjustmentArr_3 = memData.virChaNo % 3 == 0 ? 2 : (memData.virChaNo % 3 - 1);
        //設定cookie
        document.cookie = 'adjustmentArr=' + adjustmentArr_1 + ',' + adjustmentArr_2 + ',' + adjustmentArr_3;
        //陣列指定
        cookie_adjustmentArr[0] = adjustmentArr_1;
        cookie_adjustmentArr[1] = adjustmentArr_2;
        cookie_adjustmentArr[2] = adjustmentArr_3;
        ChangeCookieImg();
    } catch (error) {
        // console.log(error);
        memChange(true);
        // location.href = "login.html";
    }
}

//收藏
function collect() {
    collect_bouncing.style.display = "block"

    let Status = '0';
    $.ajax({
        type: 'POST',
        url: 'php/getCollect3DPage.php',
        data: {
            "Status": Status
        },
        success(res) {
            var arrOrder = JSON.parse(res);
            var showOrder = "";
            for (let i = 0; i < arrOrder.length; i++) {
                showOrder += `
                <section class="commodity" name="${arrOrder[i].favoriteListNumber}">
                    <section class="graphics">
                        <section class="love" name="love_${arrOrder[i].favoriteListNumber}"><i class="bi bi-heart-fill"></i></section>
                        <section class="img"><img src="assets/image/commodity/${arrOrder[i].img}" alt="拍攝商品圖"></section>
                    </section>
                    <section class="bid">
                        <p>${arrOrder[i].productName}</p>
                        <section class="information">
                            <section>
                                <p>$${arrOrder[i].closingPrice}</p>
                            </section>
                            <section class="timeAndButton">
                                <span class="time">剩餘2小時47分17秒</span>
                                <button class="round round3dBtn" type="button"><a href="/CFD104G2/produtFromPhp.html?number=${arrOrder[i].prodNo}">前往商品頁面</a></button>
                            </section>
                        </section>

                    </section>
                </section>`;

            }
            $('.commodityGroup').html(showOrder);
            $('.commodityGroup a').css('color', '#ffffff');
            $('.commodityGroup .bid').css('width', '50%');
            $('.commodityGroup .bi-heart-fill').css('color', '#fff');
            love();
            // $('.commodityGroup').css('width', '300px');
        },
        error(e) {
            console.log('ajax error');
            console.log(e.responseText);
            console.log(e);
        }
    });
}

function love() {
    $('.love').click(function() {
        let Status = '1';
        let favoriteListNumber = $(this).attr('name').split("_")[1];
        $.ajax({
            type: 'POST',
            url: 'php/getCollect3DPage.php',
            data: {
                "Status": Status,
                "favoriteListNumber": favoriteListNumber
            },
            success(res) {
                $('section[name="' + favoriteListNumber + '"]').remove();
            },
            error(e) {
                console.log('ajax error');
                console.log(e.responseText);
                console.log(e);
            }
        });
    });
}

//消費紀錄
function consumptionRecord() {
    consumptionRecord_bouncing.style.display = "block"
    $('#nowOrder3dBtn').click();
}

$('#nowOrder3dBtn').click(function() {
    //按鈕顏色
    $('#nowOrder3dBtn').css("background-color", "#141414");
    $('#nowOrder3dBtn').css("border", "#141414");
    $('#oldOrder3dBtn').css("background-color", "#394897");
    $('#oldOrder3dBtn').css("border", "#394897");

    let orderStatus = "0";
    $.ajax({
        type: 'POST',
        url: 'php/getConsumptionRecord.php',
        data: {
            "orderStatus": orderStatus
        },
        success(res) {
            var arrOrder = JSON.parse(res);
            var showOrder = "";
            for (let i = 0; i < arrOrder.length; i++) {
                showOrder += `
                <section class="record">
                <section class="recordTitle">
                    <p>
                        <span>訂單編號:${arrOrder[i].auctionNo}</span>
                        <span>訂購日期:${formatDateTime(arrOrder[i].creatDate)}</span>
                    </p>
                </section>
                <section class="recordGraphics">
                    <section class="recordGraphicsGraphics">
                        <section class="img"><img src="assets/image/commodity/${arrOrder[i].img}" alt="商品圖"></section>
                        <section class="recordGraphicsOrderlist">
                            <p>${arrOrder[i].productName}</p>
                            <p>數量 : 1</p>
                            <p>訂單狀態 : ${arrOrder[i].orderStatus}</p>
                            <p>物流配送狀態 : 未配送</p>
                            <!-- <p>$3000</p> -->
                        </section>
                    </section>
                    <!-- <section class="recordGraphicsText">
                        <p>$3000</p>
                    </section> -->
                </section>
                <section class="recordFooter">
                    <section>
                        <p>訂單金額:$${arrOrder[i].closingPrice}</p>
                        </section>
                        <!-- <section class="buttonGroup">
                        <button class="round round3dBtn" type="button">按鈕</button>
                        <button class="round round3dBtn" type="button">按鈕</button>
                        </section> -->
                    </section>
                </section>
                <section class="Payment">
                <button class="round round3dBtn" type="button">前往付款頁面</button>
                </section>`
            };
            $('.consumptionRecord_bouncing main').html(showOrder);
            $('.consumptionRecord_bouncing main .img').css('width', '100px');
        },
        error(e) {
            console.log('ajax error');
            console.log(e.responseText);
            console.log(e);
        }
    });
});

$('#oldOrder3dBtn').click(function() {
    //按鈕顏色
    $('#nowOrder3dBtn').css("background-color", "#394897");
    $('#nowOrder3dBtn').css("border", "#394897");
    $('#oldOrder3dBtn').css("background-color", "#141414");
    $('#oldOrder3dBtn').css("border", "#141414");
    let orderStatus = "1";

    $.ajax({
        type: 'POST',
        url: 'php/getConsumptionRecord.php',
        data: {
            "orderStatus": orderStatus
        },
        success(res) {
            var arrOrder = JSON.parse(res);
            var showOrder = "";
            for (let i = 0; i < arrOrder.length; i++) {
                showOrder += `
                <section class="record">
                <section class="recordTitle">
                    <p>
                        <span>訂單編號:${arrOrder[i].auctionNo}</span>
                        <span>訂購日期:${formatDateTime(arrOrder[i].creatDate)}</span>
                    </p>
                </section>
                <section class="recordGraphics">
                    <section class="recordGraphicsGraphics">
                        <section class="img"><img src="assets/image/commodity/${arrOrder[i].img}" alt="商品圖"></section>
                        <section class="recordGraphicsOrderlist">
                            <p>${arrOrder[i].productName}</p>
                            <p>數量 : 1</p>
                            <p>訂單狀態 : ${arrOrder[i].orderStatus}</p>
                            <p>物流配送狀態 : 已配送</p>
                            <!-- <p>$3000</p> -->
                        </section>
                    </section>
                    <!-- <section class="recordGraphicsText">
                        <p>$3000</p>
                    </section> -->
                </section>
                <section class="recordFooter">
                    <section>
                        <p>訂單金額:$${arrOrder[i].closingPrice}</p>
                    </section>
                    <!-- <section class="buttonGroup">
                        <button class="round round3dBtn" type="button">按鈕</button>
                        <button class="round round3dBtn" type="button">按鈕</button>
                    </section> -->
                </section>
            </section>`
            };
            $('.consumptionRecord_bouncing main').html(showOrder);
            $('.consumptionRecord_bouncing main .img').css('width', '100px');
        },
        error(e) {
            console.log('ajax error');
            console.log(e.responseText);
            console.log(e);
        }
    });
});

//客製化人物
function customCharacter() {
    customCharacter_bouncing.style.display = "block"
    getaccountManagement();
}
//我的上架
function myListing() {
    myListing_bouncing.style.display = "block"

    $.ajax({
        type: 'POST',
        url: 'php/getMyListing.php',
        data: {},
        success(res) {
            var arrOrder = JSON.parse(res);
            var showOrder = "";
            for (let i = 0; i < arrOrder.length; i++) {
                showOrder += `
                <section class="commodity">
                <section class="graphics">
                    <!-- <section class="love"><i class="bi bi-heart"></i> <span>75</span></section> -->
                    <section class="img"><img src="assets/image/commodity/${arrOrder[i].img}" alt="拍攝商品圖"></section>
                </section>
                <section class="bid">
                    <p>${arrOrder[i].productName}</p>
                    <section class="information">
                        <section>
                            <p>$${arrOrder[i].closingPrice}</p>
                        </section>
                        <section class="timeAndButton">
                            <span class="time">剩餘2小時47分17秒</span>
                            <button class="round round3dBtn" type="button"><a href="/CFD104G2/produtFromPhp.html?number=${arrOrder[i].prodNo}">前往商品頁面</a></button>
                        </section>
                    </section>
                </section>
            </section>`;

            }
            $('.commodityGroup').html(showOrder);
            $('.commodityGroup .img').css('width', '300px');
            $('.commodityGroup a').css('color', '#ffffff');
            $('.bid').css('width', '50%');
        },
        error(e) {
            console.log('ajax error');
            console.log(e.responseText);
            console.log(e);
        }
    });
}

closes3D[0].onclick = function(e) {
    bouncingBox[0].style.display = "none"
}
closes3D[1].onclick = function(e) {
    bouncingBox[1].style.display = "none"
}
closes3D[2].onclick = function(e) {
    bouncingBox[2].style.display = "none"
}
closes3D[3].onclick = function(e) {
    bouncingBox[3].style.display = "none"
}
closes3D[4].onclick = function(e) {
        bouncingBox[4].style.display = "none"
    }
    //導覽列
    // const navButtonClick_button = document.querySelector(".navButtonClick_button");
    // const bouncingBox_bouncing = document.querySelector(".bouncingBox_bouncing");
    // bouncingBox_bouncing.style.display = "none"
    // navButtonClick_button.onclick = function(e) {
    //     if (bouncingBox_bouncing.style.display == "none") {
    //         bouncingBox_bouncing.style.display = "flex"
    //     } else {
    //         bouncingBox_bouncing.style.display = "none"
    //     }
    // }

/* 提示視窗 */
const promptWindow_main = document.querySelector(".promptWindow-main");
const promptWindow = document.querySelector(".promptWindow");
promptWindow_main.onmouseover = function() {
    promptWindow.style.display = "block"
}
promptWindow_main.onmouseleave = function() {
    promptWindow.style.display = "none"
}

/* 格式化時間 */

function formatDateTime(current_datetime) {
    var datetime = new Date(current_datetime);
    let formatted_date = datetime.getFullYear() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getDate();
    return formatted_date;

}