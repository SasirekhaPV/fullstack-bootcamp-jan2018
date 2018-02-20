angular.module('api',[])
.controller("testCtrl",testCtrl)


function testCtrl($http){
    var test = this;

    test.check = function(){
        var url  = 'https://randomuser.me/api/?results=10';
        $http.get(url).then(function(result){
            test.users = result.data.results;
            var data = angular.copy(test.users);


        })
        console.log("exit");

    }

    test.check()



}