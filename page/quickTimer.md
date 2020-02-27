
执行上下文：
ES3                                        ES5
 scope：作用域   --- lexical environment 词法环境 获取变量时使用
variable object : 变量对象  ----  variable environment 变量环境 声明变量时使用
this value : this 值

ES 2018
lexical environment 词法环境 获取变量时使用或this 值
variable environment 变量环境 声明变量时使用
code evaluation state: 恢复代码执行位置
Function 执行的任务是函数时使用
ScriptOrModule: 执行的任务是脚本或者模块时使用
Realm 使用的基础库和内置对象实例
Generator 仅生成器上下文有这个属性

@使用
@charset ： https://www.w3.org/TR/css-syntax-3
@import : https://www.w3.org/TR/css-cascade-4
@media :  https://www.w3.org/TR/css-conditional/
@page ：  https://www.w3.org/TR/css-page-3
@counter-style ：  https://www.w3.org/TR/css-counter-styles-3
@keyframes ：  https://www.w3.org/TR/css-animations-1
@fontface ： https://www.w3.org/TR/css-fonts-3
@supports ：  https://www.w3.org/TR/css-conditional/
@namespace  ： https://www.w3.org/TR/css-namespace-3

页面元信息类标签
> heade 元信息容器
> title 文档标题
> base 页面的基准URL
> meta 元信息通用标签
   > <meta name=application-name content="IsForms">
   > <meta charset="UTF-8">
   > <meta http-equiv="content-type" content="text/html; charset=UTF-8">(content-type/content-language/default-style/refresh/set-cookie/x-ua-compatible/content-security-policy)
   > <meta name="viewport" content="width=device-width; height=500; initial-scale=1; minimum-scale=1;maximum-scale=1; user-scalable=no">
   > name=application-name/author/description/generator/keywords/referrer/theme-color

选择器
>简单选择器
	> 类型选择器（标签名）
	> 全体选择器（标签名）
	> id选择器（id）
	> class 选择器(class)
	> 属性选择器([att]/[att=val]/[att~=val]/[att|=val])
	> 伪类选择器(树结构关系/链接与行为/逻辑伪类/其他)
