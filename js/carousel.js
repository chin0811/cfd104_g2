$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,  //循環
        margin:0,
        responsiveClass:true,
        autoplay: false,
        autoplayTimeout:3500,
        autoplayHoverPause:true,
        center: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1, //手機1個
                nav:true,
                loop:true,
            },
            768:{
                items:1,//平板3個
                nav:true,
                loop:true,
            },
            1200:{
                items:1,
                nav:true,
                loop:true,
            }
        }
    });
});