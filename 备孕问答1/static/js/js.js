$(function(){
    var text = [];
    var warr = [] ;
    var loadstr = '<div class="loading">连线中  <span></span><span></span><span></span><span></span><span></span></div>';
	var str1 = '<div class="line ly-hide" style="display: block;" id="fp"><div class="left"> <img src="./static/picture/header.jpg" width="40px"><div id="lx"><i></i> 咱们是要改善胸部的问题吗？<br><span>点击下方按钮即可↓</span></div></div><div class="ly-clear"></div></div><div id="msg"></div>';

    text[0] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>先天乳腺管窄小，营养摄入不足，导致胸型发育不完全。</div></div><div class="ly-clear"></div></div>';
    text[1] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>给宝宝哺乳会导致胸部营养大量流失，乳腺、乳泡长时间的超负荷工作会出现胸部松弛，萎缩变小的。</div></div><div class="ly-clear"></div></div>';
    text[2] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>乳房的经络得不到足够的滋养乳房逐渐松软无弹性，支持乳房的悬韧带松弛</div></div><div class="ly-clear"></div></div>';
    text[3] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>可以适当按摩，可以有效调整胸部不对称的现象，适当按摩乳房能够促进乳腺组织的生长发育，并且能有效避免乳腺疾病的发生，同时也可以缓解胸部不适的症状，日常生活中，女性需要做好胸部的保健工作。</div></div><div class="ly-clear"></div></div>';

    warr[0]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>您今年多大年龄了呢？</div></div><div class="ly-clear"></div></div>';
    warr[1]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>出现这个情况多久了？</div></div><div class="ly-clear"></div></div>';
    warr[2]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>是否有过丰胸？</div></div><div class="ly-clear"></div></div>';
    // warr[3]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>好的，明白，现在是一胎还是二胎？</div></div><div class="ly-clear"></div></div>';
    warr[3]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>用过哪些方法？</div></div><div class="ly-clear"></div></div>';

    warr[5] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>提醒：乳房对于女性来说是很关键的部位，是女人的自信、女人的骄傲、女人的魅力所在，一些我们并不自觉地习惯或者动作会让你的胸部变平，而且加速了乳房的衰老。因此，每位女性都应该注重乳房的健康，来自检自己的问题！</div></div><div class="ly-clear"></div></div>';
    warr[6] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>方便的话，加一下老师微信，咱们加了好友之后呢，你可以再跟老师详细沟通你目前的丰胸困扰和身体状况，老师才能针对你的个人情帮你进行更深入的分析，这样才能帮助你更好的改善。你也可以到老师朋友圈学习一些知识技巧，让自己少走弯路。</div></div><div class="ly-clear"></div></div>';
    warr[7] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>这是老师的微信号 <span id="wx" class="wxnum"></span>  ，打开微信直接搜索添加，老师会耐心指导你正确丰胸，帮你在路上不走弯路不花冤枉钱</div></div><div class="ly-clear"></div></div>'
    warr[8] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>这是老师的微信号 <span id="wx" class="wxnum"></span>  ，打开微信直接搜索添加，老师会耐心指导你正确丰胸，帮你在路上不走弯路不花冤枉钱！</div></div><div class="ly-clear"></div></div>'

	setTimeout(function() { $('.ly-section1 .line:first')["fadeIn"](100) }, 300);
    setTimeout(function() { $('.ly-section1 .line_zizhi')["fadeIn"](100) }, 600);
    setTimeout(function() { $("#messbox")["append"](loadstr) }, 1000);
    setTimeout(function() {
        $(".loading")["fadeOut"](0);
        $(".line")["css"]('display', 'block')
    }, 3000);
    setTimeout(function() {
        $("#messbox")["append"](str1);
        window["scrollTo"](0, window["document"]["body"]["scrollHeight"])
    }, 3000);
    setTimeout(function() { $("#option_1")["fadeIn"](400) }, 3500);
    // 点击答案 
    $(".select_botton a")["click"](function() {
        var p_id = $(this).attr('data-w');
        var p_value = $(this).text();
        var wtindex=$(this).attr('wtindex');
        var index=$(this).attr('index');
        $("#msg").append(pj_html(p_value));
        window.scrollTo(0, document.body.scrollHeight);
        // 第一个答案
        if(p_id <= text.length){
            addHtml(text[p_id-1], 1000);
        }
        setTimeout(function(){
            if(wtindex < warr.length -2){
                addHtml(warr[wtindex-1], 1000);
                if(wtindex <= 5){
                    wtindex++;
                    setTimeout(function() { $("#option_" + wtindex  ).fadeIn(400) ;}, 1300);
                }
                if(index == 0){
                    setTimeout(function() { 
                        addHtml(warr[wtindex], 3000);
                        wtindex++;
                        setTimeout(function() { $("#option_" + wtindex  ).fadeIn(400) }, 3300);
                    }, 1000);
                }
            }
            // 最后一个答案选择
            if(wtindex == 7){
                if(index == 1){
                    addHtml(warr[wtindex], 1000);
                }else if(index == 2){
                    wtindex++;
                    addHtml(warr[wtindex], 1000);
                }
            }
        },1000);

        $(".select_botton").fadeOut(400)
    });

    function pj_html(str) { 
        var pzixun = '<div class="line"><div class="right"> <img src="./static/picture/header2.png" width="40px"><div><i></i> ' + str + '</div></div><div class="ly-clear"></div></div>'; 
        return pzixun 
    }

    function addHtml(S4, KdIHmU5) {
        KdIHmU5 = KdIHmU5 || 5000;
        setTimeout(function() {
            $("#msg")["append"](S4);
            if ($("#msg").find("#wx").size()) {
                $("#msg").find("#wx").text(mess2);
            }
            window["scrollTo"](0, window["document"]["body"]["scrollHeight"])
        }, KdIHmU5)
    }
})