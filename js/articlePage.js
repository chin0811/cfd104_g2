
window.addEventListener('load',function(){
    // 關閉留言
    document.querySelector(".articlePageContent .articlePageWrap .commentArea .commentClose").addEventListener('click',function(){
        $(".articlePageContent .articlePageWrap .commentArea").removeClass("slideIn");
    });

    // 留言滑到最上面
    document.querySelector('.articlePageContent .articlePageWrap .pageContent .shareBar .shareComment .commentPic').addEventListener('click',function(){
        $(".articlePageContent .articlePageWrap .commentArea").toggleClass("slideIn");
        $("html, body").animate({ scrollTop: 0 }, "slow");

    });
    // 加入收藏
    document.querySelector('.like .pic img').addEventListener('click',function(){
        $(this).toggleClass('active');
        // alert(articlePage.discusArt.likes);
        // if(this.classList == 'active'){
        //     articlePage.discusArt.likes=articlePage.discusArt.likes+1
        // }else{
        //     articlePage.discusArt.likes=articlePage.discusArt.likes-1
        // };
    });
    // 檢舉
    // document.querySelector('.articlePageContent .authorShortIntro .report').addEventListener('click',function(){
    //     // alert('');
    //     swal({
    //         title: "您是否要檢舉？",
    //         icon: 'assets/image/articlePage_authorShortIntro_exclamation.png',
    //         buttons: {
    //             // 取消按鈕
    //             Cancel: {
    //                 text: "取消",
    //                 value: null,
    //                 // 新增class
    //                 className:'cancel',
    //             },
    //             // 檢舉按鈕
    //             report: {
    //                 text: "檢舉",
    //                 value: '檢舉',
    //                 // 新增class
    //                 className:'report',
    //             },  
    //         }
    //         // 如果按鈕值是report，則會有下一個跳窗
    //     }).then((value)=>{
    //         if(value == '檢舉'){
    //             // alert('');
    //             console.log(memData);
    //             $.ajax({
    //                 type: 'POST',
    //                 url: '../php/articlePageReportSend.php',
    //                 data: {
    //                     Report:value,
    //                 },
    //                 success: function(data) {
    //                     console.log(data);
    //                     console.log("成功了嗎?");
    //                 },
    //                 error: function() {
    //                     console.log('ajax error');
    //                     console.log(value);
    //                 }
    //             });
    //             swal({
    //                 text: "感謝您的檢舉，平台會審核內容。",
    //                 buttons:{
    //                     goBack: {
    //                         text: "返回",
    //                         className:'goBack',
    //                     }
    //                 },
    //                 // 跳回文章總覽
    //             }).then(function() {
    //                 // window.location = "articleAll.html";
    //             });
    //         }
    //     });
    // });
})