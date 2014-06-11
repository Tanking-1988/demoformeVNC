//在网页中打印字符串
function apendText(text){
        var element = document.createElement('div');
        element.appendChild(document.createTextNode(text));
        document.body.appendChild(element);
        }
//点击打开网页按键响应函数
function openWeb(){
	var sys = require('sys');
	var IPv4;
	
	var exec = require('child_process').exec;
	var add = document.getElementById('address');
	var port = document.getElementById('port');
	var str = "bash ./open.sh -web " + add.value; 
	var ip = document.getElementById('ip');
	ip.value=getIp();
	apendText(str);
	exec(str , function (error, stdout, stderr) {
	sys.print('stdout: ' + stdout);
	
	apendText(stdout);
	port.value = stdout;
	port.value = portchange(port.value);
	setTimeout(turnToNOVNC, 100);
	
	sys.print('stderr: ' + stderr);
	if (error !== null) {
	console.log('exec error: ' + error);
	}
	});
	//setTimeout(turnToNOVNC, 3000);
	
}

//点击打开文档相应函数，
function openDoc(){
	var sys = require('sys')
	var exec = require('child_process').exec;
	var docstr = document.getElementById('docPath');
	var port = document.getElementById('port');
	var ip = document.getElementById('ip');
	var str = "bash ./open.sh -doc " + docstr.value;
	ip.value=getIp();//设置页面的地址
	apendText(str);
	exec(str, function (error, stdout, stderr) {
	sys.print('stdout: ' + stdout);

	port.value = stdout;
        port.value = portchange(port.value);
	setTimeout(turnToNOVNC, 100);

	sys.print('stderr: ' + stderr);	
	if (error !== null) {
	console.log('exec error: ' + error);
	}
	});
}

//带参数的页面跳转，传的参数为ip地址和端口号
function turnToNOVNC()
{
	var ip = document.getElementById('ip');
	var port = document.getElementById('port');
	var password = "demo123";
	//window.location.href="novnc-autoconnect/vnc.html?host="+ip.value+"&port="+port.value; 
	window.open("noVNC/vnc.html?host="+ip.value+"&port="+port.value+"&password="+password+"&autoconnect=true");
	//window.open("novnc-autoconnect/test.html?ip="+ip.value+"&port="+port.value);
}

//获取本机的ip地址
function getIp()
{
	var os=require('os');
	var ifaces=os.networkInterfaces();
	var IPv4;
	for(var dev in ifaces){  
    	var alias = 0;
	ifaces[dev].forEach(function(details){	
	if(details.family=='IPv4'){  
        	IPv4=details.address;
		//console.log(dev+(alias?':'+alias:''),details.address); 
		++alias;  
    		}  
	});
	}
	return IPv4;
}

//修改端口号，从vncport 到 websockify port
function portchange(port)
{
	//portNum = parseInt(port);
	//portNum = portNum + 5948;
	return "5959";
}
