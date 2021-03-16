// child_process实现node集群操作
const childProcess = require('child_process')
const net = require('net')

const cpuNum = require('os').cpus().length

let workers =[]
let cur = 0

for(let i = 0;i<cpuNum;i++){
    workers.push(childProcess.fork('./Worker.js'))
    console.log(`worker process -${workers[i].pid}`)
}

const  tcpServer = net.createServer()

tcpServer.on('connection',(socket)=>{
    workers[cur].send('socket',socket)
    cur = Number.parseInt((cur +1 )% cpuNum)
})

tcpServer.listen('8989',()=>{
    console.log('TCP Server is 127.0.0.1:8989')
    for(let i =0;i<cpuNum;i++){
        workers[i].send('tcpServer',tcpServer)
        workers[i].on('exit',((i)=>{
            return ()=>{
                console.log('worker-'+workers[i].pid+' exited');
                workers[i] = childProcess.fork('./worker.js');
                console.log('Create worker - '+workers[i].pid);
                workers[i].send('tcpServer',tcpServer);
            }
        })(i))
    }
    // 不能关闭master线程的，否则的话，句柄将为空，无法正常传递
    // tcpServer.close() 
})