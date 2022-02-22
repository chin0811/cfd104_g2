$(document).ready(function(){
    $(".hamburger").on("click", () => {
        $(".mainMenu").toggleClass("active").removeClass("reverse_anim");
      });
      
      $(".close").on("click", () => {
        $(".mainMenu").toggleClass("reverse_anim").removeClass("active");
      });
});