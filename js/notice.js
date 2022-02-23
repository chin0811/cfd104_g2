const notice = document.querySelector('.notice');
const noticeContain = document.querySelector('.noticeContain');
const noticeContain_all = document.querySelector('.noticeContain_all');
const noticeContain_unread = document.querySelector('.noticeContain_unread');
const button＿all = document.querySelector('.button＿all');
const button_unread = document.querySelector('.button_unread');
const notice_dot = document.querySelector('.notice_dot');
const notice_dotNumber = document.querySelector('.notice_dotNumber');
const noticeContain_unreadMessage = document.querySelectorAll('.noticeContain_unread .noticeContain_message');

// 點擊鈴鐺通知按紐 開關通知欄位
function noticeShow(){
  if( noticeContain.style.display == 'block' ){
    noticeContain.style.display = 'none';
    notice.style.background = '#eee';
    notice.style.color = '#000';
  }else{
    noticeContain.style.display = 'block';
    notice.style.background = '#0D6EFD';
    notice.style.color = '#fff';
  }
}

// 點擊全部按紐 開啟全部欄位
function allShow(){
  noticeContain_unread.style.display = 'none';
  noticeContain_all.style.display = 'block';
  button_unread.style.background = '#6c757d';
  button＿all.style.background = '#0D6EFD';
}
// 點擊未讀按紐 開啟未讀欄位
function unreadShow(){
  noticeContain_all.style.display = 'none';
  noticeContain_unread.style.display = 'block';
  button＿all.style.background = '#6c757d';
  button_unread.style.background = '#0D6EFD';
}

// 紅點
function newMessage(){
  // 偵測是否有未讀訊息，有的話加上 data-new 屬性
  if( noticeContain_unreadMessage.length > 0 ){
    notice_dot.setAttribute("data-new","ture");
  }else{
    notice_dot.removeAttribute("data-new");
  }
  // 檢查是否有 data-new 屬性，有的話開啟通知紅點
  if( notice_dot.hasAttribute("data-new") ){
      notice_dot.style.display = 'block';
      notice_dotNumber.textContent = noticeContain_unreadMessage.length;
      if( noticeContain_unreadMessage.length > 99 ){
        notice_dotNumber.textContent = '99+';
      }
  }else{
      notice_dot.style.display = 'none';
  }
}
window.setInterval("newMessage()",1);