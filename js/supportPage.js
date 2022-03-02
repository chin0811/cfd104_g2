let scrollsupport = 0;
let supportApp ;
window.addEventListener('load',function(){
    supportApp = document.querySelector("#supportApp");
    
    
window.addEventListener("scroll",function(){
    if(supportApp.classList != "active"){   //修正客服打開不隱藏
        if(this.scrollY > scrollsupport){
            supportApp.style.right="-60px";
        }else{
            supportApp.style.right="";
        }
        scrollsupport = this.scrollY;
    }else{
        supportApp.style.right="";
    }
    
  
  
  })
  
})