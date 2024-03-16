$(function(){
  //HTML要素内のテキストを取得・変更しよう
  // タグ指定で取得（pタグ）
  // const p = $('p').text();
  // console.log(p);

  //jQueryのtext()メソッドでテキストを変更 $('p').text(変更するテキストの内容);
  // $('p').text('jQueryを勉強しよう');

  //変数の初期化
  let num =0;

  //HTML要素を追加しよう
  //id属性がappendの要素がクリックされたら要素を追加
  // $('#append').on('click',function(){
  //   //numを1つずつ増やす
  //   num++;
  //   $('ul').append('<li>appendで追加' + num + '</li>');
  // });

  // //HTML要素を削除しよう
  // //id要素がremoveの要素がクリックされたら末尾要素を削除
  // $('#remove').on('click',function(){
  //   num--;
  //   $('li:last').remove();  //末尾のli要素は$('li:last')で取得して削除する

  //   //要素がなくなったら変数を0にする
  //   if(num < 0){
  //     num = 0;
  //   }
  // });

  //i属性がshowの要素がクリックされたら要素を表示
  $('#show').on('click',function(){
    $('ul').show();
  });

  //id属性がhideの要素がクリックされたら要素を非表示
  $('#hide').on('click',function(){
    $('ul').hide();
  });
});