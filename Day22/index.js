var express = require("express");
var bodyParser = require("body-parser");
var _ = require("underscore");

var server = express();

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


var all_countries = [
    {name:"india",iso:"IN"},
    {name:"america",iso:"US"}
]

var result = all_countries.map(function(country){
    return {name:country.name,length:country.name.length};
})

all_countries.forEach(function(country){
    console.log(country.name)
})

console.log(_.pluck(all_countries,'iso'));
console.log(result)


server.get("/person",function(req,res){
    res.send(500)
})



server.get("/country",function(req,res){
    var c= req.query.country

    // for(var i=0;i<all_countries.length;i++){
    //     if(c==all_countries[i].name){
    //         res.json(all_countries[i])
    //     }
    // }

  var result =  all_countries.find(function(country){
        return country.name ==c;
    })

    res.json(result)
    
})


server.get("/nation/:name",function(req,res){
    var c= req.params.name

    for(var i=0;i<all_countries.length;i++){
        if(c==all_countries[i].name){
            res.json(all_countries[i])
        }
    }

    
})

server.post("/country",function(req,res){
    var c= req.body.country

    for(var i=0;i<all_countries.length;i++){
        if(c==all_countries[i].name){
            res.json(all_countries[i])
        }
    }

    
})


server.listen(8000,function(){

})


