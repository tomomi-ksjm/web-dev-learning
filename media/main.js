// トグルボタンの要素
const togglebtn = document.querySelector('.toggle-btn');
// トグルメニューがクリックされた時に表示されるマスク画面の要素
const mask = document.getElementById("mask");
// トグルメニューがクリックされた時に表示されるメニュー画面の要素
const nav = document.querySelector('.nav');

//トグルボタンをクリックした時の処理
togglebtn.addEventListener('click',function(){
    togglebtn.classList.toggle("open");
    mask.classList.toggle("open");
    nav.classList.toggle("open");
})

/* Swiperの初期化*/
const mySwiper = new Swiper ('.swiper', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: '1.4', //何枚表示するか

    speed: 2000, // スライドアニメーションのスピード（ミリ秒）
    centeredSlides : true,    //アクティブなスライドを真ん中に持ってくる
    spaceBetween : 30,     //間隔を60pxにする
    breakpoints: {
        //768 px以上の場合
        768:{
            slidesPerView: '3.4',
            spaceBetween :60, //間隔を60pxにする

        }
    },
    //  autoplay: { //自動再生する
    //      delay: 2500, //次のスライドに切り替わるまでの時間
    //    disableOnInteraction: false, //ユーザーが操作したら止めるか
    //    waitForTransition: false, // アニメーションの間にスライドを止めるか
    //  },
    // //ページネーション表示の設定
    // pagination: { 
    //   el: '.swiper-pagination', //ページネーション要素のクラス名
    //   clickable: true, //クリック可能にするか
    //   type: 'bullets', //ページネーションの種類
    // },
   
    // //ナビゲーションボタン（矢印）表示の設定
    // navigation: { 
    //   nextEl: '.swiper-button-next', //「次へボタン」要素のクラス名
    //   prevEl: '.swiper-button-prev', //「前へボタン」要素のクラス名
    // },
  });

  /*****************************************************/
/* scrollして対象の要素を表示する処理　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 */
/*****************************************************/

/* 対象の要素をクラス名で選択　　　以下のクラスのどちらかがついていれば対象 */ 
// slide : 選ばれる理由が左右から出てくる　
// interview : interview内容が現れる
const items = document.querySelectorAll(".fadein");

/* 監視対象のクラスとaddするクラスのマッピング */
const classMapping = {
    'fadein':'exe-fadein',

}

/*Intersection Observer API　option */
const observerOptions = {
    root:null,   /*ブラウザのviewportが対象  */
    rootMargin: '0px',
    threshold: 0.8 /* ターゲットが80%見えたら閾値を超えたと判定* */

}

/* 80%見えた時に呼び出される関数*/
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
