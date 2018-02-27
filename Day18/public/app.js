angular.module("demoApp",[])
        .controller("firstCtrl",firstCtrl)



function firstCtrl($http){

console.log("first")
var first = this;

$http.get('/home').then(function(results){
   console.log(results)
    first.user = results.data
})
   

}




