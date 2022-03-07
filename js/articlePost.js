// file input要先產生load事件
function init(){
    // 註冊input image change事件
    let image = document.getElementById('articlePic');
    image.addEventListener('change',imgChange);
}

function imgChange(){
    //files是屬性方法，一定是複數語法，
    let file = document.getElementById('articlePic').files[0];// 然後這裡只要第一筆資料

    
    // 定義fileReader
    let readfile = new FileReader();
    readfile.readAsDataURL(file);
    // 定義放置照片的容器
    let imageSelect = document.getElementById('articlePicSelect');
    // 再發生一次load事件
    readfile.addEventListener('load',function(){
        imageSelect.src = readfile.result;
    });
    
    // 隱藏input的圖片
    let inputPicNone = document.querySelector('.articlePostContent .articleEdit label[for=articlePic] .pic');
    inputPicNone.setAttribute("class","displayNone");
};

window.addEventListener("load",init);
