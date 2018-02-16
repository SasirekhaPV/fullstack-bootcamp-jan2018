angular.module("eKart",['ngRoute'])
        .config(config)
        .controller('productCtrl',productCtrl)
        .controller('aboutCtrl',aboutCtrl)
        .controller('detailCtrl',detailCtrl)
        .factory('products',products)


function config($routeProvider){

    $routeProvider
    .when("/category/:category",{
        templateUrl:'partials/home.html',
        controller:'productCtrl',
        controllerAs:'product'
    })
    .when("/category/:category/product/:product",{
        templateUrl:'partials/product.html',
        controller:'detailCtrl',
        controllerAs:'detail'
    })
    .when("/category/:category/:brand",{
        templateUrl:'partials/product.html',
        controller:'productCtrl',
        controllerAs:'product'
    })
    .when("/about",{
        templateUrl:'partials/about.html',
        controller:'aboutCtrl',
        controllerAs:'about'
    })
    .otherwise({redirectTo:"/category/0"})


}


function aboutCtrl(products){
    console.log("about",products)
}

function detailCtrl(products,$routeParams){
    console.log($routeParams)
    var detail = this;
    var category = products[parseInt($routeParams.category)]
    console.log(category)

    for(var i=0;i<category.products.length;i++){
        if($routeParams.product==category.products[i].name){
            detail.item = category.products[i]
        }
    }
}

function productCtrl(products,$routeParams){
   var product = this;

   console.log($routeParams.category)

   product.category = $routeParams.category;
   product.list = products;
   product.items = products[parseInt($routeParams.category)].products;
    console.log(products)

  product.changeSort = function(type){
      product.sorttype = type
  }

  product.rating = function(actual,input){
    console.log(actual.rating,input)
      return actual.rating>=parseInt(input)
  }

}


function products(){

    return [
        {name:"shoes",
        products:[
            {name:"Nike Air",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png",tech:"jakshjdshjdshjsdjhjh"},
            {name:"Reebok Air",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"Adidas Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"Woodland Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},
        {name:"phones",
        products:[
            {name:"Samsung",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
            {name:"Nokia",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"Apple Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"MI Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},
        {name:"books",
        products:[
            {name:"H C Verma",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
            {name:"Blackbook",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"AI Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"Inferno Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},

    ]
}