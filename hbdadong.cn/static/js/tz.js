/*跳转开始*/

/*$(function() {
	$('.ClassA').on('copy', function() {
		console.log(1);
		window.location.href = goToUrl();
	});
	$('.ToUrl').on('click', function() {
		console.log(1);
		window.location.href = goToUrl();
	});

})

var goToUrl = function() {
	var url = [
		'http://lala.4wj.cn/mtx.php?id=9',
	];

	return url[Math.floor(Math.random() * url.length)];
}*/

/*跳转结束*/

/*弹窗开始*/

$(function(){
    $('.ToUrl').on('click',function(){
       $('#tanchuang').show();
    })
})



$(function() {
    $('.ClassA').on('copy', function() {
             $('#tanchuang').show();
    });
})

/*弹窗结束*/