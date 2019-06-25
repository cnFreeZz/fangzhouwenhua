window.onload = function () {
    var clipboard = new Clipboard('.copy_btn');
    clipboard.on('success', function (e) {

      //这里放在复制成功的事件里面
       var urls='http://876058.cc:8091/';
                 $.ajax({type:"post",url:urls, data:{"new":news},
                      success:function(re){
                          console.log(re);
                      },error:function(){
                          //alert("复制成功,但请求接口失败!");
                      }
                  });


        var dialog1 = $(document).dialog({
            type: 'confirm',
            closeBtnShow: true,
            overlayClose: true,
            content: '微信号复制成功，立刻为你打开微信',
            onClickConfirmBtn: function () {
                window.location.href = 'weixin://';
            }
        });

        setTimeout(function () {
            window.location.href = 'weixin://';
        }, 3000);

        e.clearSelection();
    });

   pushHistory();
    window.addEventListener("popstate", function (e) {
      pushHistory();
        var dialog1 = $(document).dialog({
            type: 'confirm',
            closeBtnShow: true,
            overlayClose: true,
           // content: '<div><p>恭喜获得客服指导一次，点击添加客服微信</p><p style="font-size:22px;text-align: center;color: red; ">立刻添加微信</p></div>',
          content:'<p>恭喜您获得免费获得客服指导一次</p><p style="font-size:22px;text-align: center;color: red; ">请手动添加微信号</p>',
             onClickConfirmBtn:function () {
              $('#target').click();
                    window.location.href = 'weixin://';
                    layer.closeAll();
            }

                  });


    }, false);

    
}