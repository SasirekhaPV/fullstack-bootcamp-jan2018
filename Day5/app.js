angular.module("demoApp",[])
        .controller("firstCtrl",firstCtrl)
        .controller("secondCtrl",secondCtrl)

function firstCtrl(){
    var first = this;
    first.name = "abc"

    first.showLink = function(){
        console.log("show")
        first.flag = true
    } 



    
}

function secondCtrl(){
    var second = this;
    second.tasks = []

    second.addTask = function(){
            var obj = {name:second.name,status:false}
            second.tasks.push(obj)
            console.log(second.tasks)
    }
    second.popTask = function(){
        second.tasks.pop()
        console.log(second.tasks)
}

second.delTask = function(i){
    second.tasks.splice(i,1)
    console.log(second.tasks)
}

second.checkTask = function(i){
    second.tasks[i].status = !second.tasks[i].status
}
    
}