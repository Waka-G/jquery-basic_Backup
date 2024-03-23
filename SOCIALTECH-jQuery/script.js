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
});