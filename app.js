const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const simpleGame = require('./simpleGame')
var numPlayer=0;

app.get('/',function(req,res){
 res.sendFile(__dirname+"/game.html")
})
app.get('/simpleGame.js',function(req,res){
    res.sendFile(__dirname+"/simpleGame.js")
   })

   io.on('connection',function(socket){
       socket.on('newplayer',function(){
           socket.player={
               x: randomInt(10,100),
               y: randomInt(10,100)
           }
           io.emit('newplayer',socket.player)
          
       })
       socket.on('play',function(location){
           io.emit('play',location)
       })
   })
  

   function randomInt(low,hight){
       return Math.floor(Math.random()*(hight-low)+low)
   }

http.listen(3000,console.log("start"))