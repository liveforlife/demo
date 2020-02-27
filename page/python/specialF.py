# code: utf-8

# 列表生成式
L = list(range(10))  # [1,2,3...8,9]
D = list(x * x for x in range(1, 11))  # [1x1, 2x2, 3x3, ..., 10x10]
F = list(x * x for x in range(1, 11) if x % 2 == 0)  # 筛选出仅偶数的平方
s = list(n + m for n in 'ABC' for m in 'XYZ')  # 使用两层循环，可以生成全排列
print(L, D, F, s)

L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = list(x.lower() for x in L1 if isinstance(x, str))
print(L2)
if L2 == ['hello', 'world', 'apple']:
    print('测试通过!')
else:
    print('测试失败!')

# 生成器
g = (x * x for x in range(10))
print(g)
print(next(g))
for x in g:  # 生成器生成的，属于可遍历
    print(x)
# 定义函数来生成 生成器
def fib(max): # 函数添加 yield ，变成 生成器
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a+b
        n = n+1
    return 'done'
f = fib(6)
print(f)

# 杨辉三角,把每一行看做一个list，试写一个generator，不断输出下一行的list
def triangles():
    L = [1]
    while True:
        yield L
        L = [L[i] + L[i+1] for i in range(len(L) - 1)]
        L.insert(0,1)
        L.append(1)
