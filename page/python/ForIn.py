# code: utf-8

# list 迭代 默认打印 value值
for v in [11,22,33]:
    print(v)
for i,v in enumerate([11,22,33]):
    print(i,'--',v)
# tuple 迭代 默认打印 key值
d = {'a': 1, 'b': 2, 'c': 3}
for key in d:
    print(key)
for key,value in d.items():
    print(key,'---',value)
for value in d.values():
    print(value)
# string 迭代
for v in 'abc':
    print(v)

# 检验能否迭代
from collections import Iterable
print(isinstance('abc',Iterable))
print(isinstance((1,2,3),Iterable))
print(isinstance([1,2,3],Iterable))


