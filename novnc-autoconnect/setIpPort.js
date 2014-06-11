function setIpPort(){
//从URL中获取查询字符串，参数名称转换为大写
var URLParams = new Array();
var aParams = document.location.search.substr(1).split('&');
for (i=0; i < aParams.length ; i++){
       var aParam = aParams[i].split('=');
       URLParams[aParam[0].toUpperCase()] = aParam[1];
       }
document.getElementById("noVNC_host").value = URLParams["IP"];
document.getElementById("noVNC_port").value = URLParams["PORT"];
//alert("ip="+ipstr+" port="+portstr);
//var ip = document.getElementById("noVNC_host");
//var port = document.getElementById("noVNC_port");
//ip.value = ipstr;
//port.value = portstr;
//UI.connect();
}
//这样需要哪个参数，就用以下方法取得：
//var1=URLParams["N"];
//var2=URLParams["M"];
