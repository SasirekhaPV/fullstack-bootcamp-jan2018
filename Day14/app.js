angular.module('api',[])
.controller("testCtrl",testCtrl)


function testCtrl($http){
    var test = this;

    test.check = function(){
        var url  = 'https://api.genderize.io?name='+test.name;
        $http.get(url).then(function(result){
            console.log(result.data.gender)
        })
        console.log("exit");

    }

    test.search = function(){
        var url  = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='+test.name+'&apikey=1f1eef6169fc3b523d81a6983f7e14f2';
        $http.get(url).then(function(result){
           test.chars =  result.data.data.results
           console.log(result.data.data.results)
        },function(err){
            
        })
        console.log("exit");

    }


}