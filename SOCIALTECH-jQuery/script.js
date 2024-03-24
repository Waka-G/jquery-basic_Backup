$(function(){
  //ボタンアニメーション
  /* opacity（不透明度）：0.5を指定し、半透明にする（不透明度は0～1の間で指定する。
      0で完全な透明になり、1で完全な不透明になる） 
    marginLeft（左側の余白）：20pxを指定し、対象を20px右側に移動させる
    アニメーションの再生スピード：100を指定し、0.1秒間で再生する（再生スピードは1000分の1秒単位で設定する。1秒＝1000）*/
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  //マウスアウト時のアニメーションを設定しよう
  /* opacity（不透明度）：1を指定し、不透明にする（元に戻す）
     marginLeft（左側の余白）：0を指定し、対象の位置を元に戻す
     アニメーションの再生スピード：100を指定し、0.1秒間で再生する*/
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });

  //slickの設定内容
  /* slickの公式サイトに記載されているサンプルコードを参考にコードを書く
    class名がcarouselのHTML要素をslickでカルーセル化する 
    autoplay：trueに設定し、画像を自動的に切り替える
    dots：trueに設定し、カルーセルの下に現在地を示すUI（ドット）を表示する
    infinite：trueに設定し、画像をループさせる
    autoplaySpeed：5000に設定し、5秒ごとに画像を切り替える
    arrows：falseに設定し、カルーセルの左右の矢印を非表示にする
    */
   //カルーセル
   $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinity: true,
    autoplaySpeed: 5000,
    arrows: false,
   });
});