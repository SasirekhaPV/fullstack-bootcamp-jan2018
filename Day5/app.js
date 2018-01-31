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
   // console.log(JSON.parse(localStorage.getItem("tasks")))
    second.tasks = JSON.parse(localStorage.getItem("tasks")) || []

    second.addTask = function(){
         var d = new Date()
            var obj = {id:d.getTime(),name:second.name,status:false,time:new Date()}
            second.tasks.push(obj)
            saveList()
            console.log(second.tasks)
            second.name = ""
    }
    second.popTask = function(){
        second.tasks.pop()
        saveList()
        console.log(second.tasks)
}

second.delTask = function(id){
   
  
    second.tasks.splice(fetchIndex(id),1)
    saveList()
    console.log(second.tasks)
}

second.checkTask = function(id){
    second.tasks[fetchIndex(id)].status = !second.tasks[fetchIndex(id)].status
    saveList()
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

function saveList(){
    localStorage.setItem("tasks",JSON.stringify(second.tasks));

}

    
}
