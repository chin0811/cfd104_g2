let scrollold = 0;
$(document).ready(function(){
    $(".hamburger").on("click", () => {
        $(".mainMenu").toggleClass("active").removeClass("reverse_anim");
        $("header .hamburger").toggleClass("displayNone");
        $("header .noticeHeader").toggleClass("none");
      });
      
      $(".close").on("click", () => {
        $(".mainMenu").toggleClass("reverse_anim").removeClass("active");
        $("header .hamburger").toggleClass("displayNone");
        $("header .noticeHeader").toggleClass("none");
      });
});

window.addEventListener("scroll",function(){
  // if(document.documentElement.scrollTop>300){
  //     document.querySelector("header").style.top="-100px";
  // }else{
  //     document.querySelector("header").style.top="0px";
  // }
  if(this.scrollY > scrollold){
      document.querySelector("header").style.top="-100px";
  }else{
      document.querySelector("header").style.top="0px";
  }
  // scrollold = this.scrollY;
  scrollold = this.scrollY;
  // console.log(window.scrollY)
  // console.log(this.scrollY)


})

