$(function(){
	var wangzhi = window.location.href;
	var da=[];
	var loadbtnstr=[];
	var btnarr=[];
	var csarr=[];
	var warr=[];
	var text=[];
	loadbtnstr[0]='<div class="btnbox w100"><button>稍等……</button></div>';
	loadbtnstr[1]='<div class="btnbox w100"><button>请稍候，正在为您生成结果……</button></div>';
	text[0]='您已完成全部自测答题，请在下方输入框内留下您的微信号码，待3分钟后自测分析检测结果出来自动通知您！或者直接添加曾妈妈微信：<b><span style="color:red;" class="wx_code"></span></b>（←长按微信号可以复制/拷贝，再去微信添加好友）！免费获取调理方案';
	text[1]='您的信息我们已收到，稍后曾妈妈会添加您的微信通知您自测分析检测结果；或直接添加曾妈妈微信：<b><span style="color:red;" class="wx_code"></span></b> （←长按微信号可以复制/拷贝，再去微信添加好友），咨询曾妈妈吃阿胶应该怎么调理，怀上健康宝宝的问题！';
	btnarr[0]='<div class="btnbox w100"><button class="btn" index="1" wtindex="0">开始</button></div>';
	btnarr[1]='<div class="btnbox w50"><button class="btn" index="2" wtindex="1">异常</button></div><div class="btnbox w50"><button class="btn" index="2" wtindex="1">正常</button></div>';
	btnarr[2]='<div class="btnbox w33"><button class="btn" index="3" wtindex="2">24以下</button></div><div class="btnbox w33"><button class="btn" index="3" wtindex="2">含24以上</button></div>';
	btnarr[3]='<div class="btnbox w50"><button class="btn" index="4" wtindex="3">1年以下</button></div><div class="btnbox w50"><button class="btn" index="4" wtindex="3">含1年以上</button></div>';
	btnarr[4]='<div class="btnbox w33"><button class="btn" index="5" wtindex="4">有</button></div><div class="btnbox w33"><button class="btn" index="5" wtindex="4">没有</button></div>';
	btnarr[5]='<div class="btnbox w50"><button class="btn" index="6" wtindex="5">有</button></div><div class="btnbox w50"><button class="btn" index="6" wtindex="5">没有</button></div>';
	btnarr[6]='<div class="btnbox w50"><button class="btn" index="7" wtindex="6">长</button></div><div class="btnbox w50"><button class="btn" index="7" wtindex="6">不长</button></div>';
	btnarr[7]='<div class="input-group"><input type="text" id="telname" value="" placeholder="请填写您的微信号"><button class="tel" id="telbtn" index="9">提交</button></div>';
	btnarr[9]='<div class="lsbtn" style="text-align:center">';
	btnarr[9]+='温馨提示：曾妈妈朋友圈有很多吃阿胶调理&保养的方法';
	btnarr[9]+='</div>';
	warr[0]='目前月经周期是否正常？';
	warr[1]='您的年龄是?';
	warr[2]='您备孕时间多久了？';
	warr[3]='来月经时有没有痛经？';
	warr[4]='您有没有手脚冰凉的情况？';
	warr[5]='您身体的毛发长不长（胡须，胳膊）？';
	csarr[0]='为什么女人备孕要吃阿胶，十个女人九个寒，寒气会引发湿气，形成瘀、堵，转化各种肿瘤，百病之 源就在寒，而气血不足就是寒湿堆积的基本条件。阿胶可以调理血气不足，调理后让你怀上容易';
	csarr[1]='那么，备孕的你适合吃阿胶吗？你可以按下【开始】之后，根据自身症状选择相应的答案。点击开始，进行自测。';
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
			str+='<img src="images/wdys.jpg">';
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
	}
	function apphzlt(text){
		var str='<div class="hzbox">';
		str+='<div class="left">';
		str+='<img src="images/person.png">';
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
		//alert(text);//医生的问题
		var str='<div class="box">';
		str+='<div class="left">';
		str+='<img src="images/wdys.jpg">';
		str+='</div>';
		str+='<div class="right">';
		str+='<div class="con"><span class="sjx"></span>'+text+'</div>';
		str+='</div>';
		str+='<div class="clear"></div>';
		str+='</div>';
		//var oStr = $(str);

		$("#wdcon").append(str);
		if ($("#wdcon").find(".wx_code").size()) {
			$("#wdcon").find(".wx_code").text(mess2);
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
        var cityname="（美柚阿胶渠道）";
        var yiyuan = "阿胶自测";
        var sex = warr[0]+da[0];
	 	var ttzz = warr[1]+da[1];
	 	var blxx = warr[2]+da[2];
	 	var wlxx = warr[3]+da[3];
	 	var gjsx = warr[4]+da[4];
	 	var sfjc = warr[5]+da[5];
	 	var subtel =da[7];
	 	var subtext ="问题1：" + sex + "|||||||||问题2：" + ttzz + "|||||||||问题3：" + blxx + "|||||||||问题4：" + wlxx + "|||||||||问题5：" +  gjsx + "|||||||||问题6：" + sfjc;
	 	$.getJSON( 
              'php/post.php?yiyuan='+yiyuan+'&cityname='+cityname+'&subtel='+subtel+'&subtext='+subtext+'&wangzhi='+wangzhi+'&callback=?',
             function(data){
               if(data.code==1){
	          	
	            
               }else{
                 alert('抱歉您的信息提交失败!请检查您的信息是否提交正确!');
                 window.location.reload();
               }
             })
	 	layer.open({content: '您已提交成功!我们将尽快与您联系!',skin: 'msg',time:2});

	 }

	//function submit11(){
	//	layer.open({content: '您已提交成功!我们将尽快与您联系!',skin: 'msg',time:2});
	//}
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

			}
		},1000);
	});
	$("#telbtn").live('click',function(){
		var telname=$("#telname").val();
		//alert(telname);//电话号码
		var index=$(this).attr('index');
		if(telname==''){
			//layer.alert('电话或微信不能为空！');
			layer.open({content: '请填写微信号 微信不能为空！',skin: 'msg',time:2});
		}else{
			da[index-2]=telname;
			loadbtn(1);
			apphzlt(telname);
			setTimeout(function(){
				appendbtn(index);
				appyslt('<div>'+text[1]+'</div>');
				ajaxdata();
			},1000);
		}
	});
	$("#start").live('click',function(){
		appendbtn(0);
		csfun();
	})
})