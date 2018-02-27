var express = require('express');

var server = express();

var task = []

server.use(express.static('public'))

server.get("/home",function(req,res){
    res.json({name:"abc"})
})

server.listen(8081,function(){
    console.log("server started");
})