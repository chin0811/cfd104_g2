$(document).ready(function(){
    // 展開留言
    $(".articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .pic:last-child").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
    });
    // 展開留言滑到最上面
    $(".articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .pic:last-child").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    // 關閉留言
    $(".articlePageContent .articlePageWrap .commentArea .commentClose").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });
});
