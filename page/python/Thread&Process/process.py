# 进程
# fork 在window 环境不能运行

# import os
# print('Process (%s) start',os.getpid())
# pid = os.fork()
# if pid == 0:
#     print('Im child process (%s) and my parent process (%s)'% (os.getpid(),os.getppid()))
# else:
#     print('I (%s) just created a child process (%s)'%(os.getpid(),pid))

# multiprocessing 跨平台版本的多进程模块
# 启动子进程并等待结束
from multiprocessing import Process,Pool,Queue
import os,time,random
def run_pc(name):
    print('Run child process %s %s...'%(name,os.getpid()))

# if __name__=='__main__':
#     print('Parent process %s.'%os.getpid())
#     p = Process(target=run_pc,args=('test',))
#     print('Child process will start.')
#     p.start()
#     p.join() # 等待子进程结束后再继续往下运行，通常用于进程间的同步
#     print('Child process end')

# 进程池；使用进程池的方式创建子进程
def long_time_task(name):
    print('Run task %s %s...'%(name,os.getpid()))
    start = time.time()
    time.sleep(random.random()*3)
    end = time.time()
    print('Task %s runs %0.2f seconds'%(name,(end - start)))
# if __name__ =='__main__':
#     print('Parent process %s.',os.getpid())
#     p = Pool(4)
#     for i in range(5):
#         p.apply_async(long_time_task,args=(i,))
#     print('Waiting for all subprocesses done...')
#     p.close() # Pool对象调用join()方法会等待所有子进程执行完毕，调用join()之前必须先调用close()，调用close()之后就不能继续添加新的Process
#     p.join()
#     print('All subprocesses done.')

#子进程
import subprocess
print('$ nslookup www.python.org')
r = subprocess.call(['nslookup', 'www.python.org']) # 启动一个子进程，然后控制其输入和输出
print('Exit code:', r)

print('$ nslookup')
p = subprocess.Popen(['nslookup'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
output, err = p.communicate(b'set q=mx\npython.org\nexit\n') # 子进程还需要输入，则可以通过communicate()方法输入
print(output.decode('gbk'))
print('Exit code:', p.returncode)
#进程间通讯

def write(q):
    print('Process to write %s'%os.getpid())
    for value in ['A','B','C']:
        print('Put %s to queue...'% value)
        q.put(value)
        time.sleep(random.random())
def read(q):
    print('Process to read %s' % os.getpid())
    while True:
        value = q.get(True)
        print('Get %s for queue'% value)

if __name__ == '__main__':
    q = Queue()
    pw = Process(target=write,args=(q,))
    pr = Process(target=read,args=(q,))
    pw.start()
    pr.start()
    pw.join()
    pr.terminate()