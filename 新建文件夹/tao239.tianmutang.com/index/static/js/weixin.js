arr_wx=['123456','1234567']; 
var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx =   arr_wx[wx_index] ;
  
  

/* 			$(document).ready(function() {
				var wx1 = document.getElementsByClassName('weixinid');
				for(var i = 0, len = wx1.length; i < len; i++) {
					wx1[i].innerHTML = stxlwx;
				};
			});


*/
 $(function(){


     $(".notweixin").bind('copy', function() {  
	
	
window.location.href="weixin://";


});  
 });
 
function addip(weixin, type, mod) {
 
    $.getJSON("", { type: type, mod: mod, wx: weixin }, function (data) {
        console.log(data);
    });
}


