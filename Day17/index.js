var express = require("express");
var cors = require('cors');


var server = express();
server.use(cors());

var products =[
    {name:"shoes",
    products:[
        {name:"Nike Air",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png",tech:"jakshjdshjdshjsdjhjh"},
        {name:"Reebok Air",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
        {name:"Adidas Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
        {name:"Woodland Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
    ]},
    {name:"phones",
    products:[
        {name:"Samsung",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
        {name:"Nokia",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
        {name:"Apple Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
        {name:"MI Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
    ]},
    {name:"books",
    products:[
        {name:"H C Verma",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
        {name:"Blackbook",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
        {name:"AI Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
        {name:"Inferno Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
    ]},

]

server.get("/",function(req,res){

var name = req.query.user;


    for(var i=0;i<products.length;i++){
        if(name==products[i].name){
            res.json(products[i].products)
        }
    }

    
})

server.get("/products",function(req,res){
    res.json({"products":products})
})

server.listen(7000,function(){
    console.log("server started")
})