## commit rule

<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>

type：提交类型，可选值如下
* work: 开发中(work in progress)
* feature：新功能(new feature)
* fix：修补bug(fix bug)
* doc：文档(documentation changes)
* style： 格式(change code format)
* refactor：重构(modify code but not feature)
* test：增加测试(test code)
* chore：构建过程或辅助工具的变动(changes don't modify src and test files, only config or tasks)
scope：
用于说明 commit影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
subject：commit 目的的简短描述。
body: 对本次 commit 的详细描述
footer: 描述一些特殊情况，不兼容变动和issue关闭。
