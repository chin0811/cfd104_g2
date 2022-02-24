$(document).ready(function(){
    $(".articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .pic:last-child").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
    });
    $(".articlePageContent .articlePageWrap .commentArea .commentClose").click(function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });
});