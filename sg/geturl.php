<?php
date_default_timezone_set("PRC");
$ip = $_POST["ip"];
$wxh = $_POST["wxh"];
$keyword = $_POST["keyword"];
$wd = $_POST["wt"];
// 1、连接数据库
$link = @mysqli_connect('','','');

$city = file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip='.$ip);

$city = json_decode($city,true);
$city =  $city['data']['country'].$city['data']['region'].$city['data']['city'];



// 2、成功与否判断
if (!$link) {
exit('error('.mysqli_connect_errno().'):'.mysqli_connect_error());
//die
}
// 3、选择数据库
if (!mysqli_select_db($link,'qibang.vshoutao.com')) {
echo 'error('.mysqli_errno($link).'):'.mysqli_error($link);
mysqli_close($link);
die;
}
// 4、设置字符集
mysqli_set_charset($link,'utf8');
// 5、准备SQL语句
$sql = "insert into st_haishen(ip,time,wxh,city,keyword,wd) values('".$ip."','".date('Y-m-d H:i:s')."','".$wxh."','".$city."','".$keyword."','".$wd."')";


// 6、执行SQL语句
$result = mysqli_query($link,$sql);
