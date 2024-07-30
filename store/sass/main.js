// $(function(){
//     /*=================================================
//     スムーススクロール
//     ===================================================*/
//     // ページ内のリンクをクリックした時に動作する
//     $('a[href^="#"]').click(function(){
//       // リンクを取得
//       let href= $(this).attr("href");
//       // ジャンプ先のid名をセット
//       let target = $(href == "#" || href == "" ? 'html' : href);
//       // トップからジャンプ先の要素までの距離を取得
//       let position = target.offset().top;
//       // animateでスムーススクロールを行う
//       // 600はスクロール速度で単位はミリ秒
//       $("html, body").animate({scrollTop:position}, 600, "swing");
//       return false;
//     });
//   })


const links = document.querySelectorAll('a[href^="#"]');
console.log(links);

links.forEach((link) => {
  link.addEventListener('click',function(event){
     // デフォルトのリンク動作を無効にする
    event.preventDefault();
     // リンクのhref属性を取得
    const whref = this.getAttribute('href');

    // hrefが#または空文字の場合はページの先頭（document.documentElement）に、そうでない場合はhrefで指定されたIDを持つ要素にジャンプします。
    const target = whref === "#" || whref === "" ? document.documentElement : document.querySelector(whref);
    // ジャンプ先の要素のページトップからの距離を計算
    const position = target.getBoundingClientRect().top + window.scrollY;
    // スムーススクロール
    window.scrollTo ({
      top: position,
      behavior: 'smooth'
    });



  })



})