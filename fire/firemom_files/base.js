
var code_list = ["test"];

/**
*
* 设置微信二维码
* @param catid  页面ID
* @param device  设备 1：PC 2：移动
*/
function init(catid, device) {

    var txt = 'wecode';
    <!--if (sessionStorage.getItem("base_"+catid)) {-->
        <!--txt = sessionStorage.getItem("base_"+catid);-->
    <!--} else {-->
        if (code_list && code_list.length > 0) {
            var index = Math.floor((Math.random()*code_list.length));
            txt = code_list[index];
        }
        <!--sessionStorage.setItem("base_"+catid, txt);-->
    <!--}-->

    $("#copyewm1").val(txt);
    $(".code_name").text(txt);
    <!--$(".code_png").attr('src', json.code_url);-->
    $('.copybtn').attr('data-clipboard-text',txt);

}

/**
 *
 * 初始化 获取微信二维码
 * @param catid  页面ID
 * @param device  设备 1：PC 2：移动
 */
function init_back(catid, device) {
    $.ajax({
        url:"/home/land/getWeChat",
        type:"POST",
        data:{
            type_id:catid,
            device:device
        },
        dataType:"json",
        success:function(json){
            if (json.status == 1) {
                var txt = json.wechat_id;
                $("#copyewm1").val(txt);
                $(".code_name").text(txt);
                $(".code_png").attr('src', json.code_url);
                $('.copybtn').attr('data-clipboard-text',txt);
            }
        }

    })

}



/**
 * 获取推广来源
 * @returns {string}
 */

function getFrom()
{
    var lastUrl = "";
    if(document.referrer.length>0){
        lastUrl = document.referrer;
    }try{
        if(lastUrl.length == 0 && opener.location.href.length > 0){
            lastUrl = opener.location.href;
        }
    }catch(e){
        lastUrl = window.location.href;
    }
    return lastUrl;
}

/**
 * 设置月份
 */
function getTime() {
    $.ajax({
        url:"/home/land/getTime",
        type:"POST",
        dataType:"json",
        success:function(json){
            if (json.m < 10) {
                json.m = "0" + json.m;
            }
            $(".all-time").text(json.y+"-"+json.m+"-"+json.d);
            $(".month").text(json.m);
            $(".m_last").text(json.m-1)
        }

    })

}



