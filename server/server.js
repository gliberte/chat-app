const path = require('path')
const http = require('http') //requerido para usar socketio
const express = require('express')
const app = express()
const socketIO = require('socket.io')

var server = http.createServer(app)
var io = socketIO(server)
const port = process.env.PORT || 4000

app.use(express.static(path.join(__dirname,'..','public')))

io.on('connection',(socket)=>{
    console.log('New user connected')

    socket.on('disconnect',(socket)=>{
        console.log('client disconnected')
    })
})

server.listen(port,()=>{
    console.log(`Server listen on ${port}`)
})