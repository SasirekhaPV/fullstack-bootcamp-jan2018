var express = require("express");
var server = express();
var bodyParser = require('body-parser');

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

server.use(express.static('www'));
server.use(bodyParser.json())

var url = "mongodb://localhost:27017";
var db;
MongoClient.connect(url,function(err,client){

    db = client.db("todolist");
    console.log(err);
})

server.get("/tasks",function(req,res){
    db.collection("tasks").find({}).toArray(function(err,results){
        res.json(results)
    })


})


server.delete("/task/:id",function(req,res){

    console.log(req.params.id)
    db.collection('tasks').deleteOne({_id:new mongodb.ObjectID(req.params.id)},function(err,result){
        console.log(result)
        if(err==null){
            res.send(204);
        }
    })
   

})


server.put("/task/:id",function(req,res){

    console.log(req.params.id)
    console.log(req.body)
    var obj = {status:req.body.status};
    db.collection('tasks').updateOne({_id:new mongodb.ObjectID(req.params.id)},{$set:obj},function(err,result){
        console.log(result,err)
        if(err==null){
            res.send(204);
        }
    })
   

})

server.post("/task",function(req,res){
    console.log(req.body)
    db.collection("tasks").insertOne(req.body,function(err,result){

     
        if(err == null){
            res.json(req.body)
        }
    })
    
})

server.listen(8000,function(){
    console.log("server started")
})