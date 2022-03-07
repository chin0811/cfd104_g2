$(document).ready(function(){
    // 展開留言
    $(".articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .commentPic").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
    });
    // 展開留言滑到最上面
    $(".articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .commentPic").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    // 關閉留言
    $(".articlePageContent .articlePageWrap .commentArea .commentClose").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });
    // 加入收藏
    $('.like .pic img').click(function(e){
        $(this).toggleClass('active');
    });
});




