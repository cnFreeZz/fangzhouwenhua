﻿
	var wangzhi = window.location.href;
	var da=[];
	var loadbtnstr=[];
	var btnarr=[];
	var csarr=[];
	var warr=[];
	var text=[];
	loadbtnstr[0]='<div class="btnbox w100"><button>稍等……</button></div>';
	loadbtnstr[1]='<div class="btnbox w100"><button>请稍候，正在为您生成结果……</button></div>';
	text[0]='您已完成全部自测答题，请及时添加范老师微信： <span id="wx" onclick="jwx()" name="notweixin"></span> (点击复制)，了解试管婴儿受孕成功率，获取泰国试管婴儿报价。';
	text[1]='您的手机号码我们已收到，稍后我们的老师会电话通知您自测分析检测结果；或直接添加专家微信：<span style="color:red;"></span>，随时咨询专家！';
	btnarr[0]='<div class="btnbox w100"><button class="btn" index="1" wtindex="0">开始</button><p style="text-align:center;font-size: 16px;color: #0D0D0D;line-height: 1;margin-top: 12px;width: 480px;margin-left: -9px;font-size:12px;color:#ccc"></p></div>';
	btnarr[1]='<div class="btnbox w50"><button class="btn" index="2" wtindex="1">是</button></div><div class="btnbox w50"><button class="btn" index="2" wtindex="1">否</button></div>';
	btnarr[2]='<div class="btnbox w33"><button class="btn" index="3" wtindex="2">30岁以下</button></div><div class="btnbox w33"><button class="btn" index="3" wtindex="2">30岁以上</button></div>';
	btnarr[3]='<div class="btnbox w50"><button class="btn" index="4" wtindex="3">否</button></div><div class="btnbox w50"><button class="btn" index="4" wtindex="3">是</button></div>';
	btnarr[4]='<div class="btnbox w33"><button class="btn" index="5" wtindex="4">输卵管堵塞</button></div><div class="btnbox w33"><button class="btn" index="5" wtindex="4">其它</button></div>';
	btnarr[5]='<div class="input-group">老师微信号  <span id="wx" onclick="jwx()" name="notweixin"></span>(点击复制)  <a id="touch" class="touch"  onclick="gowechat()" data-clipboard-action="copy" data-clipboard-target="#wx">去微信</a></div>';
	btnarr[9]='<ul class="lsbtn">';
	btnarr[9]+="<li>您已提交成功！我们将尽快与您联系！</li>";

	btnarr[9]+='</ul>';
	warr[0]='是否了解过试管婴儿？';
	warr[1]='您的年龄是？';
	warr[2]='之前有过宝宝吗？';
	warr[3]='做试管婴儿的原因是？';
