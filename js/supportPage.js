scrollsupport = 0;
window.addEventListener('load',function(){
    
window.addEventListener("scroll",function(){
    // if(document.documentElement.scrollTop>300){
    //     document.querySelector("header").style.top="-100px";
    // }else{
    //     document.querySelector("header").style.top="0px";
    // }
    if(this.scrollY > scrollsupport){
        document.querySelector("#supportApp").style.right="-60px";
    }else{
        document.querySelector("#supportApp").style.right="";
        
    }
    // scrollold = this.scrollY;
    scrollsupport = this.scrollY;
    // console.log(window.scrollY)
    // console.log(scrollold)
    // console.log(this.scrollY)
  
  
  })
  
})