/**
 * Created by JOURNEY on 2017/7/25.
 */
    //搜索联想
$(".inner-inp").keyup(function () {
    if($(this).val().length == 0){
        $(".sec-list").show();
    }else{
        $(".sec-list").hide();
    }
})
$(".inner-inp").focus(function(){
    if($(this).val().length != 0){
        $(".search-lx").show();
        $(".sec-list").hide();
    }else{
        $(".sec-list").slideDown(300);
        $(".search-lx").hide();
    }
})
var secLxIdxNow = -1;
var z, type;
$(".inner-inp").on("keyup click", function (event) {
    var secLxIdx = $(".search-lx-Val").length;
    $(".search-lx").show();
    if ($(".sec-tab").eq(0).hasClass("sec-tab-active")) {
        z = "https://search.houxue.com/xunsou/courseSuggest";
        type = "kecheng";
    }
    if ($(".sec-tab").eq(1).hasClass("sec-tab-active")) {
        z = "https://search.houxue.com/xunsou/schoolSuggest";
        type = "xuexiao";
    }
    if ($(".sec-tab").eq(2).hasClass("sec-tab-active")) {
        z = "https://search.houxue.com/xunsou/teacherSuggest";
        type = "laoshi";
    }
    if (event.keyCode == 38) {
        secLxIdxNow--;
        if (secLxIdxNow < 0) {
            secLxIdxNow = secLxIdx;
            $(".search-lx-Val").removeClass('bcf5');
        }
        if (secLxIdxNow != -1) {
            $(".search-lx-Val").eq(secLxIdxNow).addClass('bcf5').siblings().removeClass('bcf5');
            $(".inner-inp").val($(".search-lx-Val").eq(secLxIdxNow).children('.fl').text());
        }
    } else if (event.keyCode == 40) {
        secLxIdxNow++;
        if (secLxIdxNow >= secLxIdx) {
            secLxIdxNow = -1;
            $(".search-lx-Val").removeClass('bcf5');
        }
        if (secLxIdxNow != -1) {
            $(".search-lx-Val").eq(secLxIdxNow).addClass('bcf5').siblings().removeClass('bcf5');
            $(".inner-inp").val($(".search-lx-Val").eq(secLxIdxNow).children('.fl').text());
        }
    }
    function xlhv() {
        $(".search-lx-Val").hover(function () {
            secLxIdxNow = $(this).index();
            $(this).addClass('bcf5').siblings().removeClass('bcf5').css("cursor", "pointer");
            //$(".inner-inp").val($(".search-lx-Val").eq(secLxIdxNow).children('.fl').text());
        })
        $(".search-lx-close").click(function () {
            $(".search-lx").hide().find(".search-lx-Val").removeClass('bcf5');
        }).mouseenter(function(){
            $(".search-lx>ul>.search-lx-Val").removeClass('bcf5');
        })
        $(".search-lx-Val").click(function () {
            $(".inner-inp").val($(this).find("span:first-of-type").text());
            $(".search-lx").find(".search-lx-Val").removeClass('bcf5');
        })
    }
    if(event.keyCode==38 || event.keyCode==40)return;
    var kwd = this.value;
    $.ajax({
        url: z,
        data: {kwd: kwd},
        type: "get",
        dataType: "jsonp",
        jsonp: "callbackparam",
        success: function (data) {
            var html = '';
            for (var i = 0; i < 10; i++) {
                if (data['key'][i]) {

                    html += '<a href="https://search.houxue.com/' + type + '.html?kw=' + data['key'][i] + '" class="search-lx-Val clear"><span class="fl">' + data['key'][i] + '</span>' +
                '<span class="fr">约' + data['count'][i] + '个结果</span></a>';
                } else {
                    break;
                }
            }
            if (html){
                html+='<div class="search-lx-close"><span>关闭</span></div>';
            }
            $('.suggest').html(html);
            secLxIdx = $(".search-lx-Val").length;
            secLxIdxNow = -1;
            xlhv();
        },
        timeout: 30000,
        error: function () {
            $('.suggest').html('');
        }
    });
});
function qingkong() {
    $.ajax({
        type: 'POST',
        url: '/newajax-emptied.html',
        timeout: 3000,
        success: function (res) {
            console.log(res);
            if (res.error) {
            } else {
                //window.location.reload();
                $(".lately-sec>.lately-sec-result>.sec-have").remove();
                $(".lately-sec>.lately-sec-result").html("<div class='sec-none mt_pass'><p class='sec-none-txt'>您还没有搜索过这里</p></div>");
            }
        },
        error: function (xhr, type) {
        }
    });
}
$(".lately-have-tab>.sec-result-li>span").click(function () {
    var _this = $(this);
    var kw = $("#search-kw").html();
    var type = $("#search-type").val();
    $.ajax({
        type: 'POST',
        data: {SearchLog_kw: kw, SearchLog_type: type},
        url: '/newajax-clearSearchLog.html',
        dataType:'json',
        timeout: 3000,
        success: function (res) {
            if (res.error) {
            } else {
                _this.parents(".sec-result-li").remove();
            }
        },
        error: function (xhr, type) {
        }
    });
    if($(".lately-have-tab>.sec-result-li>span").length == 1){
        $(".lately-sec>.lately-sec-result").html("<div class='sec-none mt_pass'><p class='sec-none-txt'>您还没有搜索过这里</p></div>");
    }
})

