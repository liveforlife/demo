import time,sys,queue
from multiprocessing.managers import BaseManager
from multiprocessing import freeze_support

class QueueManager(BaseManager):
    pass


def test():
    QueueManager.register('get_task_queue')
    QueueManager.register('send_task_queue')

    server_addr = '127.0.0.1'
    print('Connect to server %s...'%server_addr)

    m = QueueManager(address=(server_addr,5000),authkey=b'abc')
    m.connect()

    task = m.get_task_queue()
    result = m.send_task_queue()
    for i in range(10):
        try:
            n = task.get(timeout = 1)
            print('run task %d * %d'%(n,n))
            r = '%d *%d = %d'%(n,n,n*n)
            time.sleep(1)
            result.put(r)
        except queue.Empty:
            print('task queue is empty')
    print('work end')

if __name__ == '__main__':
    freeze_support()
    test()