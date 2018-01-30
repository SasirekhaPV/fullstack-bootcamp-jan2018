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
            var obj = {id:second.tasks.length,name:second.name,status:false,time:new Date()}
            second.tasks.push(obj)
            console.log(second.tasks)
            second.name = ""
    }
    second.popTask = function(){
        second.tasks.pop()
        console.log(second.tasks)
}

second.delTask = function(id){
   
  
    second.tasks.splice(fetchIndex(id),1)
    console.log(second.tasks)
}

second.checkTask = function(id){
    second.tasks[fetchIndex(id)].status = !second.tasks[fetchIndex(id)].status
}


function fetchIndex(id){
    var index ;

    for(i=0;i<second.tasks.length;i++){
        if(second.tasks[i].id == id){
            index = i;
        }
       }
       return index
}

    
}
