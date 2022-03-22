// OwlCarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    lazyLoad:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
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
    // aboutMe =  document.querySelector("#aboutMe");
    // aboutMe.addEventListener("click", function(){switchCard(1)},false);
    // aboutMeBook = document.querySelector("#aboutMeBook");

    // rule =  document.querySelector("#rule");
    // rule.addEventListener("click", function(){switchCard(2)},false);
    // ruleBook = document.querySelector("#ruleBook");

    // buyer =  document.querySelector("#buyer");
    // buyer.addEventListener("click", function(){switchCard(3)},false);
    // buyerBook = document.querySelector("#buyerBook");

    // seller =  document.querySelector("#seller");
    // seller.addEventListener("click", function(){switchCard(4)},false);
    // sellerBook = document.querySelector("#sellerBook");

    // contact =  document.querySelector("#contact");
    // contact.addEventListener("click", function(){switchCard(5)},false);
    // contactBook = document.querySelector("#contactBook");

    // cooperate =  document.querySelector("#cooperate");
    // cooperate.addEventListener("click", function(){switchCard(6)},false);
    // cooperateBook = document.querySelector("#cooperateBook");

    // aboutMePC =  document.querySelector("#aboutMePC");
    // aboutMePC.addEventListener("click", function(){switchCard(1)},false);
    // aboutMeBook = document.querySelector("#aboutMeBook");

    // rulePC =  document.querySelector("#rulePC");
    // rulePC.addEventListener("click", function(){switchCard(2)},false);
    // ruleBook = document.querySelector("#ruleBook");

    // buyerPC =  document.querySelector("#buyerPC");
    // buyerPC.addEventListener("click", function(){switchCard(3)},false);
    // buyerBook = document.querySelector("#buyerBook");

    // sellerPC =  document.querySelector("#sellerPC");
    // sellerPC.addEventListener("click", function(){switchCard(4)},false);
    // sellerBook = document.querySelector("#sellerBook");

    // contactPC =  document.querySelector("#contactPC");
    // contactPC.addEventListener("click", function(){switchCard(5)},false);
    // contactBook = document.querySelector("#contactBook");

    // cooperatePC =  document.querySelector("#cooperatePC");
    // cooperatePC.addEventListener("click", function(){switchCard(6)},false);
    // cooperateBook = document.querySelector("#cooperateBook");

    // document.querySelector('.owl-next').addEventListener('click',function(){
    //     initPhoneCard()
    //     console.log('AAA')
    // })
    // document.querySelector('.owl-prev').addEventListener('click',function(){
    //     initPhoneCard()
    //     console.log('AAA')
    // })


    //書 Book 
    aboutMeBook = document.querySelector("#aboutMeBook");
    ruleBook = document.querySelector("#ruleBook");
    buyerBook = document.querySelector("#buyerBook");
    sellerBook = document.querySelector("#sellerBook");
    contactBook = document.querySelector("#contactBook");
    cooperateBook = document.querySelector("#cooperateBook");


    //手機 Card
    //owl-carousel架構 需註冊Card 變多
    aboutMe =  document.querySelectorAll("#aboutMe");
    aboutMe.forEach(e => {
        e.addEventListener("click", function(){switchCard(1)},false);
    });

    rule =  document.querySelectorAll("#rule");
    rule.forEach(e => {
        e.addEventListener("click", function(){switchCard(2)},false);
    });

    buyer =  document.querySelectorAll("#buyer");
    buyer.forEach(e => {
        e.addEventListener("click", function(){switchCard(3)},false);
    });

    seller =  document.querySelectorAll("#seller");
    seller.forEach(e => {
        e.addEventListener("click", function(){switchCard(4)},false);
    });

    contact =  document.querySelectorAll("#contact");
    contact.forEach(e => {
        e.addEventListener("click", function(){switchCard(5)},false);
    });

    cooperate =  document.querySelectorAll("#cooperate");
    cooperate.forEach(e => {
        e.addEventListener("click", function(){switchCard(6)},false);
    });
 
    //桌機 Card 
    aboutMePC =  document.querySelector("#aboutMePC");
    aboutMePC.addEventListener("click", function(){switchCard(1)},false);

    rulePC =  document.querySelector("#rulePC");
    rulePC.addEventListener("click", function(){switchCard(2)},false);

    buyerPC =  document.querySelector("#buyerPC");
    buyerPC.addEventListener("click", function(){switchCard(3)},false);

    sellerPC =  document.querySelector("#sellerPC");
    sellerPC.addEventListener("click", function(){switchCard(4)},false);

    contactPC =  document.querySelector("#contactPC");
    contactPC.addEventListener("click", function(){switchCard(5)},false);

    cooperatePC =  document.querySelector("#cooperatePC");
    cooperatePC.addEventListener("click", function(){switchCard(6)},false);

}

