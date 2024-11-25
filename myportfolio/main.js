
const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.nav');
const hamburger_borders = document.querySelectorAll('.hamburger_border');
const breaksize = 768;


// hamburger menu　をクリックしたときの処理
hamburger.addEventListener('click',function(){
    navi.classList.toggle('nav-open');
    hamburger_borders.forEach(item => {
        item.classList.toggle('nav-open');
    })

})

function closeMenu() {
          
    if (window.matchMedia("(max-width: 768px)").matches) {
        //モバイルの時だけメニューを閉じる
    navi.classList.remove('nav-open');
    hamburger_borders.forEach(item => {
        item.classList.remove('nav-open');
    })
}
}

function closeMenuAnchorLink() {
       // 現在のURLを取得する
    //    const currentPathName = location.pathname;
       const menuLinks = document.querySelectorAll('.menulink');

       if (menuLinks.length == 0) return;

       menuLinks.forEach((menuLink) => {
        // const href = new URL(menuLink.href)
        // ///同じページかつurlに’＃’が含まれている場合
        //  if (currentPathName === href.pathname && href.hash) {
            menuLink.addEventListener('click',() => {
                closeMenu();
            })
        //  }
       })

}

closeMenuAnchorLink();


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
            mySwiper.destroy(true,true);
            mySwiper = undefined;        
        }
    }
        // if分を用いて横幅に応じて関数を実行
        function handleResize() {
            const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (w > breaksize) {
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
