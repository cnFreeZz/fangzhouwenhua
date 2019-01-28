$(function () {
    $.ajaxSetup({ crossDomain: true, xhrFields: { withCredentials: true } });
});
var hpps = 'https://spread.tshoudao.com/';
var base1q = hpps + '/mpapi/getuseradsweixin';
function GetQrCode(json) {
    if ($.cookie("wx_cookie") !== undefined && $.cookie("wx_cookie") !== "") {
        var wx_json = JSON.parse($.cookie("wx_cookie"));
        $(".wxid").html(wx_json.weixinid);
        $(".wx_img").attr("src", wx_json.imgurl);
        if (document.referrer) { RecordView(wx_json.weixinid); }
        //RecordView(wx_json.weixinid); 
    }else {
        $.ajax({
            type: "post",
            url: base1q,
            data: JSON.stringify(json),
            contentType: 'application/json',
            success: function (json, status) {
                if (status == "success") {
                    if (json.status == true) {
                        $(".wxid").html(json.weixinid);
                        $(".wx_img").attr("src", json.imgurl);
                        if (document.referrer) { RecordView(wx_json.weixinid); }
                        //RecordView(wx_json.weixinid);
                        $.cookie("wx_cookie", JSON.stringify(json), { expires: 7 });
                    }
                }
            },
            error: function (xhr) {
                console.log("出现错误，请稍后再试:" + xhr.responseText);
                //alert("出现错误，请稍后再试:" + xhr.responseText);
            }
        });
    }
}
var hpps_dcs = 'https://unify-api.topxlc.com';
var pageload_dcs = hpps_dcs + '/ad/on_ad_page_load.dcs';
//var channel_id = 7;  //1：百度，3：360，5：搜狗，7：今日头条，9：百度信息流
function RecordView(wxid) {
    $.ajax({
        type: "post",
        url: pageload_dcs,
        data: JSON.stringify({
            "version": "1.0",
            "action": "ad/on_ad_page_load.dcs",
            "params": {
                "wx_id": wxid,
                "sys_id": 1,
                "channel_id": channel_id,
                "url": document.referrer
            }
        }),
        contentType: 'application/json',
        success: function (json, status) {
            if (status == "success") {
                //console.log("ok");
                //console.log(JSON.stringify(json));
                sessionid = json.sessionid;
            }
        },
        error: function (xhr) {
            console.log("出现错误，请稍后再试:" + xhr.responseText);
            //alert("出现错误，请稍后再试:" + xhr.responseText);
        }
    });
}
$(function () {
    var timerLongTouch;
    $('.wechat-event')
        .on("touchstart", function (event) {
            // Timer for long touch detection
            timerLongTouch = setTimeout(function () {
                // Test long touch detection (remove previous alert to test it correctly)
                if (typeof wechatCopy === "function") {
                    wechatCopy();
                }
                //_taq.push({ convert_id: "80567688841", event_type: "wechat" });
                /*longTouch(convert_id);*/
            }, 500);
        })
        .on("touchmove", function () {
            clearTimeout(timerLongTouch);
        })
        .on("touchend", function () {
            clearTimeout(timerLongTouch);
        });
});
function JsAlert(msg) {
    layer.open({
        title: false,
        closeBtn: 0,
        content: msg,
        btn: ['确认'],
        yes: function () {
            layer.closeAll();
        }
    });
}
var detectBrowser = function (name) {
    if (navigator.userAgent.toLowerCase().indexOf(name) > -1) {
        return true;
    } else {
        return false;
    }
};
function isMobileUserAgent() {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}