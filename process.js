function apendText(text){
        var element = document.createElement('div');
        element.appendChild(document.createTextNode(text));
        document.body.appendChild(element);
        }

function openWeb(){
	var sys = require('sys')
	var exec = require('child_process').exec;
	var add = document.getElementById('address');
	var str = "bash /home/wt/test/test-ff/open.sh -web " + add.value; 
	var ipAndPort; 
	apendText(str);
	exec(str , function (error, stdout, stderr) {
sys.print('stdout: ' + stdout);
sys.print('stderr: ' + stderr);
if (error !== null) {
console.log('exec error: ' + error);
}
});
	setTimeout(turnToNOVNC, 2000);
}

function openDoc(){
	var sys = require('sys')
	var exec = require('child_process').exec;
	var docstr = document.getElementById('docPath');
	var str = "bash /home/wt/test/test-ff/open.sh -doc " + docstr.value;
	apendText(str);
	exec(str, function (error, stdout, stderr) {
	sys.print('stdout: ' + stdout);
	sys.print('stderr: ' + stderr);
	if (error !== null) {
	console.log('exec error: ' + error);
	}
	});
	
	setTimeout(turnToNOVNC,2000);
//window.open("novnc-autoconnnect/vnc.html");
	
}

function turnToNOVNC()
{
	var ip = document.getElementById('ip');
	var port = document.getElementById('port');
	//window.location.href="novnc-autoconnect/vnc.html?ip="+ip.value+"&port="+port.value; 
	window.open("novnc-autoconnect/vnc.html?ip="+ip.value+"&port="+port.value);
}

function getIpAndPort(IpPort,Ip,Port)
{
	
}
