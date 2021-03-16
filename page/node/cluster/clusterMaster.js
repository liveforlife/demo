const cluster = require('cluster');

if(cluster.isMaster){
    const curNum = require('os').cpus().length;
    for(let i=0;i<curNum;i++){
        cluster.fork()
    }
  
    cluster.on('online',(worker)=>{
        console.log('Create Worker - '+worker.process.pid)
    })

    cluster.on('exit',(worker,code,signal)=>{
        console.log('[Master Worker]'+worker.process.pid +'died with code'+code+',and'+signal)
        cluster.fork()
    })
}else{
    const net = require('net');
    net.createServer().on('connection',(socket)=>{
        setTimeout(()=>{
            socket.end('Request handle by worker-' +process.pid)
        },100)
    }).listen(8989)
}