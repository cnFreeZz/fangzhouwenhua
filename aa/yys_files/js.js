

(function (doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  docEl.style.fontSize = 40 * (clientWidth / 640) + 'px';
  if(clientWidth>640)docEl.style.fontSize = 40+ 'px';
//  alert(clientWidth);
}
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function() {

// 第一题
var question_1 = '',
	question_2 = '',
	question_3 = '',
	question_4 = '',
	Last_question = '';
$("#first li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on");
	// question_1 = $(this).html();
	question_1 = $(this).attr("data");
	mySwiper.slideNext();
});

// 第二题
$("#second li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on");
	// question_2 = $(this).html();
	question_2 = $(this).attr("data");
	mySwiper.slideNext();
});

// 第三题
$("#third li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on");
	// question_3 = $(this).html();
	question_3 = $(this).attr("data");
	mySwiper.slideNext();
});
// 第四题
$("#fourth li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on");
	// question_4 = $(this).html();
	question_4 = $(this).attr("data");
});

// 点击提交弹出对应编号
$("#submit_btn").on("click", function() {
	if(question_4 == "") {
		alert("请告诉我们您目前对丰胸的态度！");
		return;
	}
	Last_question = question_1 + question_2 + question_3 + question_4;
	$("#Mask .Mask_txt .num").html('加好友验证时填写丰胸编号"<span class="col_pink">'+Last_question+'</span>"');
	$("#Mask").fadeIn(400);
});

$(".top_r,.bottom_btn,.Link").on("click", function () {
	$("#Mask").fadeIn(400);
});


// 点击关闭按钮关闭遮罩层并且将测试返回第一题
$("#Mask .close_Mask").on("click", function() {
	$("#Mask").fadeOut(400);
	mySwiper.slideTo(0);
});

// 点击上一题
$(".prev").on("click", function() {
	mySwiper.slidePrev();
});

// 导航切换
$(".menu li").on("click", function() {
	$(this).addClass("on").siblings().removeClass("on");
	var TabIndex = $(this).index();
	if(TabIndex == 0) {
		$("#case").fadeIn(400);
		$("#comment").fadeOut(400);
	} else {
		$("#comment").fadeIn(400);
		$("#case").fadeOut(400);
	}
});
$(".btnWx").on("click", function() {
		$("#comment").fadeIn(400);
		$("#case").fadeOut(400);
		$("#tab2").addClass("on")
		$("#tab1").removeClass("on")
		$(document).scrollTop(0);	
});

var isPlay = false;

// 点击播放语音
$(".voice").click(function() {
	if(!isPlay) {
		AudioPlay($(this), ".voice_pic");
		isPlay = true;
	} else {
		AudioPause($(this), ".voice_pic");
		isPlay = false;
	}
});

$(".M_voice").on("click", function() {
	if(!isPlay) {
		AudioPlay($(this), ".Middle_voice");
		isPlay = true;
	} else {
		AudioPause($(this), ".Middle_voice");
		isPlay = false;
	}
});

$(".audio_bottom").on("click", function() {
	if(!isPlay) {
		AudioPlay($(this), ".bottom_voice");
		isPlay = true;
	} else {
		AudioPause($(this), ".bottom_voice");
		isPlay = false;
	}
});

// 音频播放函数
function AudioPlay(obj, obj_voice) {
	obj.children("audio").get(0).play();
	obj.children("em,i").fadeOut();
	obj.children(obj_voice).addClass("on");
}
// 音频暂停且当前时间设为0函数
function AudioPause(obj, obj_voice) {
	obj.children("audio").get(0).pause();
	obj.children("audio").get(0).currentTime = 0;
	obj.children(obj_voice).removeClass("on");
}

// 点赞
var isLike = false;
$(".top_b_like").on("click", function() {
	if(!isLike) {
		$(this).children("img").attr("src", "images/top_b_like_on.png");
		var LikeNum = parseInt($(this).children("span").html());
		$(this).children("span").html(LikeNum + 1);
		isLike = true;
	} else {
		$(this).children("img").attr("src", "images/top_b_like.png");
		var LikeNum = parseInt($(this).children("span").html());
		$(this).children("span").html(LikeNum - 1);
		isLike = false;
	}
});

// 点击评论区小图放大到整屏显示
$(".user_Pic li").on("click", function() {
	var PicLength = $(this).parent().children('li').length;
	$(this).parent().children('li').each(function() {
		var PicId = $(this).attr('id');
		$("#thumb .swiper-container .swiper-wrapper").append("<div class='swiper-slide'><imgimages/" + PicId + ".jpg'/></div>");
	});
	$("#thumb").fadeIn(400);
});

$("#thumb .thumb_close").click(function() {
	$("#thumb").fadeOut(400);
	$("#thumb .swiper-container .swiper-wrapper").html('');
});

$(".qq_Mask .close_Mask").click(function() {
	$(".qq_Mask").fadeOut(400);
});

$(".bottom_btn,.Link,.top_l").click(function() {
	$(".qq_Mask").fadeIn(400);
});


});

