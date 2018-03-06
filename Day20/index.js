var express = require("express");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var server = express();
server.use(express.static('www'));

var url = "mongodb://localhost:27017";
var db;
MongoClient.connect(url,function(err,client){

    db = client.db("firstDatabase");
    console.log(err);
})



server.get("/user",function(req,res){


    var name  = req.query.name;
    db.collection('students').insertOne({name:name},function(err,result){
        console.log(err,result);
        res.json({status:"success"})
    })
    
})

server.get("/users",function(req,res){

    db.collection('students').find({}).toArray(function(err,result){
        console.log(err,result);
        res.send(result);
    })
    
})
server.listen(8000,function(){
    console.log("server started")
})

console.log("test")