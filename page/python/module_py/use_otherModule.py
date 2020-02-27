# code:utf-8
# 使用第三方 模块 ;pip 安装
# 安装方式一 ； 一个个安装
# 安装方式二： Anaconda ,内置了许多第三方库

import sys
print(sys.path)

# 模块的搜索路径
# 修改方式一： sys.path.append(),运行时有效
# 修改方式二：设置环境变量PYTHONPATH，该环境变量的内容会被自动添加到模块搜索路径中