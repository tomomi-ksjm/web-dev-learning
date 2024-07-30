// トグルボタンの要素
const togglebtn = document.querySelector('.toggle-btn');
// トグルメニューがクリックされた時に表示されるマスク画面の要素
const mask = document.getElementById("mask");
// トグルメニューがクリックされた時に表示されるメニュー画面の要素
const nav = document.getElementById("nav");

//トグルボタンをクリックした時の処理
togglebtn.addEventListener('click',function(){
    togglebtn.classList.toggle("open");
    mask.classList.toggle("open");
    nav.classList.toggle("open");
})