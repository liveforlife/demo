***vue核心代码查看

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


 **** 基础知识
 - NaN === NaN --> false

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
 
 问题：
 数据虚拟DOM渲染时 根据什么数据 如何收集依赖，
 数据改变时，如何 触发重新渲染