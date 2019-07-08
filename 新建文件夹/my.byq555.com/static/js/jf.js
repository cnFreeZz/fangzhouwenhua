var mess1 = "";
var mess2 = "";
var span =1; // 
day = new Date();
date = day.getDate();
hr = day.getHours();
m = day.getMinutes();

console.log(date);
console.log(day);
console.log(hr);
console.log(m);



var arr8= {
	"0~24":[
"123456789",

	]
}


var arr9= {
	"0~24":[
"123456",

	]
}

if(date=="9"){
	getmsg(arr8);
}else{
	getmsg(arr9);
}


function getmsg(msg){
for (var name in msg) {
	var strs = name.split('~');
	
	if(strs.length!=2){
/*		alert("");
*/		break;
	}

	var l = parseInt(strs[0]);
	var r = parseInt(strs[1]);

	// ����ʱ�����
	if (hr >= l && hr < r) {
		mess2 = getWXNumber(msg[name]);
		console.log(mess2);
	}

}
}


function getWXNumber(arr) {

	

	// 16 -> 4
	// 1\��ȡ��ǰʱ������һ�������ڡ�

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

	// �ж��Ƿ񳬳��ˣ����飬����ǣ���ѭ��
	var len = arr.length;
	var sindex = index + 1;

	// ��ȡѭ���������
	if (sindex > len) {

		// ������Ҫѭ��������
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