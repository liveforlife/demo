# code:utf-8
# 调试程序
# 方式一 ： print
# 方式二： assert (断言),未使用 错误捕捉，程序会被中断；会抛出 断言错误 AssertionError
# 可以带参数关闭assert -O
def foo(s):
    n = int(s)
    assert n !=0 ,'n is zero'
    return 10/n

# foo('0')
# 方式三 ： logging
import logging
logging.basicConfig(level=logging.INFO) # 指定记录信息的级别，debug info warning error
def bar(s):
    n = int(s)
    logging.info('n = %d' % n)
    return 10/n

# bar('0')

# 方法四 ：pdb -- n -- 下一步；p 变量 -- 参看 变量内容；q -- 退出本次函数 ； l -- 查看 代码 ; c -- 继续执行
# 1.运行代码时，添加参数 ：-m pdb
# 2.设置断点 pdb.set_trace()
# 3. VS Code 自带的python debug 调试
import pdb
def main(s):
    n = int(s)
    #pdb.set_trace()
    return 10/n

main('0')

print('end')