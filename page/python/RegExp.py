# code:utf-8
# 正则表达式
# \d 匹配数字
# \w 匹配字母或者数字
# . 可以匹配任意字符
# *表示任意个字符（包括0个）
# 用+表示至少一个字符
# 用?表示0个或1个字符
# 用{n}表示n个字符
# 用{n,m}表示n-m个字符
# \s 匹配一个空格（也包括Tab等空白符）
# []表示范围
# A|B 表示既可以 匹配A 也可以匹配B
# ^ 表示行的开头
# $ 表示行的结尾
# ？使贪婪模式变成非贪婪
import re # match 成功返回 match对象；失败返回 None
print(re.match(r'^\d{3}\-\d{3,8}$','010-12345'))
print(re.match(r'^\d{3}-\d{3,8}$','010 12345'))

# 切割字符串
print(re.split(r'[\s\,]+','1,2  3   4'))

# 分组；提取字串

d = re.match(r'^(\d{3})-(\d{3,8})$','010-12345') # 用() 得到分组
print(d.group(0),d.group(1),d.group(2)) # 通过 group() 获取分组信息

# 非贪婪模式
g =re.match(r'^(\d+?)(0*)$','102300').groups()
print(g[0])

# 编译
# 编译正则表达式，如果正则表达式的字符串本身不合法，会报错
# 用编译后的正则表达式去匹配字符串
re_telephone = re.compile(r'^(\d+)-(\d{3,8})$') # 预编译该正则表达式，生成 Regular Expression对象
print(re_telephone.match('010-12345').groups())