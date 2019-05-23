	// 点赞
	var isLike = false;
	$(".j_favor_single").on("click", function() {
		if(!isLike) {
			$(this).children("img").attr("src", "images/top_b_like_on.html");
			//var LikeNum = parseInt($(this).children("span").html());
			//$(this).children("span").html(LikeNum + 1);
			var LikeNum = parseInt($(this).html());
			$(this).html(LikeNum + 1);
			
			isLike = true;
		} else {
			$(this).children("img").attr("src", "images/top_b_like.html");
			var LikeNum = parseInt($(this).html());
			$(this).html(LikeNum - 1);
			isLike = false;
		}
	});
	
	/*缓存*/
	$(document).ready(function(){
            LoadPlist();           
        });
        var plc = 0 ;
        function LoadPlist(){
            var plist = GC("plist").split("<!--b-->");           
            for(var a=0;a<plist.length;a++){
                if(plist[a]!=""){
                    var cont = plist[a].split('<!--a-->')[0];
                    var date = plist[a].split('<!--a-->')[1];
                    Show(cont,date);                    
                }
            }

             $("#comment_2").click(function(){
                if(plc>=3){
                    alert('请勿频繁评论。');return false;
                }
                var cont = $("#content").val();
                if(cont==""){
                    alert("请输入评论内容");return;
                } 
                var date = new Date().Format("yyyy-MM-dd hh:mm:ss");
                Show(cont,date);
                //alert("提交成功，请等待管理员审核。");
                SC("plist", GC("plist") +cont+"<!--a-->"+date +"<!--b-->");
            });
        }

        function Show(cont,date){
			var el = "<div class='cmnt_item'><p class='cmnt_top'><span><img src='1.gif'><i class='cmnt_nick'>匿名网友</i></span></p>"
			+"<p class='cmnt_text'>"+cont+"</p><div class='cmnt_op_bottom clearfix'><p class='cmnt_op_bottom_times'>"+date+"</p><span class='cmnt_op'><a data-sudaclick='comment2_2' href='javascript:void(0);' title='赞' class='good j_favor_single ui-link'>0</a><a href='javascript:void(0);' title='评论' class='cmntico j_cmnt_single ui-link' data-sudaclick='comment1_2'></a></span>";
			
                $(".commentbox").last().before(el);plc+=1;
				
        }
        function SC(n, v) {
            var dt = new Date();
            dt.setTime(dt.getTime() + (99 * 24 * 60 * 60 * 1000));
            var e = "expires=" + dt.toUTCString();
            document.cookie = n + "=" + v + "; " + e;
        }
        function GC(n) {
            var m = n + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(m) != -1) return c.substring(m.length, c.length);
            }
            return "";
        }
		 Date.prototype.Format = function (fmt) {  
            var o = {
                "M+": this.getMonth() + 1,  
                "d+": this.getDate(),  
                "h+": this.getHours(), 
                "m+": this.getMinutes(), 
                "s+": this.getSeconds(), 
                "q+": Math.floor((this.getMonth() + 3) / 3), 
                "S": this.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
		