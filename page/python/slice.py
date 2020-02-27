#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# code: utf-8

L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
arr = list(range(1000))
print(L[0:3], L[:3], L[-2:])
print(arr[10:20])
print(arr[:10:2])
print(L[::5])
print(L[:])
print(('aa', 'bb', 'cc', 'dd', 'ee')[::2])


def trim(s):
    if 0 == len(s):
        return s
    while " "==s[0]:
        s=s[1:]
        if 0 == len(s):
            return s
    while " " == s[-1]:
        s=s[:-1]
        if 0 == len(s):
            return s
    return s

if trim('hello  ') != 'hello':
    print('测试失败!666')
elif trim('  hello') != 'hello':
    print('测试失败!444')
elif trim('  hello  ') != 'hello':
    print('测试失败!333')
elif trim('  hello  world  ') != 'hello  world':
    print('测试失败!222')
elif trim('') != '':
    print('测试失败!111')
elif trim('    ') != '':
    print('测试失败!')
else:
    print('测试成功!')
