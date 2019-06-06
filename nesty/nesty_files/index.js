
function selectText(temp_element) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(temp_element);
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(temp_element);
        window.getSelection().addRange(range);
    }
}

$(document).ready(function () {

    var timeout;

    var temp_arr = window.location.pathname.split("/");

    var aspx_file_name = temp_arr[temp_arr.length - 1];

    var click_cs = 0;
    var flag = false;//已访问

    function ajax_copy(temp_element) {
        //微信号索引
        var weixinindex = "";
        if (temp_element.hasAttribute("order")) {
            weixinindex = $(temp_element).attr("order");
        }
        //微信号
        var weixinhao = "";
        if ($("#Hid_weixinhao").length > 0) {
            weixinhao = $("#Hid_weixinhao").val();
        }
        if (weixinhao.length == 0) {
            weixinhao = $(temp_element).text();
        }

        //页面地址
        var url = window.location.href;
        //来路地址
        var previous_Url = document.referrer;

        timeout = setTimeout(function () {

            $.get(aspx_file_name,
            {
                weixinhao: weixinhao,
                url: url,
                previous_Url: previous_Url,
                weixinindex: weixinindex
            }, function (data) {
                click_cs++;
            });

        }, 1000);
    }

    if (navigator.userAgent.indexOf("baiduboxapp") >= 0 || navigator.userAgent.indexOf("baidubrowser") >= 0) {
        if (navigator.userAgent.match(/mobile/i)) {
            //移动端

            $(".can_copy").bind('touchstart click taphold', function () {

                if (!flag) {
                    flag = true;

                    selectText(this);

                    setTimeout(function () { flag = false; }, 100);

                    if (click_cs > 0) {
                        return;
                    }
                    ajax_copy(this);
                }

                return true;
            });

            $(".can_copy").on("touchend", function (event) {
                clearTimeout(timeout);
                event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
            });
        }
        else {
            $(".can_copy").mousedown(function () {

                if (!flag) {
                    flag = true;

                    selectText(this);

                    setTimeout(function () { flag = false; }, 100);

                    if (click_cs > 0) {
                        return;
                    }
                    ajax_copy(this);
                }

                return true;
            });

            $(".can_copy").mouseup(function () {
                clearTimeout(timeout);
            });
        }
    }
    else {
        $(".can_copy").bind('copy taphold', function () {

            if (!flag) {
                flag = true;

                selectText(this);

                ajax_copy(this);
            }
        });
    }
});