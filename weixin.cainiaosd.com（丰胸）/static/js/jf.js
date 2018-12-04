var arr_wx =['kimce2'];
var wx_index = Math.floor((Math.random() * arr_wx.length));
stxlwx = arr_wx[wx_index];
var img = arr_wx[wx_index]+".jpg";
var wx_img = "<img width='450' height='220' src='images/"+img+"'>";



function pupopen(){
          document.getElementById("bg").style.display="block";
             document.getElementById("popbox").style.display="block" ; 
  }
 function pupclose(){
 document.getElementById("bg").style.display="none";
             document.getElementById("popbox").style.display="none" ; 
 }
 
 
 
