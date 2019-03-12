var mess1 = "";
var mess2 = "";
var span = 1; // 微信号每隔几分钟更换的周期
day = new Date()
hr = day.getHours()
m = day.getMinutes()


//随机微信
var arr_wx = ['xjkly004'];
var wx_index = Math.floor((Math.random() * arr_wx.length));
mess2 = arr_wx[wx_index];
