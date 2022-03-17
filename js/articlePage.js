
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
    
})