$(function(){
    // 文章点赞点赞
    var oPublish = $(".publishTime");
    oPublish.on("click",".pt-likes", function() {
        var _this = $(this);
        var oIcon = _this.find(".icon-praise");
        var oTotal = _this.find("span:last");
        var total = Number(oTotal.text());

        if (oIcon.hasClass("active") && oTotal.hasClass("active")) {
            oIcon.removeClass("active");
            oTotal.removeClass("active");
            total--;
        }
        else {
            oIcon.addClass("active");
            oTotal.addClass("active");
            total++;
        }
        oTotal.text(total);
    });
    // 评论点赞
    var oComment = $(".reply-list");
    oComment.on("click", ".rl-likes", function() {
        var _this = $(this);
        var oIcon = _this.find(".icon-praise");
        var oTotal = _this.find(".praise-text");
        var total = $(".praise-text").attr("data-count");

        if (oIcon.hasClass("active") && oTotal.hasClass("active")) {
            oIcon.removeClass("active");
            oTotal.removeClass("active");
            total ="赞";
        }
        else {
            oIcon.addClass("active");
            oTotal.addClass("active");
            total++;
        }
        oTotal.text(total);
    });
})