# code:utf-8
# 错误处理 -- 捕捉异常 try...except...finally....
try:
    print('try ...')
    r = 10/0
    print('result:', r)
# 错误有很多类型
except ValueError as e:
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
except Exception as e:
    print(e)
else:
    print('no error!')
finally:
    print('finally')

class FooError(ValueError):
    pass

def foo(n):
    # 抛出错误
    n = int(n)
    if n==0:
        raise FooError('invalid value %s' % n) # 方法一： 自定义错误
    return 10 / int(n)


def bar(n):
    try:
        return foo(n) * 2
    except Exception as e:
        print(e)
        raise ValueError(e) # 方法二：抛出其他错误
        # raise 方法三： 继续向上抛出错误

# 记录错误 -- 内置模块 logging

import logging

def main():
    try:
        bar('0')
    except Exception as e:
        logging.exception(e)

main()

print('End')