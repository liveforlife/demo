### Linux的操作

######帮助命令
	man ls 
	help pwd
	info ls 
	ls --help
	ls  -l

######目录操作
- 查看当前目录 pwd
- 目录内容显示 ls -l(冗长信息) -d(当前目录自身信息) -ld
- 当前目录切换 cd cd ~ cd ../ cd /
- 新增空目录：mkdir -p 
- 目录拷贝命令：cp -a(全部) -f(强制) -r(递归)
- 空目录删除：rmdir -p
- 非空目录删除: rm -rf -r(递归删除) -f(强制删除) -ri(具体操作)

######文件
- 文件新增 touch
- 文件拷贝 cp -a -i
- 文件移动 mv
- 文件查找 find which locate
- 文件删除 rm -i -r  -f
- 文件显示 
	+ head -n  
	+ tail -n 
	+ cat
		> -n 显示行号 空白编号
		> -b 显示行号 空白不编号
	+ less
- 文件尾部显示 tail -n -f 
- 文件过滤 grep -v -i

######文本文件编辑
三种状态：命令模式(yy p u ctrl+r dd)、可编辑模式（i）、末行模式(ctrl+: w p )
- 打开文件 vim 
- 编辑文件
	- 复制操作 yy nyy
	- 粘贴操作 p
	- 删除操作 dd
	- 增行操作 
	- 查找操作 / n ? N
	- 替换操作（行替换、全文替换）:s/io/IO/gc %s/io/IO/gc
- 保存文件 w w!
- 关闭文江 q q!

#####Vim操作
- 行号设置
- ~/.vimrc的编辑设置(:set nu  :set nonu)
- 多文件的并发操作 vim -o(水平) vim -O(垂直)

#####文件压缩 7z(p7zip-full 7zip-rar)  
- 添加文件到压缩包 -a
- 释放压缩包 -e
- 列示子文件 -l
- 删除子文件 -d
- 测试完整性 -t

#####库文件归档 ar
- 归档程序目标文件 *.o 到静态库文件 *.a
- 目标代码到静态库 -r
- 提取目标代码从静态库 -x
- 查看静态库的目标代码列 -t
- 显示更多信息 -v
- 从静态库删除目标代码 -d

#####设备挂载和卸载 sudo fdisk -l
- 设备挂载 mount 
	> 特殊格式 mount.ntfs
	> 光盘挂载 
		mount -t iso9660 /dev/cdrom /mnt
	> 光盘iso镜像文件挂载
		mount -o loop -t iso9660 mycd.iso /media
	> U盘设备挂载
		> FAT32文件系统 mount -t vfat /dev/sdb1 /mnt
		> FAT 文件系统 mount.ntfs /dev/sdb1 /mnt
- 设备卸载
	> 目录卸载
		umount /mnt
	> 设备文件卸载
		umount /dev/sdb1
		
#####软件包管理命令 apt-get
- 下载 download
- 安装 install
- 更新 update
- 升级 upgrade

##### Debian包管理命令 dpkg
- 安装 dpkg -i 
- 卸载 dpkg -r 

##### 进程
- 进程查看 ps  || ps -aux  || ps -ef
- 进程树查看 pstree
	- 显示进程号 pstree -p
- 进程动态查看 top || top  -p $$
- 进程中止 kill
	- kill -l  查看所有系统支持信号
	- sudo kill -9 $$
- 进程中止命令 指定进程名 killall || killall -9 gedit

#### 系统相关操作
- 清屏 clear
- 重启 reboot
- 关机 halt、shutdown
- 内存硬件信息 cat /proc/meminfo
- CPU硬件信息  cat /proc/cpuinfo
- 操作系统信息 uname -a 
- 主机名查看 hostname
- 计划任务 cron crontab 
- 内存状态查看 free || free -s 5
- 磁盘文件系统空间使用查看 df || df -h 
- 文件空间占用  du || du -s || du -h || du -sh /home/iotek
- 磁盘分区 fdisk -l
- 磁盘分区设置 fdisk -help  || sudo fdisk /dev/sda

#### 网络
- 网络连接 ping || ping 127.0.0.1 || ping -c 6 127.0.0.1
- 网络地址查看和设置 ifconfig || ifconfig -a ech0 || sudo ifconfig eth0 192.168.110.100 netmask 255.255.255.0
- 域名解析查询 nslookup
	- 缺省解析指定域名的IP地址 nslookup www.baidu.com
	- 反向解析指定IP地址的域名信息	nslookup 8.8.8.8
- 路由信息查看
	- 查看 route || route -n
- 网络统计信息查看
	- 查看 netstat
	- 包含监听信息 netstat -a
	- 仅显示TCP协议相关 netstat -t

#### 用户
- 用户添加与删除
	- 添加 useradd
	- 添加同时创建家目录 useradd -m 
	- 删除 userdel
	- 删除用户和家目录 userdel -r
