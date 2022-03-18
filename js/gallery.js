$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed:1000,
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    })
});

//  取得螢幕寬度
var windowWidth = window.innerWidth;

// 步驟圖片的陣列
let instructionPC = [
    'assets/image/instruction_1.gif','assets/image/instruction_3.gif','assets/image/instruction_2.gif'
];
let instructionRWD = [
    'assets/image/instruction_5.gif','assets/image/instruction_4.gif'
];


// if(windowWidth >= 768){
//         let instructionImg =  document.querySelectorAll('.galleryHint .owl-carousel div img');
//         for(i=0; i<instructionPC.length; i++){
//             instructionImg[i].src = instructionPC[i];
//             console.log(instructionImg[i].src);
//         }
// }else{
//         let instructionImg =  document.querySelectorAll('.galleryHint .owl-carousel div img');
//         for(i=0; i<instructionRWD.length; i++){
//             instructionImg[i].src = instructionRWD[i];
//         }
// }

let instructionImg =  document.querySelector('.galleryHint .owl-carousel ');
    if(windowWidth >= 768){
            for(i=0; i<instructionPC.length; i++){
                let newDiv = document.createElement("div");
                let newImg = document.createElement("img");
                newImg.src = instructionPC[i];
                newDiv.appendChild(newImg);
                instructionImg.appendChild(newDiv);
            }
    }else{
            for(i=0; i<instructionRWD.length; i++){
                let newDiv = document.createElement("div");
                let newImg = document.createElement("img");
                newImg.src = instructionRWD[i];
                newDiv.appendChild(newImg);
                instructionImg.appendChild(newDiv);
            }
    }