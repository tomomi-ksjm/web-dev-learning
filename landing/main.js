'use Strict';

/************************************************* */
/* ハンバーガーメニュー の処理                           */
/************************************************* */

const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.getElementById("nav");
const links = document.querySelectorAll("#nav a");

/* ハンバーガーメニューがclickされたらnavとtoggleボタンにopenクラスをつけ外しする */
toggleBtn.addEventListener("click",function(){
    setOpenClass();

})
/* メニュー内のリンクが押されたら　navとtoggleボタンからopenクラスを外す　*/
links.forEach((e) => {
    e.addEventListener("click",() => {
        setOpenClass();
    }
    )

});

/* navとtoggleボタンにopenクラスをつけ外しする関数 */
function setOpenClass() {
    toggleBtn.classList.toggle('open');
    /* toogle-btn  にopen がついていたらnavにもつけて　ついてなかったらはずず*/
    toggleBtn.classList.contains('open') 
     ?  nav.classList.add('open') 
     : nav.classList.remove('open');

}

/*****************************************************/
/* scrollして対象の要素を表示する処理　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 */
/*****************************************************/

/* 対象の要素をクラス名で選択　　　以下のクラスのどちらかがついていれば対象 */ 
// slide : 選ばれる理由が左右から出てくる　
// interview : interview内容が現れる
const items = document.querySelectorAll(".slide, .interview");

/* 監視対象のクラスとaddするクラスのマッピング */
const classMapping = {
    'slide-left-in':'exe-slide-left-in',
    'slide-right-in': 'exe-slide-right-in',
    'interview':'popup-interview'
}

/*Intersection Observer API　option */
const observerOptions = {
    root:null,   /*ブラウザのviewportが対象  */
    rootMargin: '0px',
    threshhold: 0.05 /* ターゲットが5%見えたら閾値を超えたと判定* */

}

/* 5%見えた時に呼び出される関数*/
/*  callback関数の引数は、 IntersectionObserverEntryオブジェクトのリストとobserver object*/
const observerCallback = (entries,observer) => {
    entries.forEach(entry => {
        // 対象要素が見えてきたか？
        if (entry.isIntersecting) {
            const element = entry.target;  /*交差したエレメントを受け取る */
            /* クラスマッピングから今回交差したエレメントについているクラス名を探す */
            Object.keys(classMapping).forEach(key => {
                /*add するクラス名を特定する */
                if (element.classList.contains(key)) {
                    element.classList.add(classMapping[key]);
                }
            });
        }
    })
};

/* callback関数とoptionを指定してInterSectionObserverを作成 */
const observer = new IntersectionObserver(observerCallback, observerOptions);

/* 監視対象のリストから一つずつ監視対象に追加する */
items.forEach(item => observer.observe(item));

// /*画面の高さの９５％のところに要素が達したら現れる処理を実施するクラスを追加*/
// const checkVisibility = () => {
//     const triggerBottom = window.innerHeight * 0.95;
//     items.forEach(item => {
//         const elementTop = item.getBoundingClientRect().top;
//         if (elementTop < triggerBottom) {
//             // mappingのkeyに対象のクラスがあったら対応する値をクラスとして追加
//             Object.keys(classMapping).forEach(key => {
//                 if (item.classList.contains(key)) {
//                     item.classList.add(classMapping[key]);
//                 }
//             })
            
//         }
//     })
// }

// /* scrollするたびにイベント発生 */
// document.addEventListener('scroll',checkVisibility);
