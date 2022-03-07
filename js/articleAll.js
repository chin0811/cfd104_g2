function init(){
    let now=document.querySelector('.subTitle h2')
    
    let dt = new Date();
    // 取得年份
    let year=dt.getFullYear();


    // 取得月份
    let month=dt.getMonth()+1;
    // 轉換月份變英文
    let monthNamesEn = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let finalMonth = monthNamesEn[month];


    // 取得日期
    let date=dt.getDate();

    switch(date){
        case "0"://1
            date=date+"st";
            break;
        case "1"://2
            date=date+"nd";
            break;
        case "2"://3
            date=date+"rd";
            break;
        case "20"://21
            date=date+"st";
            break;
        case "21"://22
            date=date+"nd";
            break;
        case "22"://23
            date=date+"rd";
            break;
        case "30"://31
            date=date+"st";
            break;
        default:
            date=date+"th"
    };

    // 取得星期幾
    let day=dt.getDay();
    // 轉換星期幾變英文
    let dayNamesEn = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let finalDay = dayNamesEn[day];
    

    now.innerHTML=`${finalDay},${date} ${finalMonth} ${year}`;
};
window.addEventListener("load",init);