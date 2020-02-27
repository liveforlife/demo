# code:utf-8

# 高阶函数：函数的参数可以接受函数

# map()函数接收两个参数，一个是函数，一个是Iterable，map将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回
# reduce： 接收两个参数，函数和序列，返回序列的累加结果

print(list(map(int,['1','2','3'])))
from functools import reduce
def fn(x,y):
    return x*10+y
print(reduce(fn,[1,2,3])) # 计算的结果 传入为 x


# filter : 把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素

# 删掉偶数 只保留奇数
def is_odd(n):
    return n % 2 == 1

print(list(filter(is_odd,[1,2,3,4,5,6,7,8])))

# 删除序列中的空字符

def not_empty(s):
    return s and s.strip()

print(list(filter(not_empty,['223','','234','166'])))

# 计算 素数
def _not_divisible(n):
    return lambda x:x%n >0
   
def _odd_item():
    n = 1
    while True:
        n = n+1
        yield n

def primes():
    yield 2 
    it = _odd_item()
    while True:
        n=next(it)
        yield n
        it = filter(_not_divisible(n),it)
for x in primes():
    if x < 100:
        print(x)
    else:
        break

# sorted -- 对序列进行排序
print(sorted([59,3,6,23,1]))
print(sorted([25,2,-13,-19,3],key=abs))
print(sorted([23,2,-19,-14,21],key=abs,reverse=True))

# 返回函数 -- 函数返回一个函数
# 闭包函数 -- 内部变量封闭
# 匿名函数 -- lambda 表达匿名函数,只能有一个表达式，
# 装饰器 -- decorator
import functools

def log(func):
    @functools.wraps(func)
    def wrapper(*args,**kw):
        print('call %s()'% func.__name__)
        return func(*args,**kw)
    return wrapper

@log # 装饰器的使用，返回的是一般函数
def now():
    print('2020-10-10')

def logger(text):
    def decorator(func):
        def wrapper(*args,**kw):
            print('call %s()' % func.__name__)
            return func(*args,**kw)
        return wrapper
    return decorator

@logger('execute') # 装饰器返回的还是装饰器
def nower():
    print('2022-10-10')

print(now.__name__,now())
print(nower.__name__,nower())

# 偏函数 functools.partial ： 把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。
int2 = functools.partial(int, base=2)
print(int2('10010'))
print(int2('10010',base=10))
