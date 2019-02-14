/**
 * npm包 上传
 * 1.命令行工具登录npm
 * 	npm login
 * 2.验证登录是否成功
 * 	npm who am i
 * 3.创建npm库
 * 	npm init
 * 4.发布npm包
 * 	npm publish
 * 5.版本更新
 * 	npm version <update_type> -m "<message>"
 * 	patch增加一位补丁号（比如 1.1.1 -> 1.1.2）
 * 	minor增加一位小版本号（比如 1.1.1 -> 1.2.0）
 * 	major增加一位大版本号（比如 1.1.1 -> 2.0.0）
 * 	例如 npm version patch -m "Version %s - v1.0.2"
 * 	最后提交：npm publish
 * 6.舍弃某个版本的模块
 * 	npm deprecate my-thing@"< 1.0.2" "critical bug fixed in v1.0.2"
 * 7.撤销自己发布的版本
 *  npm --force unpublish zgb_npm
 */

export sayHello=function(){
	return 'Hello,update today'
}