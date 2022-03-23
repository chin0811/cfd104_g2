// function init(){
//     // 開啟留言窗並上滑
//     document.querySelector('.articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .commentPic').addEventListener('click',openComment);
//     // 關閉留言窗
//     document.querySelector(".articlePageContent .articlePageWrap .commentArea .commentClose").addEventListener('click',closeComment);
//     // 加入收藏
//     document.querySelector('.like .pic img').addEventListener('click',myLike);
// };
// // 開啟留言窗並上滑
// function closeComment(){
//     document.querySelector(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
// };
// // 關閉留言窗
// function openComment(){
//     document.querySelector(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
//     document.querySelector("html, body").animate({ scrollTop: 0 }, "slow");
// };
// function myLike(e){
//     e.target.toggleClass('active');
// }



window.addEventListener('load',function(){
    // 關閉留言
    document.querySelector(".articlePageContent .articlePageWrap .commentArea .commentClose").addEventListener('click',function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });

    // 留言滑到最上面
    document.querySelector('.articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .commentPic').addEventListener('click',function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    // 加入收藏
    document.querySelector('.like .pic img').addEventListener('click',function(){
        $(this).toggleClass('active');
    });
    
});
// window.addEventListener("load",init);
