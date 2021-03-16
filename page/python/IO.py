#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# IO :Input \ Output 
# 磁盘 -- 内存 ：Input ;内存 -- 磁盘 ： Output
# 浏览器 -- 新浪服务器 ： Output ; 新浪服务器 -- 浏览器： Input
# Stream 流
# 同步IO，异步IO：回调 ，轮询

try: # 防止无法读取文件,报错，无法关闭读取文件的进程
    f = open('read.md','r',encoding='UTF-8')  # f 统称 file-like Object;还有内存的字节流、网络流、自定义流 ；只要求存在 read()
    print(f.read()) # 全部读取完
finally:
    f.close()

with open('read.md','r',encoding='utf-8') as f: # 简化上诉问题的写法
    print(f.readline()) # 一行一行读

with open('simply.jpg','rb') as f: # 读取图片、视频等，用rb
    print(f.read(100)) # read(size) 读取数字的内容

with open('read.md','r',encoding='gbk',errors='ignore') as f: # encoding 读取编码模式 errors 忽略编码格式报错(UnicodeDecodeError)
    print(f.read())

with open('read.md','a',encoding='utf-8') as f: # a 追加，w :写文本文件；直接覆盖 wb：写二进制文件；直接覆盖
    f.write('\n写入')

# StringIO - 从内存中读写 str
# BytesIO -  操作 二进制数据

from io import StringIO,BytesIO
def WStringIO():
    f = StringIO()
    f.write('Hello!')
    f.write('  ')
    f.write('world')
    print(f.getvalue()) # 获取数据
WStringIO()

def RStringIO():
    f = StringIO('Hello!\nHi!\nGoodbye!')
    while True:
        s= f.readline()
        if(s ==''):
            break
        print(s.strip())
RStringIO()

def WBytesIo():
    f = BytesIO()
    f.write('中文'.encode('utf-8'))
    print(f.getvalue())
WBytesIo()

# os 
import os
print(os.name) # posix - Linux、Unix、Mac OS x ; nt - Windows
# print(os.environ)
# print(os.environ.get('PATH'))
print(os.path.abspath('.'))
os.path.join(os.path.abspath('.'),'new') # 表示完整路径
os.mkdir(os.path.join(os.path.abspath('.'),'new')) # 创建目录
os.rmdir(os.path.join(os.path.abspath('.'),'new'))  # 删除一个目录
print(os.path.split('E:\project\demo\page\python'))
print(os.path.split('/Users/michael/testdir/file.txt'))
print(os.path.splitext('/path/to/file.txt'))
# os.rename('test.txt', 'test.py') # 重新命名
# os.remove('test.py') # 删除

from shutil import copyfile


# 变量从内存中变成可存储或传输的过程称之为序列化
d = dict(name='Bob',age=20,score=88)
import pickle
print(pickle.dumps(d)) # 序列化
f = open('test.txt','wb')
pickle.dump(d,f) # 序列化并写入文件
f.close()

fr=open('test.txt','rb')
dr = pickle.load(fr) # 反序列化对象
fr.close()
print(dr)

# json
import json
d =dict(name='Bob',age=24,score=27)
s =json.dumps(d) # 序列化 , dump 从文件中序列化
print(s,isinstance(s,str))

dl = json.loads(s) # 反序列化
print(dl,isinstance(dl,dict))

# json 序列化和反序列化 class
class Student(object):
    def __init__(self,name,age,score):
        self.name = name
        self.age = age
        self.score = score

s = Student('ccy',20,20)
j = json.dumps(s,default=lambda object: object.__dict__) # 通常class的实例都有一个__dict__属性，它就是一个dict，用来存储实例变量。也有少数例外，比如定义了__slots__的class
print(j)

def studentDict(self):
    return {
        'name':self.name,
        'age':self.age,
        'score':self.score
    }

js= json.dumps(s,default=studentDict)
print(js)

def dictStudent(d):
    return Student(d['name'],d['age'],d['score'])

dj = json.loads(js,object_hook=dictStudent) # 反序列化
print(dj)