$(function(){
  //id属性がcheckの要素がクリックされたら
  $('#check').on('click', function(){
    //名前(テキスト)を取得する
    console.log('名前: ' + $('[name="username"]').val());

    //セレクタに:checkedを付与することで「選択された値」に限定する
    //性別(ラジオボタン)を取得する
    console.log('性別: ' + $('[name="gender"]:checked').val());

    // 血液型(セレクトボックス)を取得する
    console.log('血液型: ' + $('[name="blood"]').val());

    //趣味(チェックボックス)を取得する
    $('[name=hobby]:checked').each(function() {
      //$(this)は1つずつの選択された要素を意味する
      console.log('趣味: ' + $(this).val());
    });
    
  });

  //prop(プロパティ)の値を変更する
  //checkというidを持つHTML要素のdisabled属性をtrueにできる
   // 名前が入力されたら
   $('[name="username"]').on("input", function () {
    let input = $(this).val();
    console.log(this);
      // 入力文字があればボタンを押せる、なければボタンを押せなくする
      if (input) {
        $('#check').prop('disabled', false);
      } else {
        $('#check').prop('disabled', true);
      }
    });

    //1. 趣味のチェックボックスが変更されたら
    $('[name="hobby"]').on('change',function(){
      // 2.、3. チェックの数が3より大きかったら
      if($('[name=hobby]:checked').length > 3){
        //4. チェックを付けようとしたものだけチェックを外す
        $(this).prop('checked',false);

        //5. 注意を促すメッセージを表示する
        alert('3つまでしか選択できません');
      }
    });

});