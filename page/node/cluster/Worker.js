
process.on('message',(msg,val)=>{
    if(msg === 'socket' && val){ // worker 获得 普天对象和socket
        setTimeout(()=>{
            socket.end('Request handle by worker-' + process.pid)
        },100)
    }
    if(msg === 'tcpServer' && val){ // 获取tcpServer ，worker 抢占式处理（无法实现负载均衡）
        val.on('connection',(socket)=>{
            setTimeout(()=>{
                socket.end('Request handle by worker-' + process.pid)
            },100)
        })
    }
})