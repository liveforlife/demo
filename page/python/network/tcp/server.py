# 绑定端口，并监听其他客户端的连接
# socket 依赖：服务器地址、服务器端口、客户端地址、客户端端口
import socket,threading,time

s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

s.bind(('127.0.0.1',9999))
s.listen(5)
print('Waiting for connecting')

def tcplink(sock,addr):
    print('Accept connect for %s :%s...'% addr )
    sock.send(b'Welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') =='exit':
            break
        sock.send(('hello,%s!'% data.decode('utf-8')).encode('utf-8'))
    sock.close()
    print('Conection for %s:%s closed'%addr)

while True:
    sock,addr=s.accept()
    t = threading.Thread(target=tcplink,args=(sock,addr))
    t.start()
