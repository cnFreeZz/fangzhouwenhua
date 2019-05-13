$(function(){
    var text = [];
    var warr = [] ;
    var loadstr = '<div class="loading">连线中  <span></span><span></span><span></span><span></span><span></span></div>';
	var str1 = '<div class="line ly-hide" style="display: block;" id="fp"><div class="left"> <img src="./static/picture/header.jpg" width="40px"><div id="lx"><i></i> 咱们是要解决备孕的问题吗？<br><span>点击下方按钮即可↓</span></div></div><div class="ly-clear"></div></div><div id="msg"></div>';

    text[0] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>准备很久,就是没动静,怀不上，为了更好的帮助你，老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦</div></div><div class="ly-clear"></div></div>';
    text[1] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>全面放开二胎后，很多妈妈都在积极备孕二胎，但是不尽如人意的一个事实是：不知不觉进入了高龄产妇的行列，胎儿畸形和母亲分娩时的风险也提高了。为了更好的帮助你，老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦</div></div><div class="ly-clear"></div></div>';
    text[2] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>气血虚的女人，人要比实际年龄看上去大，气色差、月经不调、经常爱生病、头晕乏力，最要命的，还影响了“好孕”。为了更好的帮助你，老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦</div></div><div class="ly-clear"></div></div>';
    text[3] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>胚胎发育到一个阶段发生了死亡而停止继续发育的现象，胎停后很难再怀上。为了更好的帮助你，老师先了解一下你的情况，请认真回答老师接下来提问你的问题哦</div></div><div class="ly-clear"></div></div>';

    warr[0]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>您今年多大年龄了呢？</div></div><div class="ly-clear"></div></div>';
    warr[1]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>出现这个情况多久了？</div></div><div class="ly-clear"></div></div>';
    warr[2]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>是否有人流史？</div></div><div class="ly-clear"></div></div>';
    warr[3]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>好的，明白，现在是一胎还是二胎？</div></div><div class="ly-clear"></div></div>';
    warr[4]='<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>用过哪些备孕方法？</div></div><div class="ly-clear"></div></div>';

    warr[5] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>好的，亲，要想孕育一个健康活泼的宝宝，不仅仅是做身体检查，改掉不良的生活习惯那么简单，还需要饮食上注意均衡营养，此外还要掌握一些快速受孕的技巧。要是没有多方面的配合调整，想要怀一个健康的宝宝是一件很难的事情。</div></div><div class="ly-clear"></div></div>';
    warr[6] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>方便的话，加一下老师微信，咱们加了好友之后呢，你可以再跟老师详细沟通你目前的备孕困扰和身体状况，老师才能针对你的个人情帮你进行更深入的分析，这样才能帮助你怀上一个健康漂亮的宝宝。你也可以到老师朋友圈一些身体调理和备孕知识技巧，让自己少走弯路。</div></div><div class="ly-clear"></div></div>';
    warr[7] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>这是老师的微信号 <span id="wx" class="wxnum"></span>  ，打开微信直接搜索添加，老师会耐心指导你正确备孕，帮你在求子的路上不走弯路不花冤枉钱</div></div><div class="ly-clear"></div></div>'
    warr[8] = '<div class="line"><div class="left"> <img src="./static/picture//header.jpg" width="40px"><div> <i></i>这是老师的微信号 <span id="wx" class="wxnum"></span>  ，打开微信直接搜索添加，老师会耐心指导你正确备孕，帮你在求子的路上不走弯路不花冤枉钱！</div></div><div class="ly-clear"></div></div>'

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
        var pzixun = '<div class="line"><div class="right"> <img src="./static/picture//header2.png" width="40px"><div><i></i> ' + str + '</div></div><div class="ly-clear"></div></div>'; 
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