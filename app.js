const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const simpleGame = require('./simpleGame')
app.get('/',function(req,res){
 res.sendFile(__dirname+"/game.html")
})
app.get('/simpleGame.js',function(req,res){
    res.sendFile(__dirname+"/simpleGame.js")
   })
   io.on('connection',function(socket){
       socket.on('game',function(locationx,locationy){
           io.emit('game',locationx,locationy)
           console.log(locationx+" "+locationy)
       })
    })

http.listen(3000,console.log("start"))