# _Thread 低级模块 Threading 高级模块

import time,threading
def loop():
    print('thread %s is running..'% threading.current_thread().name)
    n =0
    while n<5:
        n = n+1
        print('thread %s ==> %s'%(threading.current_thread().name,n))
        time.sleep(1)
    print('thread %s ended'%threading.current_thread().name)
# if __name__ == '__main__':
#     print('thread %s is running...' % threading.current_thread().name)
#     s = threading.Thread(target=loop,name='LoopThread') # 创建线程，并命名子线程的名字
#     s.start()
#     s.join()
#     print('thread %s ended'% threading.current_thread().name)

balance = 0
lock = threading.Lock() # 锁
def change_it(n):
    global balance
    balance = balance + n
    balance = balance -n

def run_thread(n):
    for i in range(1000):
        lock.acquire() # 获取锁
        try:
            change_it(n)
        finally:
            lock.release() # 释放锁

# if __name__ == '__main__':
#     t1 = threading.Thread(target=run_thread,args=(4,))
#     t2 = threading.Thread(target=run_thread,args=(8,))
#     t1.start()
#     t2.start()
#     t1.join()
#     t2.join()
#     print(balance)

local_school = threading.local() # 全局变量，每个线程只能读取自己线程的副本
def process_Stduent():
    std = local_school.student
    print('hello %s.%s' %(std,threading.current_thread().name))

def process_thread(name):
    local_school.student = name
    process_Stduent()

if __name__ == '__main__':
    s1 = threading.Thread(target=process_thread,args=('Alice',),name='Thread-A')
    s2 = threading.Thread(target=process_thread,args=('Bob',),name='Thread-B')
    s1.start()
    s2.start()
    s1.join()
    s2.join()