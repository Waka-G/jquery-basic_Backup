$(function(){
//   //ボタンがクリックされた場合
//   $('button').on('click',function(){
//     console.log('ボタンがクリックされました');
//   });
// });

/* イベント処理を理解しよう on()メソッドの書き方
正方形の色を動作ごとに変化させる 
   指定要素を「'div'」*/
  // $('div').on({

  //   //クリック処理
  //   'click': () =>{
  //   //背景を赤
  //   $('div').css('background-color', 'red');
  //   //テキストを「」click
  //   $('div').text('click');
  //   },

  //   //ダブルクリック
  //   'dblclick': () => {
  //     //背景を緑
  //     $('div').css('background-color', 'green');
  //     //テキストを「dbclick」
  //     $('div').text('dblclick');
  //   },

  //   //マウスカーソルを正方形に入れる
  //   'mouseenter': () => {
  //     //背景を青
  //     $('div').css('background-color', 'blue');
  //     //テキストを「mouseenter」
  //     $('div').text('mouseenter');
  //   },

  //   'mouseout':() => {
  //     //背景をグレー
  //     $('div').css('background-color', 'gray');
  //     //テキストを「mouseout」
  //     $('div').text('mouseout');
  //   },

  // });


  /* 複数のイベント処理を同時に設定しよう（typeプロパティ編） */
  $(document).on('click keydown',(e) => {
    //クリックされた場合
    if(e.type === 'click'){
      $('div').text('クリックされました!');
    }
    //キーが押された場合
    if(e.type === 'keydown'){
      $('div').text('キーが押されました!');
    }
  });

});