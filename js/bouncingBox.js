/*
const bouncingButton = document.querySelector(".bouncingButton");
const bouncingBoxFlex = document.querySelector('.bouncingBoxFlex');
*/
const bouncingBox = document.querySelectorAll(".bouncingBox");
const closes3D = document.querySelectorAll(".close3D");

for (let i = 0; 3 > i; i++) {
    bouncingBox[i].style.display = "none"
}


/*
bouncingButton.onclick = function(e){
    bouncingBox.style.display = "block"
    bouncingBoxFlex.style.display = "flex"
}
*/
closes3D[0].onclick = function(e) {
    bouncingBox[0].style.display = "none"
}
closes3D[1].onclick = function(e) {
    bouncingBox[1].style.display = "none"
}