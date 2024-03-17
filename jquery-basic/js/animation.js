$(function(){
  // //id属性がfadeOutの要素がクリックされたら
  // $('#fadeOut').on('click', function(){
  //   //フェードアウトする
  //   $('.box').fadeOut();

  //   //$(セレクタ).fadeOut(スピード, コールバック関数);
  //   // $('.box').fadeOut(3000, function(){
  //   //   alert('fadeOut完了'); //alert(アラート)メッセージウィンドウに表示する
  //   // })
  // });

  // //$(セレクタ).fadeIn(スピード, コールバック関数);
  // //id属性がfadeInの要素がクリックされたら
  // $('#fadeIn').on('click',function(){
  //   //フェードインする
  //   $('.box').fadeIn();
  // });

  //id属性がfadeToggleの要素がクリックされたら
  $('#fadeToggle').on('click',function(){
    //フェードイン or フェードアウトする
    $('.box').fadeToggle();
  });

});