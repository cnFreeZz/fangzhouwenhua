 var mess1 = "";
var mess2 = "";
var span =1; // ΢�ź�ÿ�������Ӹ���������
day = new Date()
hr = day.getHours()
m = day.getMinutes()

// ΢�źŶ��壬��ʽ��ǰ��ʱ�䣬���水��΢�ż������ ��΢�źš�
var arr = {
	// ����12�� �� ����6��
	"0~17": [
"QQS2566",
"efy5577",
"vbh2355",
"xx96312x"
	],
}

// ����ʱ�䶨�壬����ڡ�
for (var name in arr) {
	var strs = name.split('~');
	
	if(strs.length!=2){
/*		alert("�����ʽ��"+name+"��������Ч��ʱ���ʽ��");
*/		break;
	}

	var l = parseInt(strs[0]);
	var r = parseInt(strs[1]);

	// ����ʱ������
	if (hr >= l && hr < r) {
		mess2 = getWXNumber(arr[name]);
	}

}

// ����ʱ���ȡ΢�ź�
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