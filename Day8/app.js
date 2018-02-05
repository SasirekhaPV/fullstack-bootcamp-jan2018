angular.module("demoApp",[])
        .controller("firstCtrl",firstCtrl)
        .controller("secondCtrl",secondCtrl)
        .factory("data",data)



function firstCtrl(data){

console.log("first")
var first = this;

   first.user = data.user

}

function secondCtrl(data){

    console.log("second")
    var second = this;
    second.user = data.user
}

function data(){ 
    console.log("data")
    return {user:{}}
}
