import random,time,queue
from multiprocessing.managers import BaseManager
from multiprocessing import freeze_support

task_queue = queue.Queue()
result_queue = queue.Queue()

class QueueManager(BaseManager):
    pass
def get_task_queue():

    return task_queue

def get_result_queue():

    return result_queue

def test():
    QueueManager.register('get_task_queue',callable=get_task_queue)
    QueueManager.register('send_task_queue',callable=get_result_queue)

    manager = QueueManager(address=('127.0.0.1',5000),authkey=b'abc')

    manager.start()
    task = manager.get_task_queue()
    result = manager.send_task_queue()

    for i in range(10):
        n = random.randint(0,1000)
        print('Put task %d'% n)
        task.put(n)

    print('Try get result...')
    for i in range(10):
        r = result.get(timeout = 10)
        print('Result: %s'% r)

    manager.shutdown()
    print('master exit.')
if __name__ == '__main__':
    #windows下多进程可能会炸，添加这句可以缓解
    freeze_support()
    test()