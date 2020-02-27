# code:utf-8
# 使用内置的模块

'a test module'

__author__ ='ccy'

import sys # 引入文件操作模块

def test():
    args = sys.argv #运行文件时，传递的参数
    if(len(args) == 1):
        print('hello World')
    elif(len(args) == 2):
        print('hello %s!' % args[1])
    else:
        print('too many arguments')

if __name__=='__main__': # 常见用于测试,作为模块引入时,不会执行;直接文件执行时，会被执行
    test()

#作用域 
# 正常变量： abc ;
# 特殊变量：__XXX__ 可以直接引用，但有特殊用途，__author__ __name__ __doc__
# 非公开函数/变量 ：_xxx __xxx
def _private_1(name):
    return 'hello %s' % name

def _private_2(name):
    return 'hi，%s' % name

def greet(name):
    if(len(name)>4):
        return _private_1(name)
    else:
        return _private_2(name)