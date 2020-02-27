# code:utf-8
# 测试驱动开发
# 单元测试 ；针对 函数、模块、类 进行正确性验证的测试工作
# 单元测试的测试用例要覆盖常用的输入组合、边界条件和异常

class Student(object):
    '''
    init Student

    >>> s = Student('ccy',23)
    >>> s.get_grade()
    'C'
    '''
    def __init__(self, name, score):
        self.name = name
        self.score = score
    def get_grade(self):
        if self.score > 100 or self.score < 0:
            raise ValueError('num limit')
        if self.score >= 80:
            return 'A'
        if self.score >= 60:
            return 'B'
        return 'C'

import unittest
class TestStudent(unittest.TestCase):
    def setUp(self):
        print('setUp....') #在每个测试模块的开头添加代码
    
    def tearDown(self):
        print('tearDown.....') # 在每个测试模块的尾部添加代码
    def test_80_to_100(self):
        s1 = Student('Bart', 80)
        s2 = Student('Lisa', 100)
        self.assertEqual(s1.get_grade(), 'A')
        self.assertEqual(s2.get_grade(), 'A')

    def test_60_to_80(self):
        s1 = Student('Bart', 60)
        s2 = Student('Lisa', 79)
        self.assertEqual(s1.get_grade(), 'B')
        self.assertEqual(s2.get_grade(), 'B')

    def test_0_to_60(self):
        s1 = Student('Bart', 0)
        s2 = Student('Lisa', 59)
        self.assertEqual(s1.get_grade(), 'C')
        self.assertEqual(s2.get_grade(), 'C')

    def test_invalid(self):
        s1 = Student('Bart', -1)
        s2 = Student('Lisa', 101)
        with self.assertRaises(ValueError):
            s1.get_grade()
        with self.assertRaises(ValueError):
            s2.get_grade()

if __name__ == '__main__': # 运行文件的时候直接运行 ; 也可以在运行文件的时候添加 -m unittest
    unittest.main()
    import doctest # 写下注释中的代码可以被执行，可以被一些工具自动生成文档
    doctest.testmod() # 运行文件的时候，会执行注释中的代码