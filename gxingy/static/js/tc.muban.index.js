// 弹出框
var handleDialog = function (id) {
    var url = 'http://device.tecenet.com/index.php?r=api/item&itemid='+id;
    $("#productModal .modal-body iframe").attr("src",url);
    $("#productModal").modal('show');

};
var handleExtendHtml = function(){
    $(".product-table tbody tr>td").each(function(i,obj){
       if($(obj).text() == "null"){
           $(obj).html("");
       }
    });
};
// 获取产品信息
var getProductList = function(){
    var $wrap = $(".mb-yjj");
    var $company = $.trim($(".tp-header-name").text());
    var $container = $wrap.find($(".product-table tbody"));
    $.ajax({
        url:"http://device.tecenet.com/index.php?r=api/regperson",
        dataType:'jsonp',
        jsonp: "callbackparam",
        data:{
            r: 'api/regperson',
            keyword:$company

        },
        success:function(data) {
            var $template = "";
            if(data){
                $wrap.show();
                for(var i in data) {
                    $template += '<tr>' +
                        '<td>'+ data[i].product_name+'</td>' +
                        '<td>'+ data[i].product_model+'</td>' +
                        '<td>'+ data[i].reg_id+'</td>' +
                        '<td>'+ data[i].examine_startdate+'</td>' +
                        '<td>'+ data[i].examine_enddate+'</td>' +
                        '<td><a href="javascript:;" onclick="handleDialog('+data[i].itemid+')" class="view-btn">查看</a></td>' +
                        '</tr>';
                }
                $container.html($template);
            }
            handleExtendHtml();
        }
    });
};
getProductList();

// 刷新验证码
var refreshCode = {
    getHost:function(){
        var baseHost = $('.captcha-img').attr("data-host");
        return baseHost;
    },
    getMath:function(){
        return Math.random().toString(36).substr(2);
    },
    setCodeUrl: function () {
        var codeUrl = refreshCode.getHost()+'api/captcha.png.php?action=image&refresh='+refreshCode.getMath();
        return codeUrl;
    },
    setImgSrc:function(){
        $('.captcha-img').attr("src",refreshCode.setCodeUrl());
    }
};
refreshCode.setImgSrc();

// 展开查看更多
var expandViewAll = {
    defaultHeight: '',
    addClassName:'',
    container: '',
    html:'<a class="expand-btn" href="javascript:;" onclick="expandViewAll.expand()">展开查看全部</a>',

    init : function(setting){
        this.defaultHeight = setting['defaultHeight'];
        this.addClassName = setting['addClassName'];
        this.buttonClass = setting['buttonClass'];
        this.container = setting['container'];

        this.build();
    },

    build: function(){
        if($("#"+this.container).height() > this.defaultHeight){
            $("#"+this.container).addClass(this.addClassName);
            $("#"+this.container).height(this.defaultHeight);
            $("#"+this.container).after(expandViewAll.html);
        }
    },

    expand: function(){
        $("#"+this.container).removeClass(this.addClassName);
        $("#"+this.container).height("auto");
        $(".expand-btn").hide();
    }

};
expandViewAll.init({
    defaultHeight:400,
    container:'introduceText',
    buttonClass:'expand-btn',
    addClassName: 'overflow'
});

