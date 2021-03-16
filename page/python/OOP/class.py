# code:utf-8
# 面向对象的基础 ： 类(class)和实例(Instance)
# 类；class 
# 类：初始化、基本数据、方法

class Student(object):
    base ='init' # 类属性
    def __init__(self,name,score):
        self.__name = name # 访问限制
        self._score = score # 特俗变量
    def get_score(self):
        return self._score

student = Student('ccy',45)
print(student.get_score())
print(student._score)

# 继承
class Animal(object):
    def run(self):
        print('Animal is running')

class Dot(Animal):
    def run(self):
        print('Dot is running')

dot = Dot()
dot.run()
print(isinstance(dot,Dot))
print(isinstance(dot,Animal))

# 获取对象信息 type isinstance
import types
def fn():
    print('aaa')
print(type(123==int))
print(type(fn) == types.FunctionType)

# dir() 获取一个对象的所有属性和方法
print(dir(student))

# 实例属性 、类属性
print(student.base,Student.base)
student.base = 'aaa'
print(student.base,Student.base)
del student.base
print(student.base,Student.base)

# hasattr getattr setattr
print(hasattr(student,'_score'),getattr(student,'_score'),setattr(student,'name','sss'))