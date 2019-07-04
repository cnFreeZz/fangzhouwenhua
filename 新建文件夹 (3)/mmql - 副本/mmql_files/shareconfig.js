var zt_id = J_PARAM.mshare.zt_id || 0;
var WX_CONFIG_URL = J_PARAM.customWxConfigUrl || '//www.mama.cn/index.php?a=Listing&d=getShare&callback=fnShare';
// 统计回调
/**
 *
 * @param parse {{String}}  friend 分享给微信朋友，cirfriend 分享到微信朋友圈，qq 分享到qq
 * @param zt_id 统计ID
 */
function shareCount(parse,zt_id){
    var local_api_url = '//act.mama.cn/home/v6/share/index/count';
    var code_validate_url = local_api_url+'?parse='+parse+"&zt_id="+zt_id+'&callback=?';
    jQuery.getJSON(code_validate_url,function(response_json){
        // return true;
    });
    // 页面业务分享回调
    Object.prototype.toString.call(Mama.pageServiceShareCallback) === '[object Function]' && Mama.pageServiceShareCallback();
}

if (MamaJSBridge.UA.wx) {
    $.getScript("//res.wx.qq.com/open/js/jweixin-1.0.0.js", function(){
        $.ajax({
            type: "get",
            url: WX_CONFIG_URL,
            data :{
                nowUrl:encodeURIComponent(location.href.split('#')[0])
            },
            dataType: 'jsonp',
            success:function(data){
                fnShare(data);
            }
        });

    });
}

// 微信配置
function fnShare(data){
    var timestamp = data['timestamp'],
        nonceStr = data['nonceStr'],
        signature = data['signature'],
        appId = data['appId'];
    wx.config({
        debug: false,
        appId: appId,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ]
    });
    wx.ready(function () {
        // 朋友圈
        wx.onMenuShareTimeline({
            title:J_PARAM.mshare.title, // 分享标题
            link: J_PARAM.mshare.link, // 分享链接
            imgUrl: J_PARAM.mshare.image, // 分享图标
            success:function(){
                shareCount('cirfriend',zt_id);
            }
        });
        wx.onMenuShareAppMessage({
            title: J_PARAM.mshare.title, // 分享标题
            desc: J_PARAM.mshare.desc, // 分享描述
            link: J_PARAM.mshare.link, // 分享链接
            imgUrl: J_PARAM.mshare.image, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success:function(){
                shareCount('friend',zt_id);
            }
        });
        wx.onMenuShareQQ({
            title:J_PARAM.mshare.title, // 分享标题
            link: J_PARAM.mshare.link, // 分享链接
            imgUrl: J_PARAM.mshare.image, // 分享图标
            success:function(){
                shareCount('qq',zt_id);
            }
        });
        wx.onMenuShareWeibo({
            title:J_PARAM.mshare.title, // 分享标题
            link: J_PARAM.mshare.link, // 分享链接
            imgUrl: J_PARAM.mshare.image, // 分享图标
            success:function(){
                shareCount('',zt_id);
            }
        });
    });

    wx.error(function (res) {
    });
}

/**
 * app分享操作结束后会调用
 * @param type 分享方式 1=微信好友、2=朋友圈、3=新浪微博、4=qq空间、5=腾讯微博、6=qq好友
 * @param status 分享状态 1=成功；2=失败
 */
Mama.shareResult = function (type, status) {
    Object.prototype.toString.call(Mama.shareResultCallback) === '[object Function]' && Mama.shareResultCallback(type, status);
}
/*孕管app回调*/
window.shareCallBack = function () {
    Object.prototype.toString.call(Mama.ygShareResultCallback) === '[object Function]' && Mama.ygShareResultCallback();
}

// app分享回调
// type 分享方式 1=微信好友、2=朋友圈、3=新浪微博、4=qq空间、5=腾讯微博、6=qq好友
Mama.shareResultCallback = function(type,status){
    if(status == 1){
        if(type==1){
            shareCount('friend',zt_id);
        } else if(type == 2){
            shareCount('cirfriend',zt_id);
        } else  if( type == 3) {
            shareCount('sinaweibo',zt_id);
        } else  if(type == 4 ) {
            shareCount('qqzone',zt_id);
        } else  if( type == 5) {
            shareCount('tencentweibo',zt_id);
        }else  if( type == 6) {
            shareCount('qq',zt_id);
        } else {
            shareCount('',zt_id);
        }
    }
}
/*孕管app成功回调 没有status和type*/
Mama.ygShareResultCallback = function(){
    shareCount('',zt_id);
}


var APP_MSHARE = {
    "mshareTitle": J_PARAM.mshare.title,
    "mshareDesc": J_PARAM.mshare.desc,
    "mshareImage": J_PARAM.mshare.image,
    "mshareUrl": J_PARAM.mshare.link
}
function getShareConfig(funcname) {
    var shareInfo = JSON.stringify(APP_MSHARE);
    if (typeof(funcname) == 'undefined' || funcname == null) {
        return shareInfo;
    } else {
        //  funcname: window.SHARE.checkResult
        eval(funcname + '(\'' + shareInfo + '\')');
    }
}
// 旧接口 Mama.getShare 点击分享会重新获取 。故支持动态改变配置
// 新接口 MamaJSBridge.navRightButtonInfo 动态改变配置 需要手动执行一次
if (MamaJSBridge.navRightButtonInfo) {
    if ((MamaJSBridge.UA.mmq && parseFloat(MamaJSBridge.UA.appVer) < 6.4) ||
        (MamaJSBridge.UA.pregnancyhelper && parseFloat(MamaJSBridge.UA.appVer) < 5.6)) {
        Mama.getShare = getShareConfig;
    } else {
        MamaJSBridge.navRightButtonInfo({
            "text": '分享', //显示文本
            "type": 4,
            "ext": APP_MSHARE
        });
    }
} else {
    Mama.getShare = getShareConfig
}
