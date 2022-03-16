// function memCheck(){
//     let data ;
//     fetch('php/loginCheck.php')  
//     .then(function(response) {
//         return response.json();
//       })
//       .then(function(myJson) {
//         data = myJson;
//       });
//       return data;
// }
// let memDataTmp;
let memData;
let loginBtn;
// fetch('php/logout.php').then(function(response) {location.reload(); })
async function memChange(select){
    if(memData){
        loginBtn.innerText = await "登出";
    }else if(select){
        alert('請登入')
        location = "login.html"
    }
}
async function memCheck(select) {
    let url = 'php/loginCheck.php';
    try {
        let res = await fetch(url);
        // return await res.json();
        memData = await res.json();
        memChange(select);
    } catch (error) {
        // console.log(error);
        memChange(select);
    }
}
function loginCheck(select){
    memCheck(select);
}
window.addEventListener('load',function(){
    loginBtn = document.querySelector('header .login a:first-of-type');
    
    loginBtn.addEventListener('click',function(){
        if(loginBtn.innerText == "登入"){
            location = "login.html"
        }else if(loginBtn.innerText == "登出"){
            fetch('php/logout.php').then(function(response){location.reload();})
        }
    })
})
// window.addEventListener('load',function(){
//     loginBtn = document.querySelector('header .login a:first-of-type');

    
// })