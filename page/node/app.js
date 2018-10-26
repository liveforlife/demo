const express = require('express');
const fs = require('fs'); //文件系统
const url = require('url');
//const gbk = require('gbk');  //HTML 转码
//const JSDOM = require('jsdom').JSDOM;  // DOM对象调用
//const Segment = require('segment');  //字符识别
var server= express();
var index=0;
server.listen(8213);

/*
 * 问题
 * （1）nodeJs send 无法传递 对象
 * （2）ajax 请求  ‘/getMag’ ,get方式  传递字段自动根据 & 切割了
 */
server.use('/getMsg',(req,res)=>{
	getUrlMassage(req.query.str,(data)=>{
		res.send(data);
	});
		//var html = gbk.toString('utf-8',data);

	//	console.log(data)
		//fs.writeFile('yq.html',data);
		//console.log(html)

//		let DOM = new JSDOM(data);
//		let document = DOM.window.document;
//
//		var myHtml = document.querySelector('.read-content').innerHTML.replace(/<[^>]+>/g,'')
})

function getUrlMassage(sUrl,success){
	console.log(sUrl)
	index++;
	var urlObj=url.parse(sUrl);
	var http='';
	//console.log(urlObj.protocol);
	if(urlObj.protocol === 'http:'){
		http=require('http');
	}else if(urlObj.protocol === 'https:'){
		http=require('https');
		//console.log(222)
	}
	//console.dir(http);
	let req=http.request({
		'hostname':urlObj.hostname,
		'path':urlObj.path
	},res=>{
		if(res.statusCode ==200){
			var arr=[];
			var str='';
			res.on('data',buffer=>{
				arr.push(buffer);
				str+=buffer;
			})
			res.on('end',()=>{
				success & success(sUrl);
//				return str;
			})
		}else if(res.statusCode == 301 || res.statusCode == 302){
			console.log('我是'+index+'次重定向');
			getUrlMassage(res.headers.location,success);
		}
	});
	req.end();
	req.on('error',()=>{
		console.log('404了')
	})
	//console.log(sUrl);
}
server.use(express.static('./'))