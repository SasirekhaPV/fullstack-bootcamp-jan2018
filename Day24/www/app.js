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

function secondCtrl($http){
    var second = this;
   // console.log(JSON.parse(localStorage.getItem("tasks")))
    second.tasks = []

    $http.get('/tasks').then(function(results){

        second.tasks = results.data;

    })


    second.addTask = function(){
         var d = new Date()
            var obj = {name:second.name,status:false,time:new Date()}

            $http.post("/task",obj).then(function(result){
                second.tasks.push(result.data);

            }).catch(function(err){
                console.log(err)
            })

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
    $http.delete("/task/"+id).then(function(result){
        console.log(result)
    })
    console.log(second.tasks)
}

second.checkTask = function(id){
    second.tasks[fetchIndex(id)].status = !second.tasks[fetchIndex(id)].status

    $http.put("/task/"+id,second.tasks[fetchIndex(id)]).then(function(result){
        console.log(result)
    })
}


function fetchIndex(id){
    var index ;

    for(i=0;i<second.tasks.length;i++){
        if(second.tasks[i]._id == id){
            index = i;
        }
       }
       return index
}



    
}
