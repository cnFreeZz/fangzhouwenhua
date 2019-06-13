 var mess1 = "";
var mess2 = "";
var span =1; // 微信号每隔几分钟更换的周期
day = new Date()
hr = day.getHours()
m = day.getMinutes()

// 微信号定义，格式：前面时间，后面按照微信间隔排列 的微信号。
var arr = {
	// 晚上12点 到 早上6点
	"0~8": [

"HYJKGJ003",
"HYJKGJ003"









	],

	"8~24": [

"HYJKGJ003",
"HYJKGJ003"












	]
}

// 根据时间定义，【入口】
for (var name in arr) {
	var strs = name.split('~');
	
	if(strs.length!=2){
/*		alert("定义格式："+name+"，不是有效的时间格式。");
*/		break;
	}

	var l = parseInt(strs[0]);
	var r = parseInt(strs[1]);

	// 满足时间条件
	if (hr >= l && hr < r) {
		mess2 = getWXNumber(arr[name]);
	}

}

// 根据时间获取微信号
function getWXNumber(arr) {

	

	// 16 -> 4
	// 1\获取当前时间在哪一个周期内。

	var index = -1;

	for (var i = 0; i < 60; i++) {

		var ys = i % span;
		if (ys == 0) {
			index++;

		}

		if (i == m) {
			break;
		}

	}

	// 判断是否超出了，数组，如果是，则循环
	var len = arr.length;
	var sindex = index + 1;

	// 获取循环后的索引
	if (sindex > len) {

		// 计算需要循环多少轮
		var l = Math.ceil(sindex / len);

		var k = len - (l * len - sindex) - 1;

		index = k < 0 ? 0 : k;
		return arr[index];

	} else if (index < 0) {
		return arr[0];
	} else {
		return arr[index];
	}

}