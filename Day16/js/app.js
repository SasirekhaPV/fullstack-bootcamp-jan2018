angular.module("eKart",['ngRoute'])
        .config(config)
        .controller('productCtrl',productCtrl)
        .controller('aboutCtrl',aboutCtrl)
        .controller('detailCtrl',detailCtrl)
        .controller('cartCtrl',cartCtrl)
        .controller('navCtrl',navCtrl)
        .factory('products',products)
        .factory('kart',kart)



        
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
    .when("/cart",{
        templateUrl:'partials/cart.html',
        controller:'cartCtrl',
        controllerAs:'cart'
    })
    .otherwise({redirectTo:"/category/shoes"})


}

function navCtrl(kart){
    var nav = this;
    nav.total = kart;
}

function cartCtrl(kart){
 var cart = this;

 cart.items = kart;


 cart.total = function(){

    var sum =0;
    for(var i=0;i<kart.length;i++){
        sum = sum + kart[i].price*kart[i].qty;
    }
    cart.grandTotal = sum
 }
  cart.total()

}

function aboutCtrl(products){
    console.log("about",products)
}

function detailCtrl(products,$routeParams){
    console.log($routeParams)
    var detail = this;

    var index;
    for(var i=0;i<products.length;i++){
        if($routeParams.category == products[i].name){
             index =i;
        }
    }
    var category = products[index]
    console.log(category)

    for(var i=0;i<category.products.length;i++){
        if($routeParams.product==category.products[i].name){
            detail.item = category.products[i]
        }
    }
}

function productCtrl(products,$routeParams,kart){
   var product = this;

   console.log($routeParams.category)

   product.category = $routeParams.category;
   product.list = products;
   var index;
   for(var i=0;i<products.length;i++){
       if($routeParams.category == products[i].name){
            index =i;
       }
   }


   product.items = products[index].products;
    console.log(products)

  product.changeSort = function(type){
      product.sorttype = type
  }

  product.rating = function(actual,input){
    console.log(actual.rating,input)
      return actual.rating>=parseInt(input)
  }

  product.add = function(item){
      console.log(item);
      kart.push({name:item.name,qty:"1",price:item.price})
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


function kart()
{
    return [
        
    ]
}
