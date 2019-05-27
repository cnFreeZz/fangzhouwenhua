/**
 * Created by husonghai on 2017/1/17.
 */
function click_order_submit(){
    var name = $('#name_order').val();
    if(name== ""){
        /*alert('姓名不能为空');*/
        $("#wrong-tip").html("请填写您的姓名");
        $(".sign-mask").show();
        $(".warm-tip").show();
        return false;
    }
    var cellphone = $('#cellphone_order').val();
    if(cellphone== ""){
        /*alert('手机不能为空');*/
        $("#wrong-tip").html("请填写您的手机");
        $(".sign-mask").show();
        $(".warm-tip").show();
        return false;
    }
    if(cellphone.match(/^1[356789]\d{9}$/) == null){
        /*alert('您的手机号格式不正确，请重新输入');*/
        $("#wrong-tip").html("您的手机号格式不正确，请重新输入");
        $(".sign-mask").show();
        $(".warm-tip").show();
        return false;
    }
    var cityname = $('#cityname').val();
    if(cityname == ''){
        /*alert('所在城市不能为空');*/
        $("#wrong-tip").html("请填写您所在的城市");
        $(".sign-mask").show();
        $(".warm-tip").show();
        return false;
    }
    var content = $('#content_order').val();
    if(content == ""){
        /*alert('内容不能为空');*/
        $("#wrong-tip").html("请填写您的求学意向");
        $(".sign-mask").show();
        $(".warm-tip").show();
        return false;
    }
    $.ajax({
        url : "https://i.houxue.com/www/order/add",
        data: $("#click_order_form").serialize(),
        type : "post",
        async : false,
        cache : false,
        dataType : "jsonp",
        jsonp: "callbackparam",
        success : function(json){
            $('#name_order').val('');
            $('#cellphone_order').val('');
            $('#content_order').val('');
            if (typeof(create_callback) === 'function' && typeof(baoming_s_popclose) === 'function'){
                baoming_s_popshow();
                baoming_s_popclose();
            }else{
                alert(json.msg);
                window.location.reload();
            }
        },
        timeout:30000,
        error:function(){
            /*alert('网络错误，请稍等重试');*/
            $("#wrong-tip").html("网络错误，请稍等重试");
            $(".sign-mask").show();
            $(".warm-tip").show();
        }
    });
}
