// Create viewer
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    //背景圖
    "panorama": "assets/image/3dSurroundView.jpg",
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
            "pitch": 25,
            "yaw": 160,
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
        "pitch": 25,
        "yaw": 160,
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
}
//收藏
function collect() {
    collect_bouncing.style.display = "block"
}
//消費紀錄
function consumptionRecord() {
    consumptionRecord_bouncing.style.display = "block"
}
//客製化人物
function customCharacter() {
    customCharacter_bouncing.style.display = "block"
}
//我的上架
function myListing() {
    myListing_bouncing.style.display = "block"
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