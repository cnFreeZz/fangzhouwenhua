
//浜嬩欢
var wburl    = 'url';
if (window.location.pathname + window.location.search){
    wburl = window.location.pathname + window.location.search;
}

// 鍘诲井淇�
function gowechat(xw,dz){  
    location.href="weixin://";
}
// 鎵撳紑寰俊
function openlayer(xw,dz){
    // location.href="weixin://";
}

// 鏀瑰彉灞炴€�
function change() {
    document.getElementById("layer_p2").className="shanshuo"
    document.getElementById("ewm").className="wxh shan"
    document.getElementById('layer_p2').innerHTML = "鈫撯啌璇峰厛闀挎寜澶嶅埗寰俊鍙封啌鈫�";
    alert("ok")
    // document.getElementById("left-arrow").style.display="block";
    // document.getElementById("right-arrow").style.display="block";
}  

//鏀瑰彉灞炴€�2
function change2() {
    openwechat('鐐瑰嚮鎸夐挳','寰俊鍥炬爣');
}       

// 澶嶅埗 
function copywechat(xw,dz){
    $('#change').attr('attr-data','1');
    $('#change').attr('src','images/wxt.gif');
}

function openwechat(xw,dz){
    var div = document.getElementById('qq_Mask1');
    div.style.cssText='display:block;';
}

$(function(){
    var n = 0;
    var tiao = 2;
    $('#change').click(function(){
        location.href="weixin://";
    });
    $('.btnlick').click(function(){
        console.log(333);
        location.href="weixin://";
    })
})


//寮圭獥

$(document).ready(function () {
    $("#aniu").click(function () {
        $("#layer").fadeIn();
        // openlayer('寮圭獥','鍦ㄧ嚎鍜ㄨ');
    });
    $("#aniu2").click(function () {
        $("#layer").fadeIn();
        // openlayer('寮圭獥','鍦ㄧ嚎鍜ㄨ2');
    });
    $("#aniu3").click(function () {
        $("#layer").fadeIn();
        // openlayer('寮圭獥','鍦ㄧ嚎鍜ㄨ3');
    });

    $("#yhq").click(function () {
        $("#yhq_Mask").fadeIn();
        // openlayer('寮圭獥','浼樻儬鍒�');
    });

    var n = 0;
    $(".close").click(function () {
        n = n + 1;
        document.getElementById("layer_p2").className=""
        $('#change').attr('attr-data','0');
        $("#layer,#layer1").fadeOut();
        if(n < 1){
            setTimeout(function(){
                $("#layer,#layer1").fadeIn();
            },100)
        }else{
            n = 1;
        }
    });
});
//寮圭獥end 

