
var floorIndex=[],cont=[];
var l=$('.x-floor').length;

$('.x-floor').each(function(){
    floorIndex.push($(this).offset().top);
});
floorIndex[l] = 0;
//$('.floor-item').each(function () {
//    var i=$(this).index();
//    cont.push($(".floor-item").eq(i).find('.floor-tip').text());
//});


$('.floor-item').on('click',function(){
    $(window).off('scroll',AutoScroll);
    $(this).addClass('active').siblings().removeClass('active');
        if(floorIndex[$(this).index()] == 0) {
            $('html, body').stop().animate({scrollTop: 0}, 500,function(){
                $(".left_slide").fadeOut();
                $(window).on('scroll',AutoScroll);
            })
        }else {
            $('html, body').stop().animate({scrollTop: (floorIndex[$(this).index()])-50}, 1000,function(){
                $(window).on('scroll',AutoScroll);
            })
        }
    }
);

$(window).on('scroll',AutoScroll);

function AutoScroll(){
    //console.log(1);
    var scollValue = $(document).scrollTop(),
        sideTop = $('.left_slide').position().top;
    var rzTop = $('.offFloor').offset().top;
    //console.log(scollValue>(floorIndex[0]-250));
    scollValue>(floorIndex[0]-250)?$(".left_slide").fadeIn():$(".left_slide").fadeOut();
    $('.floor-item').removeClass('active');
    if(scollValue>floorIndex[0]-sideTop){
        for(var i=0;i<floorIndex.length-1;i++){
            if(scollValue>(floorIndex[i]-sideTop)){
                $('.floor-item').eq(i).addClass('active').siblings().removeClass('active');
            }
        }
    }
    if(scollValue > rzTop){
        $('.floor-item').removeClass('active');
    }

}
