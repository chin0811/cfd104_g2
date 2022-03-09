let bounceDoll = new Vue({
    el: '#bounceDoll',
    data: {       
        selectArt:false,
        xPos: 0,
        yPos: 0,
    },
    methods: {  
        move(){
            this.selectArt = !this.selectArt
            if(this.selectArt){
                document.querySelector('.bounce').style.animation = "none";
                document.querySelector('.bounceA').style.animation = "none";
            }else{
                document.querySelector('.bounce').style.animation = "";
                document.querySelector('.bounceA').style.animation = "";
            }
        },
        updateCoordinates(event){
            this.xPos = event.clientX;
            this.yPos = event.clientY;
            document.querySelector('.bounce').style.transform = `translatex(${this.xPos - 150 }px)`;
            document.querySelector('.bounceA').style.transform = `translatey(${this.yPos - 150 }px)`;
        }
    },
});