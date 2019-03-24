*** [vue核心代码查看](http://hcysun.me/vue-design/art/)

****vue基本框架
- alias.js 别名设置：设置目录的简写
- ci.sh:持续集成运行的脚本 release.sh：自动发布新版本脚本
- 不同平台不同的输出
- 开发和生产版本差compiler
- 使用performance 查看性能

****vue规范化：因多种写法需规范数据格式
- props 
- inject
- directives

****vue合并:
- el propsData合并 默认的合并策略 defaultStrat
- data合并：mergeDataOrFn 函数进行处理 在合并阶段返回函数，在初始化阶段再合并数据-导致可以将props赋值上;data(){}可以用vm和解构  调取prop的数据
- 生命周期钩子选项：父子件会合并，返回数组格式
- 资源(assents)选项的合并策略：component(内置：KeepAlive Transition TransirtionGroup) filter directives(model show )
- 选项watch合并策略：返回可能是函数 可能是 数组 -- 原生firefox 有watch 方法
- props、methods、inject 以及 computed 通用合并策略：会检查是否是纯对象 子会覆盖父的同名函数
- provide 选项的合并策略： 同 data
没有提及到的选项都将使默认选项 defaultStrat
defaultStrat 的策略是：只要子选项不是 undefined 就使用子选项，否则使用父选项。

****vue初始化
- Vue.prototype._init 方法被第一个执行，这个方法定义在 src/core/instance/init.js 文件中
- 渲染函数的作用域代理：使用原生Proxy
- 初始化 initLifecycle ，生命周期有关
- 初始化 initEvents
- 初始化之 initRender
- 生命周期钩子 存在生命周期钩子的事件监听  beforeCreate initInjections initState initProvide created
- 初始化 initState

**** 数据响应系统 原理 $set $delete
- initData  
	> 根据 vm.$options.data 选项获取真正想要的数据（注意：此时 vm.$options.data 是函数）
    > 校验得到的数据是否是一个纯对象	
	> 检查数据对象 data 上的键是否与 props 对象上的键冲突
	> 检查 methods 对象上的键是否与 data 对象上的键冲突
	> 在 Vue 实例对象上添加代理访问数据对象的同名属性
	> 最后调用 observe 函数开启响应式之路
- 数据响应的基本技术 ：defineProperty(set,get)
- Observer 构造函数
	> value
	> dep
	> vmCount 
	> constructor
	> walk 
		> defineReactive 数据对象的数据属性转换为访问器属性 ---数据对象的属性设置一对 getter/setter，但其中做了很多处理边界条件的工作
		> 若是data 定义了get 没有定义 set ，watch 不到；定义的get 返回的对象中的键值始终 watch 不到
		> set 
			- 判断是否是新值，设置新值
			- 触发依赖
		> get
			- 返回数据的值
			- 收集依赖
	> observeArray
 - 拦截 数组变异  getOwnPropertyNames 把数组实例与代理原型或与代理原型中定义的函数联系起来，从而拦截数组变异方法

**** 渲染函数的观察者--进阶的数据响应系统
 - dep
 - watcher
 - 渲染(render) -> 重新渲染(re-render) 的过程探索数据响应系统更深层次的内容
 - Vue.compile 函数是 Vue 暴露给开发者的工具函数
 - Vue 的 $mount 函数要做的核心事情就是编译模板(template)字符串为渲染函数，
	并将渲染函数赋值给 vm.$options.render 选项，这个选项将会在真正挂载组件的 mountComponent 函数中
 - vm._render 调用 vm.$options.render 函数并返回生成的虚拟节点(vnode)
 - vm._update 是把 vm._render 函数生成的虚拟节点渲染成真正的 DOM
 - 初始watch : 会把观察的字符转化为 函数；
	> const expOrFn = function () {
		  return this.obj.a
		}
	> const expOrFn = 'obj.a'
 - 观察者---内部（计算属性 渲染属性 等）和开发者
 - 基于Watcher创建 $watch watch
 - 计算属性
	> 惰性求值的观察者
	> 收集流程 ： 渲染函数 触发 计算属性的get 计算属性收集 渲染函数观察者对象，响应数据收集 计算属性观察者对象
	> 触发流程： 响应数据修改 触发 所有依赖 --- 计算属性的 触发 渲染函数
 - 同步执行观察者 vue-test-utils  设置 Vue.config.async = false
		
**** 其它重要选项的初始化及实现
 - props 初始化及实现
 - methods 初始化及实现
 - provide 初始化及实现
 - inject 初始化及实现
 
 **** Vue 的编码器初探  (模板字符串---渲染函数)
 - src/compiler/to-function.js
		> 1、缓存编译结果，通过 createCompileToFunctionFn 函数内声明的 cache 常量实现。
		> 2、调用 compile 函数将模板字符串转成渲染函数字符串
		> 3、调用 createFunction 函数将渲染函数字符串转成真正的渲染函数
		> 4、打印编译错误，包括：模板字符串 -> 渲染函数字符串 ( compile 函数 -- baseCompile  )以及 渲染函数字符串 -> 渲染函数 这两个阶段的错误
 -  compile 函数
		> 1、生成最终编译器选项 finalOptions
		> 2、对错误的收集
		> 3、调用 baseCompile 编译模板
 - 在创建编译器的时候传递了基本编译器选项参数，当真正使用编译器编译模板时，依然可以传递编译器选项，并且新的选项和基本选项会以合适的方式融合或覆盖。
 
 **** 词法分析 - 为生成AST做准备
 - parser -字符串模板解析为抽象语法树(AST)  句法分析
 - parseHTML --词法分析
		> parseStartTag
		> handleStartTag
		> parseEndTag  
		 > 检测是否缺少闭合标签 三个参数都传递
		 > 处理 stack 栈中剩余的标签	 只传递第一个参数
		 > 解析 </br> 与 </p> 标签，与浏览器的行为相同 不传递参数

 **** 句法分析 - 生成真正的AST 
 - 主要调用在于钩子
		> start 钩子函数，在解析 html 字符串时每次遇到 开始标签 时就会调用该函数
		> end 钩子函数，在解析 html 字符串时每次遇到 结束标签 时就会调用该函数
		> chars 钩子函数，在解析 html 字符串时每次遇到 纯文本 时就会调用该函数
		> comment 钩子函数，在解析 html 字符串时每次遇到 注释节点 时就会调用该函数
 - start 钩子函数的内容
	  > start 钩子函数是当解析 html 字符串遇到开始标签时被调用的。
		> 模板中禁止使用 <style> 标签和那些没有指定 type 属性或 type 属性值为 text/javascript 的 <script> 标签。
		> 在 start 钩子函数中会调用前置处理函数，这些前置处理函数都放在 preTransforms 数组中，这么做的目的是为不同平台提供对应平台下的解析工作。
		> 前置处理函数执行完之后会调用一系列 process* 函数继续对元素描述对象进行加工。
 - 使用了 v-pre 指令的标签
	  > 如果标签使用了 v-pre 指令，则该标签的元素描述对象的 element.pre 属性将为 true。
		> 对于使用了 v-pre 指令的标签及其子代标签，它们的任何属性都将会被作为原始属性处理，即使用 processRawAttrs 函数处理之。
		> 经过 processRawAttrs 函数的处理，会在元素的描述对象上添加 element.attrs 属性，它与 element.attrsList 数组结构相同，不同的是 element.attrs 数组中每个对象的 value 值会经过 JSON.stringify 函数处理。
		> 如果一个标签没有任何属性，并且该标签是使用了 v-pre 指令标签的子代标签，那么该标签的元素描述对象将被添加 element.plain 属性，并且其值为 true。
 - v-if 指令
	  > 如果标签使用了 v-if 指令，则该标签的元素描述对象的 el.if 属性存储着 v-if 指令的属性值
		> 如果标签使用了 v-else 指令，则该标签的元素描述对象的 el.else 属性值为 true
		> 如果标签使用了 v-else-if 指令，则该标签的元素描述对象的 el.elseif 属性存储着 v-else-if 指令的属性值
		> 如果标签使用了 v-if 指令，则该标签的元素描述对象的 ifConditions 数组中包含“自己”
		> 如果标签使用了 v-else 或 v-else-if 指令，则该标签的元素描述对象会被添加到与之相符的带有 v-if 指令的元素描述对象的 ifConditions 数组中。
 -  key 属性
    > key 属性不能被应用到 <template> 标签。
		> 使用了 key 属性的标签，其元素描述对象的 el.key 属性保存着 key 属性的值。
 **** 基础知识
 - NaN === NaN --> false

****生成真正的AST(二)
 - 解析v-bind指令
    > 任何绑定的属性，最终要么会被添加到元素描述对象的 el.attrs 数组中，要么就被添加到元素描述对象的 el.props 数组中
		> 对于使用了 .sync 修饰符的绑定属性，还会在元素描述对象的 el.events 对象中添加名字为 'update:${驼峰化的属性名}' 的事件 
 - 解析v-on指令
	  > 添加el.events 和 el.nativeEvents

响应系统：
如何避免收集重复的依赖
如何深度观测
如何处理数组
其他边界条件

实现技术：object.defineProperty  
获取属性 a 的时候收集依赖，然后在设置属性 a 的时候触发之前收集的依赖

额外知识点：
原生Proxy 
performance
makeMap
Set
(macro)task microtask 
Promise MessageChannel setImmediate setTimeout
数组copy：obj=[] cope=obj.slice(0),obj.length=0
Reflect.ownKeys  Reflect.ownKeys 配合可枚举过滤等价于 Object.keys 与 Object.getOwnPropertySymbols 配合可枚举过滤之和，
hasSymbol 
CSP 全称是内容安全策略：使用 html-meta Apache  Nginx IIS
合法的 XML: <前缀:标签名称> 例 <k:bug xmlns:k="http://www.xxx.com/xxx"></k:bug> 
ncname： n XML name that does not contain a colon (:) 即：不包含冒号(:)的 XML 名称
qname ：<前缀:标签名称>


const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const doctype = /^<!DOCTYPE [^>]+>/i
const comment = /^<!\--/
const conditionalComment = /^<!\[/


非一元标签 省略闭合标签的非一元标签 一元标签
1、可能是注释节点：<!-- --> comment
2、可能是条件注释节点：<![ ]> conditionalComment
3、可能是 doctype：<!DOCTYPE > doctype
4、可能是结束标签：</xxx>		endTag
5、可能是开始标签：<xxx>    startTagOpen 
6、可能只是一个单纯的字符串：<abcdefg 

[按位或运算符](https://www.cnblogs.com/xiaohuochai/p/5668004.html)

click 事件：~click &click
事件 contextmenu mouseup(event.button)



 
 问题：
 数据虚拟DOM渲染时 根据什么数据 如何收集依赖，
	解答：流程 beforeCreate - prop - method - data - create - computed - watch 
		注册事件观察者 ；渲染的观察者 计算属性的观察者 响应数据的观察者 
		触发 ：同步触发 ： 异步触发 ；涉及浏览器的 task - microtask
 数据改变时，如何 触发重新渲染
	解答：使用属性 defineProperty 存取数据符 ；get 收集 依赖 ；set 触发依赖
 Object.defineProperty 性能表现不佳
 词法分析时，对于没有闭合标签的，如何处理
 正则表达式的 （）捕获使用原理
 针对模板字符匹配字符的思路和代码
 怎么识别对应的if else 语句
 
 兼容：
			1. IE 针对 SVG 元素会修改 属性名 xmlns:NS1="" NS1:xmlns:feature
			2. 