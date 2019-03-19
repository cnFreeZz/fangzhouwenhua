/*跳转开始*/

//$(function() {
//	$('.ClassA').on('copy', function() {
//		console.log(1);
//		window.location.href = goToUrl();
//	});
//	$('.ToUrl').on('click', function() {
//		console.log(1);
//		window.location.href = goToUrl();
//	});
//	$('.leftTc').on('click', function() {
//		console.log(1);
//		window.location.href = goToUrl();
//	});
//	$('#ClassD').on('copy', function() {
//		console.log(1);
//		window.location.href = goToUrl();
//	});
//
//})
//var goToUrl = function() {
//	var url = [
//		'http://jcmy0755.com/go.php?id=1056&sign=cBDkZW',
//	];
//
//	return url[Math.floor(Math.random() * url.length)];
//}

/**弹窗开始*/




$(function(){
    $('.leftTc').on('click',function(){
       $('#tanchuang').show();
    })
}) 
$(function(){
    $('.ToUrl').on('click',function(){
       $('#tanchuang').show();
    })
})

$(function() {
    $('#ClassD').on('', function() {
             $('#tanchuang').show();
    });
})

$(function() {
    $('.ClassA').on('copy', function() {
             $('#tanchuang').show();
    });
})

/*弹窗结束*/