$(function(){
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            opacity:0.5,
            marginLeft:20,
        },100);
    });
    $(function(){
        $('.button-more').on('mouseout',function(){
            $(this).animate({
                opacity:1.0,
                marginLeft:0,
            },100);
        });
        $('.carousel').slick({
            autoplay:true,
            dots:true,
            Infinite:true,
            autoplaySpeed:5000,
            arrows:false,
        });
    });

    function inputCheck() {
        // エラーのチェック結果
        let result;
    
        // エラーメッセージのテキスト
        let message = '';
    
        // エラーがなければfalse、エラーがあればtrue
        let error = false;
    
        // お名前のチェック
        if ($('#name').val() == '') {
          //エラーあり
           $('#name').css('background-color', '#f79999');
           error = true;
           message += 'お名前を入力してください。\n';
        } else {
          $('#name').css('background-color','#fafafa');
        }
      }
    });
    