- 用户查看
	- 查看当前 whoami
	- 查看所有 who
	- 用户id查看 id
	- 查看当前用户有效ID id -u
- 用户切换
	- 用户间切换 su 用户名
	- 切换到 root用户 推荐 sudo -i
- 用户账号锁定
	- 锁定 usermod - L
	- 解锁 usermod - U
- 用户账号配置文件
	- 用户账号文件 /etc/passwd
	- 用户影子密码 /etc/shadow
	
####用户组
- 用户组添加与删除
	- 添加 groupadd || groupadd -g
	- 删除 groupdel 
- 用户组查看 groups
- 用户组成员更改 gpasswd
	- 新增用户加入组群 gpasswd -a iotek bencai
	- 删除 gpasswd -d iotek bencai
	- 改变有效登录群组 newgrp  所属组名 
- 用户组的配置文件
	- 用户组账号文件 /etc/group
	- 用户组影子文件 /etc/gshadow

#### 文件权限
- 文件权限设置 chmod
	- 字符形式 chmod a+x || o=r || g-x || u+w
	- 数字 chmod 644 
- 缺省权限设置 umask
- 文件属主和属组设置
	- 属主 chown || chown -R
	- 属组 chgrp || chgrp -R

####服务 htp && ssh
- htp 命令使用
- htp 服务安装
	- 在线安装 apt-get install vsftpd
	- 离线安装 dpkg -i vsftpd*.deb
- htp 服务的启停和配置
	- 启动 service vsftpd start
	- 停止 service vsftpd stop
	- 重启 service vsftpd restart
	- ftp 服务 配置文件 /etc/vsftpd.conf
- ssh 命令使用 
- ssh 服务安装
	- 在线安装 apt-get install openssh-server
	- 离线安装 dpkg -i openssh-server*.deb
- ssh 服务的启停和配置
	- 启动 service ssh start
	- 停止 service ssh stop 
	- 重启 service ssh restart
	- 配置文件 /etc/ssh/sshd.conf

#### shell 
- 命令历史 history || history -c
- 命令别名 
	- 查看 alias
	- 设置 alias myls="ls -a"
- 通配符 * || ? || []
- 命令后台运行
	- 命令发送至后台运行 &
	- 当前后台作业任务 jobs
	- 当前命令作业切换到后台 bg
	- 最近后台作业切换回前台 fg
- shell 
	- 设置
		COLOR=red
	- 引用
		echo $COLOR
		echo ${COLOR}
	- 自定义变量
		Day=Friday
		echo "today is ${Day}"
- PATH 变量
	- 设置 
		PATH=/home/iotek/bin;$PATH
	- 引用
		echo $PATH 
	- 其他环境变量
		PS1存储命令行的提示符
		PS2存储命令行的换行符
- 预定义变量
	- $$ 当前进程号
	- $0 当前进程名
	- $? 当前命令返回值
	- $! 最后一个后台进程的进程号
- 环境变量的导出
	- 导出 export
	- 文件 ~/.bashrc
	
#### 管道及重定向
- 管道
	- 使用
		ps aux | grep "bash"
	- 级联
		ps aux | grep "bash" | grep -v "bash"
- 重定向
	- 标准输出重定向 
		ls -l test.* >output.txt
		ls -l test.* >>output.txt
	- 标准出错重定向
		ls -l test.* 2>output.txt
		ls -l test.* 2>>output.txt
- 输入重定向
	- 标准输入
		cat <output.txt
	- 之here document 技术
		cat <<EOF

#### 脚本 
- 使用 . || ./ || 
- 分支结构 
	> && ||
	> if-else
	> case
- 循环
	> while
	> until 
	> for-in
- 函数
	> 函数名
		hello(){}
		function nihao(){}
	> 使用
		hello
	> 参数传递
		位置变量
		
		
整数比较：
-eq                       等于            if [ "$a" -eq "$b" ]
-ne                       不等于         if [ "$a" -ne "$b" ]
-gt                        大于            if [ "$a" -gt "$b" ]
-ge                       大于等于      if [ "$a" -ge "$b" ]
-lt                         小于            if [ "$a" -lt "$b" ]
-le                        小于等于      if [ "$a" -le "$b" ]

<                          小于（需要双括号）       (( "$a" < "$b" ))
<=                        小于等于(...)                (( "$a" <= "$b" ))
>                          大于(...)                      (( "$a" > "$b" ))
>=                        大于等于(...)                (( "$a" >= "$b" ))

字符串比较：
=                          等于           if [ "$a" = "$b" ]
==                        与=等价
!=                         不等于        if [ "$a" = "$b" ]
<                          小于，在ASCII字母中的顺序：
                            if [[ "$a" < "$b" ]]
                            if [ "$a" \< "$b" ]         #需要对<进行转义
>                          大于

-z                         字符串为null，即长度为0
-n                         字符串不为null，即长度不为0

怎么打开文件