function switchCard(i){
    if(i==1){
        aboutMeBook.classList.toggle("displayNone");
        ruleBook.classList.add("displayNone");
        buyerBook.classList.add("displayNone");
        sellerBook.classList.add("displayNone");
        contactBook.classList.add("displayNone");
        cooperateBook.classList.add("displayNone");
        scrollView(aboutMeBook)
        // if(!aboutMeBook.classList.contains("displayNone")){
        //     setTimeout(function(){
        //         aboutMeBook.scrollIntoView({ behavior: 'smooth' });
        //     },100);
        // };
        // window.scroll({ top: 600, left: 0, behavior: 'smooth' });
        // if(aboutMeBook.classList.indexOf("displayNone") == -1){
        //     aboutMeBook.scrollIntoView({ behavior: 'smooth' });
        // }
    }else if(i==2){
        ruleBook.classList.toggle("displayNone");
        aboutMeBook.classList.add("displayNone");
        buyerBook.classList.add("displayNone");
        sellerBook.classList.add("displayNone");
        contactBook.classList.add("displayNone");
        cooperateBook.classList.add("displayNone");
        scrollView(ruleBook);
    }else if(i==3){
        buyerBook.classList.toggle("displayNone");
        aboutMeBook.classList.add("displayNone");
        ruleBook.classList.add("displayNone");
        sellerBook.classList.add("displayNone");
        contactBook.classList.add("displayNone");
        cooperateBook.classList.add("displayNone");
        scrollView(buyerBook);
    }else if(i==4){
        sellerBook.classList.toggle("displayNone");
        aboutMeBook.classList.add("displayNone");
        ruleBook.classList.add("displayNone");
        buyerBook.classList.add("displayNone");
        contactBook.classList.add("displayNone");
        cooperateBook.classList.add("displayNone");
        scrollView(sellerBook);
    }else if(i==5){
        contactBook.classList.toggle("displayNone");
        aboutMeBook.classList.add("displayNone");
        ruleBook.classList.add("displayNone");
        buyerBook.classList.add("displayNone");
        sellerBook.classList.add("displayNone");
        cooperateBook.classList.add("displayNone");
        scrollView(contactBook);
    }else if(i==6){
        cooperateBook.classList.toggle("displayNone");
        aboutMeBook.classList.add("displayNone");
        ruleBook.classList.add("displayNone");
        buyerBook.classList.add("displayNone");
        sellerBook.classList.add("displayNone");
        contactBook.classList.add("displayNone");;
        scrollView(cooperateBook);
    }
}

function scrollView(obj){
    if(!obj.classList.contains("displayNone")){   //判斷是否有此class
        setTimeout(function(){  //delay 0.1s 等待0.1秒後執行(等畫面出現)
            obj.scrollIntoView({ behavior: 'smooth' });
            // 滑動到物件位置
        },200);
    };
}
// 回到最上方按鈕
myButton = document.getElementById("backToTopBtn");
function topFunction() {
    window.scrollTo({
        // 滾到最上面
        top: 0,
        // 慢慢滾
        behavior: 'smooth',
    });
};
//高度小於400就隱藏按鈕
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 400){
        document.getElementById("backToTop").classList.remove("backToTopNone");
    }else{
        document.getElementById("backToTop").classList.add("backToTopNone");
    }
});
