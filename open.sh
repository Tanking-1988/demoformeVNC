#!/bin/bash

#本文件根据输入的参数判断是启动doc还是web的远程桌面。
#输入的命令格式如下：
#	./open.sh -web www.baidu.com  //默认启动百度搜索的远程桌面
#	./open.sh -doc /home/wt/文档/vnc.doc  //默认打开vnc.doc的远程桌面。
#

WEBSOCKIFY_PORT="5959"
VNC_PORT="11" 
HOST="localhost"
W_DIR="./noVNC/utils"
X_DIR="/home/wt/.vnc";

if [ $# != 2 ] 
then
	echo "Error Input!" >&2
else

	#check websockify is opened? if not then open 
	websockifyList=`ps -aux | grep $WEBSOCKIFY_PORT | grep websockify` >> /dev/null
	if [ "$websockifyList"x = ""x ]; then
        gnome-terminal -e "$W_DIR/websockify.py $WEBSOCKIFY_PORT $HOST:59$VNC_PORT"
        fi

	#杀死已有的vnc服务;
	list=`ls $X_DIR | grep .$VNC_PORT.pid` >> /dev/null
        if [ "$list"x != ""x ]; then
        vncserver -kill :$VNC_PORT
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
	 vncserver :$VNC_PORT
	 
fi
