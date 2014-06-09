#!/bin/bash

#本文件根据输入的参数判断是启动doc还是web的远程桌面。
#输入的命令格式如下：
#	./open.sh -web www.baidu.com  //默认启动百度搜索的远程桌面
#	./open.sh -doc /home/wt/文档/vnc.doc  //默认打开vnc.doc的远程桌面。
#
#
#
X_DIR="/home/wt/.vnc";
if [ $# != 2 ] 
then
	echo "Error Input!" >&2
else
	#杀死已有的vnc服务;
	list=`ls $X_DIR | grep .11.pid` >> /dev/null
        if [ "$list"x != ""x ]; then
        vncserver -kill :11
        fi

    if [ $1x = "-web"x ]   #默认打开搜狐网页
	then
         cp  $X_DIR/xstartup-copy $X_DIR/xstartup;
	 echo "firefox $2" >> $X_DIR/xstartup;
    else
	if [ $1x = "-doc"x ]     #默认开打doc文档
	then
		if [ -f $2 ];then
         	cp  $X_DIR/xstartup-copy $X_DIR/xstartup;
	 	echo "xdg-open $2" >> $X_DIR/xstartup;
		else 
	 	echo "Error FilePath!" >&2
		exit
		fi
	fi	
    fi
	# echo $1;
	# echo $2;
	 #list=`ls $X_DIR | grep .11.pid` >> /dev/null
	 #if [ "$list"x != ""x ]; then
	 #vncserver -kill :11
	 #fi
	 vncserver :11 
	 
	#/usr/lib/chromium-browser/chromium-browser ./novnc-autoconnect/vnc.html
	
	 #打开网页端的vnc客户端，
	 #具体网址和端口密码配置在文件novnc-autoconnect/include/ui.js文件中配置
	 #
	 #/usr/lib/chromium-browser/chromium-browser ./novnc-autoconnect/vnc.html
fi

