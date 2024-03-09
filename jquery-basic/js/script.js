/* $(function() {...});で処理を囲うと、
   HTML要素を全て読み込んだ後から$(function() {...});内の処理を,
   実行します。 
   つまり、まだ読み込まれていない
   HTML要素に対して処理を実行してしまうようなエラーを防げます。
   別の記述方法に、
   $(document).ready(function() {...});
   がある。
   */
$(function()  {
  //jQueryのセレクタを記述してみよう
  // const title = $('#title').text();
  // const list = $('.message').text();
  // //取得したタイトルとメッセージの値を表示する
  // console.log(title);
  // console.log(list);

  // class属性値の先頭が「sample」の要素だけを抽出する
  const text = $('li[class^="sample"]').text();
  console.log(text);
});