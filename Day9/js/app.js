angular.module("eKart",[])
        .controller('productCtrl',productCtrl)
        .factory('products',products)

function productCtrl(products){
   var product = this;

   product.list = products;
   product.items = products[0].products;
    console.log(products)

  product.changeSort = function(type){
      product.sorttype = type
  }

}


function products(){

    return [
        {name:"shoes",
        products:[
            {name:"Nike Air",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
            {name:"Reebok Air",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"Adidas Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"Woodland Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},
        {name:"phones",
        products:[
            {name:"Nike Air",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
            {name:"Reebok Air",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"Adidas Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"Woodland Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},
        {name:"books",
        products:[
            {name:"Nike Air",brand:"Nike",price:20.00,desc:"xyz",rating:4,image:"demo.png"},
            {name:"Reebok Air",brand:"Reebok",price:30.00,desc:"xyz",rating:3,image:"demo.png"},
            {name:"Adidas Ultraboost",brand:"Adidas",price:50.00,desc:"xyz",rating:5,image:"demo.png"},
            {name:"Woodland Rockers",brand:"Woodland",price:40.00,desc:"xyz",rating:1,image:"demo.png"}
        ]},

    ]
}