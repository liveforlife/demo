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

#####文件压缩 7z(7zip-full 7zip-rar)  
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

##### 进程查看 ps
- ps -aux
- ps -ef

##### 进程树查看 pstree
- 显示进程号 pstree -p


怎么打开文件