$(document).ready(function(){
    $(".hamburger").on("click", () => {
        $(".mainMenu").toggleClass("active").removeClass("reverse_anim");
      });
      
      $(".close").on("click", () => {
        $(".mainMenu").toggleClass("reverse_anim").removeClass("active");
      });
});

window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop>300){
      document.querySelector("header").style.top="-100px";
  }else{
      document.querySelector("header").style.top="0px";
  }

  // if(document.documentElement.scrollTop>300){ document.getElementById("header").classList.add("smallPanel");
  // }
  // else{ document.getElementById("header").classList.remove("smallPanel");
  // }
})