$(document).ready(function(){
    $(".articlePageContent .articlePageWrap .page .shareBar .pic:first-child").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
    });
    $(".articlePageContent .articlePageWrap .commentArea .commentClose").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });
});