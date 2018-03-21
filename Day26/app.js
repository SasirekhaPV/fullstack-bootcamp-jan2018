angular.module("demoApp",["firebase"])
        .controller("secondCtrl",secondCtrl)



function secondCtrl($firebaseArray,$firebaseAuth){
    var second = this;
   // console.log(JSON.parse(localStorage.getItem("tasks")))

   var rootRef = firebase.database().ref();
   second.tasks = $firebaseArray(rootRef);

     var auth = $firebaseAuth();
   
     second.googleLogin = function(){
        auth.$signInWithPopup("facebook").then(function(result) {

            second.user = result.user
            console.log("Signed in as:", result.user.uid);
          }).catch(function(error) {
            console.error("Authentication failed:", error);
          });
     }
 


    second.addTask = function(){
         var d = new Date()
            var obj = {id:d.getTime(),name:second.name,status:false, username:second.username}
            second.tasks.$add(obj)
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

}

    
}
