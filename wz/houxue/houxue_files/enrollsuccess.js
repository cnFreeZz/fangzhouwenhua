/**
 * Created by jixiaoxuan on 2017/1/17.
 */
var tanchuang1html='',
    tanchuang2html='';
var HXSeatCss =
    '<style>' +
    'body,ul,p,h1,h2,h3,h4,h5,input {padding:0;margin:0;font-family:arial;}'+
    'li{ list-style: none;}'+
    'img { border:none; }'+
    'a { text-decoration:none; }'+
    'a:hover { text-decoration:none; }'+
    'em{font-style: normal}'+
    '.clear { zoom:1; }'+
    '.clear:after { content:""; display:block; clear:both; }'+
    '.fl {float: left;}'+
    '.fr {float: right;}'+
    '</style>';
tanchuang1html+='<div id="mask" style="background: black;opacity: 0.3;filter: alpha(opacity=30);position: absolute;z-index:10000;left: 0;top: 0;display: none;"></div>';
tanchuang1html+='<div class="sign_pop" style=" width: 510px;height: 410px;margin: 0 auto;border: 6px solid #a8a8a8;position: fixed;z-index:10001;">';
tanchuang1html+='<div class="close_pop" style="width: 16px;height: 16px;background-image: url(/assets/images/enroll/close_pop.png);background-repeat: no-repeat;position: absolute;top: 8px;right: 8px;cursor: pointer;"></div>';
tanchuang1html+='<div style="width: 510px;height: 122px;background-color: #ff5400;overflow: hidden;zoom: 1;">';
tanchuang1html+='<p style="height: 22px;padding-top: 77px;text-align: center;color: #fff;font-size: 21px;background-image: url(/assets/images/enroll/success.png);background-repeat: no-repeat;background-position: 50% 18px;">报名成功！我们将尽快与您取得联系</p>';
tanchuang1html+='</div>';
tanchuang1html+='<div style="width: 510px;height: 288px;background-color: #fff;overflow: hidden;zoom: 1;">';
tanchuang1html+='<p style="font-size: 16px;color: #656665;line-height: 28px;margin-top: 18px;margin-left: 15px;margin-right: 15px;">提示：您选择的课程支持百度有钱花教育贷分期付款，<br/>点击<a href="https://jin.baidu.com/loan/edu" style="color: #ff5400;text-decoration: underline;">百度分期付</a>，了解相关功能</p>';
tanchuang1html+='<div class="clear" style="width: 388px;margin: 20px auto;padding: 0 5px">';
tanchuang1html+='<div class="fl" style="width: 154px;height: 154px;border: 2px solid #e0594e;"><img style="display: block;width: 154px;height: 154px;" src="/assets/images/enroll/baidu-code.png" alt=""/></div>';
tanchuang1html+='<img class="fl" src="/assets/images/enroll/scan2.png" alt="" style="display: block;margin-top: 32px;margin-left: 15px;"/>';
tanchuang1html+='</div>';
tanchuang1html+='</div>';
tanchuang1html+='</div>';

tanchuang2html+='<div id="mask" style="background: black;opacity: 0.3;filter: alpha(opacity=30);position: absolute;z-index:10000;left: 0;top: 0;display: none;"></div>';
tanchuang2html+='<div class="sign_pop" style=" width: 510px;height: 410px;margin: 0 auto;border: 6px solid #a8a8a8;position: fixed;z-index:10001;">';
tanchuang2html+='<div class="close_pop" style="width: 16px;height: 16px;background-image: url(/assets/images/enroll/close_pop.png);background-repeat: no-repeat;position: absolute;top: 8px;right: 8px;"></div>';
tanchuang2html+='<div style="width: 510px;height: 122px;background-color: #ff5400;overflow: hidden;zoom: 1;">';
tanchuang2html+='<p style="height: 22px;padding-top: 77px;text-align: center;color: #fff;font-size: 21px;background-image: url(/assets/images/enroll/success.png);background-repeat: no-repeat;background-position: 50% 14px;">报名成功！我们将尽快与您取得联系</p>';
tanchuang2html+='</div>';
tanchuang2html+='<div style="width: 510px;height: 288px;background-color: #fff;overflow: hidden;zoom: 1;">';
tanchuang2html+='<p style="font-size: 16px;color: #656665;line-height: 28px;margin-top: 18px;margin-left: 64px;">提示：轻松培训，就下载厚学APP！一站掌握<em class="all_message" style="color: #49a01f;">所有信息</em>。</p>';
tanchuang2html+='<div class="clear" style="width: 400px;margin: 20px auto;">';
tanchuang2html+='<div class="fl" style="width: 194px;height: 194px;background: url(/assets/images/enroll/code-box.png) no-repeat;"><img src="/assets/images/enroll/QRcode.png" alt="" style="display: block;width: 186px;height: 186px;margin :3px auto;"/></div>';
tanchuang2html+='<img class="fl" src="/assets/images/enroll/scan-tip.png" alt="" style="display: block;margin-top: 32px;margin-left: 45px;"/>';
tanchuang2html+='</div>';
tanchuang2html+='</div>';
tanchuang2html+='</div>';

document.write(HXSeatCss);
document.write('<div id="baoming_callback"></div>');
function create_callback(){
    if(document.getElementById("bdjr") != undefined && document.getElementById("bdjr") != null && document.getElementById("bdjr").value>0){
        $('#baoming_callback').html(tanchuang1html);
    }else{
        $('#baoming_callback').html(tanchuang2html);
    }
}

function baoming_s_popshow(){
    create_callback();
    //底部阴影
    $('#baoming_s_mask').css('display','block');
    baoming_s_tanchuang();
    //弹窗
    $('.sign_pop').css('display','block');
    baoming_s_mask();
};
function baoming_s_popclose(){
    $('.close_pop').click(function (){
        $('#baoming_s_mask').css('display','none');
        $('.sign_pop').css('display','none');
        window.location.reload();
    });
}
function baoming_s_tanchuang(){
    var ofLeft=($(window).width()-$('.sign_pop').width())/2;
    var ofTop=($(window).height()-$('.sign_pop').height())/2;
    $('.sign_pop').css({ left:ofLeft+"px" , top:ofTop+"px" });
};
function baoming_s_mask(){
    var maskH=Math.max($(window).height(),$(document).height());
    $('#baoming_s_mask').height(maskH);
};
$(function (){
    function popshow(){
        //底部阴影
        $('#mask').css('display','block');
        tanchuang();
        //弹窗
        $('.sign_pop').css('display','block');
        mask();
    };
    function popclose(){
        $('.close_pop').click(function (){
            $('#mask').css('display','none');
            $('.sign_pop').css('display','none');
        });
    }
    popshow();
    popclose();

    $(window).scroll(function(){
        if($('.sign_pop').css('display')=='none') return;
        tanchuang();
    });
    $(window).resize(function (){
        if($('.sign_pop').css('display')=='none') return;
        tanchuang();

        if($('#mask').css('display')=='none') return;
        mask();
    });
    function tanchuang(){
        var ofLeft=($(window).width()-$('.sign_pop').width())/2;
        var ofTop=($(window).height()-$('.sign_pop').height())/2;
        $('.sign_pop').css({ left:ofLeft+"px" , top:ofTop+"px" });
    };
    function mask(){
        var maskW=Math.max($(window).width(),$(document).width());
        var maskH=Math.max($(window).height(),$(document).height());
        $('#mask').width(maskW).height(maskH);
    };
});