csarr[0]='女性输卵管闭塞、多囊卵巢综合症、积水、粘连、子宫内膜异位症、免疫性不育;男性少精、精液少、弱，或者不适合做人工授精的,<span style="color:#f00">都通过试管婴儿成功受孕！</span>';
	csarr[1]='那么，您是否适合用试管婴儿生个健康宝宝？试管婴儿的报价又是多少呢？点击开始，进行自测。。';
	csfun();
	appendbtn(0);
	function csfun(){
		for(var i=0;i<8;i++){
			da[i]=0;
		}
		var str="";
		$("#wdcon").empty();
		for(var i=0;i<csarr.length;i++){
			str='<div class="box">';
			str+='<div class="left">';
			str+='<img src="_files/left.jpg">';
			str+='</div>';
			str+='<div class="right">';
			str+='<div class="con"><span class="sjx"></span>'+csarr[i]+'</div>';
			str+='</div>';
			str+='<div class="clear"></div>';
			str+='</div>';
			$("#wdcon").append(str);
		}
	}
	function appendbtn(index){
		$("#wdfixbom").empty();
		$("#wdfixbom").append(btnarr[index]);
		if ($("#wdfixbom").find("#wx").size()) {
			$("#wdfixbom").find("#wx").text(mess2);
		}
	}
	function apphzlt(text){
		var str='<div class="hzbox">';
		str+='<div class="left">';
		str+='<img src="_files/right.jpg">';
		str+='</div>';
		str+='<div class="right">';
		str+='<div class="con"><span class="sjx"></span>'+text+'</div>';
		str+='</div>'
		str+='<div class="clear"></div>';
		str+='</div>';
		$("#wdcon").append(str);
		var height=$(document).height() - $(window).height();
		if(!($(document).scrollTop() >= height)){
			var h=$(document).scrollTop()+height
			$('body,html').animate({ 
			 	scrollTop: h
			},500);
		}
	}
	function appyslt(text){
		//alert(text);//老师的问题
		var str='<div class="box">';
		str+='<div class="left">';
		str+='<img src="_files/left.jpg">';
		str+='</div>';
		str+='<div class="right">';
		str+='<div class="con"><span class="sjx"></span>'+text+'</div>';
		str+='</div>';
		str+='<div class="clear"></div>';
		str+='</div>';
		$("#wdcon").append(str);
		if ($("#wdcon").find("#wx").size()) {
			$("#wdcon").find("#wx").text(mess2);
		}
		var height=$(document).height() - $(window).height();
		
		if(!($(document).scrollTop() >= height)){
			var h=$(document).scrollTop()+height
			$('body,html').animate({ 
			 	scrollTop: h
			},500);
		}
	}
	function loadbtn(index){
	
		$("#wdfixbom").empty();
		$("#wdfixbom").append(loadbtnstr[index]);
	}
	function ajaxdata(){

		var wangzhi = window.location.href;        	
        var cityname="name=xinxiliu";
        var yiyuan = "xa_全国";
        var sex = warr[0]+da[0];
		var ttzz = warr[1]+da[1];
		var blxx = warr[2]+da[2];
		var wlxx = warr[3]+da[3];
		var gjsx = warr[4]+da[4];
		var sfjc = warr[5]+da[5];
		var subtel =da[7];
		var subtext ="问题1：" + sex + "&nbsp;&nbsp;&nbsp;问题2：" + ttzz + "<br>问题3：" + blxx + "&nbsp;&nbsp;&nbsp;问题4：" + wlxx;
		// openZoosUrl('chatwin','&e='+escape('信息流:<br/>电话：'+subtel+'<br/>内容:'+ subtext));
		return subtext;

	}
	$("#wdfixbom .btn").live('click',function(){
		var wtindex=$(this).attr('wtindex');
		var index=$(this).attr('index');
		apphzlt($(this).html());
		loadbtn(0);
		da[wtindex-1]=$(this).html();
		/*alert(da[wtindex-1]);//答案*/

		setTimeout(function(){
			appendbtn(index);
			if(wtindex<=warr.length-1){
				appyslt(warr[wtindex]);
				/*alert(warr[wtindex]);//wenti*/
			}else{
				appyslt(text[0]);
				setTimeout(function(){
                    $(".cmnt_text").find("#wx").text(mess2);
					$(".input_wrap").show();
					var h=$("#wdcon").children('div:last-child').height()+80;
					$('html, body').animate({
		                scrollTop: $(".input_wrap").offset().top-h
		            }, 1000);
				},1000);
			}
		},1000);
	});
	$("#telbtn").live('click',function(){
		var telname=$("#telname").val();
		//alert(telname);//电话号码
		var index=$(this).attr('index');
		if(telname==''){
			alert('电话或微信不能为空！');
		}else{
			da[index-2]=telname;
			loadbtn(1);
			apphzlt(telname);
			setTimeout(function(){
				appendbtn(index);
				appyslt(text[1]);
				// ajaxdata();
			},1000);
		}
	});
	$("#start").live('click',function(){
		appendbtn(0);
		csfun();
	})
