import asyncio
import threading
@asyncio.coroutine # 版本 3.5之前
def hello():
    print('hello %s' % threading.currentThread())
    r = yield from asyncio.sleep(1)
    print('hello again %s ' % threading.currentThread())

async hello(): # 版本 3.5之后
    print('hello %s' % threading.currentThread())
    r = await asyncio.sleep(1)
    print('hello again %s' % threading.currentThread())

def watchThreading():
    loop = asyncio.get_event_loop()
    task = [hello(),hello()]
    loop.run_until_complete(asyncio.wait(task))
    loop.close()

@asyncio.coroutine
def waget(host):
    print('wget %s ...' % host)
    connect = asyncio.open_connection(host,80)
    reader,writer = yield from connect
    header ='GET / HTTP/1.0\r\nHost:%s\r\n\r\n' % host
    writer.write(header.encode('utf-8'))
    yield from writer.drain()
    while True:
        line = yield from reader.readline()
        if line == b'\r\n':
            break
        print('%s header > %s'%(host,line.decode('utf-8').rstrip()))
    writer.close()

loop = asyncio.get_event_loop()
tasks = [ waget(host) for host in ['www.sina.com.cn', 'www.sohu.com', 'www.163.com']]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()
