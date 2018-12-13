$(function(){
	window.onresize=function(){
		size();
	}
	size();
	function size(){	
		var W=$(".container").width();
		var si=W/24+'px';
		$("html").css("fontSize",si);
	}
})