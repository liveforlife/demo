# code: utf-8

# 给 类动态绑定方法
class Student(object):
    __slots__ = ('name','age','_name','_age') # 对象只能读，不能添加或修改类属性，只对当前实例起作用，对继承的子类不起作用
    def __init__(self,name,age):
        self.name = name
        self.age = age

def get_age(self):
    return self.age
Student.get_age = get_age # 动态绑定方法
student = Student('ccy',25)
print(student.get_age())

class StudentPro(object):
    @property
    def age(self):
        return self._age
    @age.setter
    def age(self,val):
        self._age = val
    
    @property
    def name(self):
        return self._name
studentPro = StudentPro()        
studentPro.age = 27
print(studentPro.age)

# 多重继承(MixIn)
class Animal(object):
    pass

class Mammal(Animal):
    pass

class Bird(Animal):
    pass

class Runnable(object):
    def run(self):
        print('Running....')

class Dog(Mammal,Runnable): # 继承两个类的内容
    pass

dog = Dog()
dog.run()

# 特殊用途的函数
# __slots__ 限制类只能由特定的属性，不能修改；
# __len__()方法 让class作用于len()函数；
# __str__ 定制类


# 枚举
from enum import Enum, unique
Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))
for name, member in Month.__members__.items():
    print(name, '=>', member, ',', member.value)

@unique 
class weekday(Enum):
    Sun =0
    Mon = 1
    Tue = 2
    Wed = 3
    Thu = 4
    Fri = 5
    Sat = 6

# 要创建一个class对象，type()函数依次传入3个参数：
# class的名称；
# 继承的父类集合，注意Python支持多重继承，如果只有一个父类，别忘了tuple的单元素写法；
# class的方法名称与函数绑定，这里我们把函数fn绑定到方法名hello上。
def fn(self,name='hello'):
    print('Hello,%s'% name)

Hello = type(Hello,(object,),dict(hello = fn))


# class的名称；
# 继承的父类集合，注意Python支持多重继承，如果只有一个父类，别忘了tuple的单元素写法；
# class的方法名称与函数绑定，这里我们把函数fn绑定到方法名hello上。
