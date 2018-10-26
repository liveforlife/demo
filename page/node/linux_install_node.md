###Welcome to use MarkDown

sudo yum -y install wget

wget https://nodejs.org/dist/v8.11.9/node-v8.11.9-linux-x64.tar.xz

tar -Jxv -f node-v8.11.9-linux-x64.tar.xz   tar --- 文件夹
xz -d node-v9.8.0-linux-x64.tar.xz
tar -xvf node-v9.8.0-linux-x64.tar

建立 软连接
sudo ln -s /root/software/node-v8.9.3-linux-x64/bin/node /usr/local/bin/node 
sudo ln -s /root/software/node-v8.9.3-linux-x64/bin/npm /usr/local/bin/npm 

删除连接
rm -rf symbolic_name 