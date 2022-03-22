
let memData;
let loginBtn;

async function memChange(select) {
    if (memData) {
        loginBtn.innerText = await "登出";
        document.querySelector('.adminBox .name p').innerHTML = memData.adminName;

    } else if (select) {
        alert('請登入');
        location.href = "backLogin.html";
    }
}
async function amiCheck(select) {
    let url = 'php/backLoginCheck.php';
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

function backLoginCheck(select) {
    amiCheck(select);
}
window.addEventListener('load', function() {
        loginBtn = document.querySelector('.loginOut');
        loginBtn.addEventListener('click', function() {
            fetch('php/logout.php').then(function(response) { location.reload(); })
            location = "backLogin.html"
        })
    })
    // window.addEventListener('load',function(){
    //     loginBtn = document.querySelector('header .login a:first-of-type');


// })