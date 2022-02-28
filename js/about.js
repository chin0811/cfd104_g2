// OwlCarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3 
        },
        1000:{
            items:3
        }
    }
})
//vanilla-tilt.js
VanillaTilt.init(document.querySelectorAll(".introduceCard"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare":1,
});

// flip book
const pages = document.getElementsByClassName("page");
for( var i=0; i<pages.length; i++){
    var page = pages[i]
    if( i%2 === 0 ){
        page.style.zIndex = ( pages.length - i );
    }
}
document.addEventListener("DOMContentLoaded",function(){
    for( var i=0; i<pages.length; i++ ){
        pages[i].pageNum = i + 1;
        pages[i].onclick = function(){
            if(this.pageNum % 2 === 0){
                this.classList.remove("flipped");
                this.previousElementSibling.classList.remove("flipped");
            }else{
                this.classList.add("flipped");
                this.nextElementSibling.classList.add("flipped");
            }
        }
    }
})