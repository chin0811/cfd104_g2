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


// 點擊卡片製換書本
window.onload = function(){
    initAbout();
};
function initAbout(){
    aboutMe =  document.querySelector("#aboutMe");
    aboutMe.addEventListener("click", function(){switchCard(1)},false);
    aboutMeBook = document.querySelector("#aboutMeBook");

    rule =  document.querySelector("#rule");
    rule.addEventListener("click", function(){switchCard(2)},false);
    ruleBook = document.querySelector("#ruleBook");

    buyer =  document.querySelector("#buyer");
    buyer.addEventListener("click", function(){switchCard(3)},false);
    buyerBook = document.querySelector("#buyerBook");

    seller =  document.querySelector("#seller");
    seller.addEventListener("click", function(){switchCard(4)},false);
    sellerBook = document.querySelector("#sellerBook");

    contact =  document.querySelector("#contact");
    contact.addEventListener("click", function(){switchCard(5)},false);
    contactBook = document.querySelector("#contactBook");

    cooperate =  document.querySelector("#cooperate");
    cooperate.addEventListener("click", function(){switchCard(6)},false);
    cooperateBook = document.querySelector("#cooperateBook");

    // 功能
    function switchCard(i){
        if(i==1){
            aboutMeBook.classList.toggle("displayNone");
            ruleBook.classList.add("displayNone");
            buyerBook.classList.add("displayNone");
            sellerBook.classList.add("displayNone");
            contactBook.classList.add("displayNone");
            cooperateBook.classList.add("displayNone");
        }else if(i==2){
            ruleBook.classList.toggle("displayNone");
            aboutMeBook.classList.add("displayNone");
            buyerBook.classList.add("displayNone");
            sellerBook.classList.add("displayNone");
            contactBook.classList.add("displayNone");
            cooperateBook.classList.add("displayNone");
        }else if(i==3){
            buyerBook.classList.toggle("displayNone");
            aboutMeBook.classList.add("displayNone");
            ruleBook.classList.add("displayNone");
            sellerBook.classList.add("displayNone");
            contactBook.classList.add("displayNone");
            cooperateBook.classList.add("displayNone");
        }else if(i==4){
            sellerBook.classList.toggle("displayNone");
            aboutMeBook.classList.add("displayNone");
            ruleBook.classList.add("displayNone");
            buyerBook.classList.add("displayNone");
            contactBook.classList.add("displayNone");
            cooperateBook.classList.add("displayNone");
        }else if(i==5){
            contactBook.classList.toggle("displayNone");
            aboutMeBook.classList.add("displayNone");
            ruleBook.classList.add("displayNone");
            buyerBook.classList.add("displayNone");
            sellerBook.classList.add("displayNone");
            cooperateBook.classList.add("displayNone");
        }else if(i==6){
            cooperateBook.classList.toggle("displayNone");
            aboutMeBook.classList.add("displayNone");
            ruleBook.classList.add("displayNone");
            buyerBook.classList.add("displayNone");
            sellerBook.classList.add("displayNone");
            contactBook.classList.add("displayNone");
        }
    }
}