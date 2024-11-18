// // Swiperのコア機能とナビゲーション、ページネーションモジュールをインポート
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";

// // コア機能と各モジュールのCSSファイルをインポート
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.nav');
const hamburger_borders = document.querySelectorAll('.hamburger_border');

// hamburger menu　をクリックしたときの処理
hamburger.addEventListener('click',function(){
    navi.classList.toggle('nav-open');
    hamburger_borders.forEach(item => {
        item.classList.toggle('nav-open');
    })

})



document.addEventListener('DOMContentLoaded',function(){
    let mySwiper;
    //swiperが有効な場合のoption
    function initializeSwiper(){
        mySwiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 24,
            grabCursor: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    //無効化するための記述
    function destroySwiper(){
        if (mySwiper) {
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }
        // if分を用いて横幅に応じて関数を実行
        function handleResize() {
            const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (w > 720) {
                if (!mySwiper) {
                    initializeSwiper();
                }
            } else {
                destroySwiper();
            }
        }
        // 初回実行
        handleResize();
        window.addEventListener('resize', handleResize);

})


// worksのSLIDE SHOWをswiperで実装
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    grabCursor: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   600: {
    //     slidesPerView: 2,
    //   },
    //   1025: {
    //     slidesPerView: 4,
    //     spaceBetween: 32,
    //   }
    // },
  });
