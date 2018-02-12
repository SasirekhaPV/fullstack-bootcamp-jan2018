angular.module("demoApp",['ngRoute'])
    .config(config)
    .controller("homeCtrl",homeCtrl)
    .controller("contactCtrl",contactCtrl)



    function config($routeProvider){

        $routeProvider
            .when("/home",{
                templateUrl:"home.html",
                controller:"homeCtrl",
                controllerAs :"home"
            })
            .when("/contact",{
                templateUrl:"contact.html",
                controller:"contactCtrl",
                controllerAs :"contact"
            })
           

    }

    function homeCtrl(){
        console.log("home")
    }
    function contactCtrl(){
        console.log("contact")
    }
