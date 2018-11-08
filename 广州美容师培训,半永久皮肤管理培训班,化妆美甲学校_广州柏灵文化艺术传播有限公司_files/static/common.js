jQuery(document).ready(function() {
	/*执行图片的按需加载*/
	jQuery("img.lazy").lazyload({ 
		effect : "fadeIn" 
	});
	$(".banner img").fadeIn(2000);
	jQuery(".nav").slide({type:"menu", titCell:".nav-inner", targetCell:".navdrop", effect:"slideDown", delayTime:500, triggerTime:100,defaultPlay:false,returnDefault:true,trigger:"mouseover"}); 
	jQuery(".slideBox").slide({mainCell:".bd ul",titCell:".hd ul",autoPlay:true,autoPage:true,effect:"fold",interTime:8000,mouseOverStop:false,delayTime:600,
	startFun:function(i,c){
		var now=$(".slideBox .bd li").eq(i);
        if(now.attr("data-load")=="no"){
				now.css("backgroundImage","url("+now.attr("data-bg")+")");
				now.attr("data-load","yes");
			}
		},
	endFun:function(i,c){
		var now=$(".slideBox .bd li").eq(i+1);
        if(now.attr("data-load")=="no"){
			setTimeout(function(){
					now.attr("data-load","yes");
					now.css("backgroundImage","url("+now.attr("data-bg")+")");
				}, 3000);
			}
		}
	});
	jQuery(".nf-duibi").slide({mainCell:".nf-duibi-bd ul",titCell:".nf-duibi-hd li", delayTime:500, triggerTime:200,effect:"fold",switchLoad:"_src",}); 
	
	$(".slideBox").hover(function () {
		$(".slide-navbox li").stop().animate({height:'117px'},{queue:false, duration:300});
	}, function () {
		$(".slide-navbox li").stop().animate({height:'4px'},{queue:false, duration:300});
	});
	$('.nf-jpjs a').hover(
		function() {$("em", this).stop().animate({ bottom: '0' }, { queue: false, duration: 100 });}, 
		function() {$("em", this).stop().animate({ bottom: '-32px' }, { queue: false, duration: 100 });
	});

	$(window).scroll(function(){
		if ($(window).scrollTop()>100){
			$(".back2top").fadeIn(500);
		}
		else
		{
			$(".back2top").hide();
		}
	});
	$(".back2top").click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});
	$(".nf-baoming a").click(function(){
		$('body,html').animate({scrollTop:$(".nf-zxbm").offset().top},500);
		return false;
	});
	$("a.weixin").hover(
		function () {
			$(".weixin_code").fadeIn();
		},
		function () {
			$(".weixin_code").hide();
		}
	);
	$("a.weibo").hover(
		function () {
			$(".weibo_code").fadeIn();
		},
		function () {
			$(".weibo_code").hide();
		}
	);
	$(".nf-zxbm-slider").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:9,interTime:50,trigger:"click"});
	$(".nf-float .erweima").hover(
		function () {
			$(".nf-float .erweima ul").fadeIn();
		},
		function () {
			$(".nf-float .erweima ul").hide();
		}
	);
	$(".nf-float li.tel").hover(function(){
		var _this = $(this);
		_this.removeClass("hover").stop().animate({left : - 184}, 400)
	}, function(){
		var _this = $(this);
		_this.stop().animate({left : 0}, 400, function(){
			_this.addClass("hover")
		})
	})
	$(".nf-float li.normal").hover(function(){
		$(this).removeClass("hover").stop().animate({marginLeft : - 10}, 400)
	}, function(){
		var _this = $(this);
		_this.stop().animate({marginLeft : 0}, 400, function(){
			_this.addClass("hover")
		})
	});
	
	$(".zscx .submit").click(function(){
		var num1=$("#num1").val(),num2=$("#num2").val();
		if(num1.length<4){
			alert("第一个框字符数小于4");
			$("#num1").focus();
			return;
		}
		if(num2.length<4){
			alert("第二个框字符数小于4");
			$("#num2").focus();
			return;
		}
		$.ajax({
			url: '/zscx/index.php',
			type: 'POST',
			data: {'num1':num1,'num2':num2},
			beforeSend:function(){
				$(".zscx").html("系统正在查询中");
				$(".zscx").addClass("loading")
			},
			success: function(data){
				$(".zscx").removeClass("loading");
				$(".zscx").html(data);
			}
		});
	});
});