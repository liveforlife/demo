
const webSocket=require('ws')
const webSocketServer=webSocket.Server
const wss=new webSocketServer({
    port:3000
})

wss.on('connection',function(ws){
    console.log(`[SERVER] connection()`)
    ws.on('message',function(message){
        console.log(`[SERVER] Received: ${message}`)
        ws.send(`ECHD :${message}`,(err)=>{
            if(err){
                console.log(`[SERVER] is ${err}`)
            }
        })
    })
})