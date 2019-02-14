### 下载nginx 的Window版本

##### 启动
	start nginx

##### 验证配置文件
	nginx -t -c conf/nginx.conf

##### 重新启动
	nginx -s reload

##### 快速停止
	nginx -s stop

##### 完整停止
	nginx -s quit
	
##### 重新打开日志
	nginx -s reopen
	
##### 查看版本
	nginx -v