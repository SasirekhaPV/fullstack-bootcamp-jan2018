angular.module("demoApp",[])
        .controller("firstCtrl",firstCtrl)

function firstCtrl(){
   var first = this;
   var list = [
       {name:"india.png",keys:["india","ind","bharat"]},
       {name:"us.gif",keys:["united states","usa"]}
    ]
   
    first.search = function(term){
        //console.log(term)
        first.pic = ""
         for(var i=0;i<list.length;i++){
             for(var j=0;j<list[i].keys.length;j++){
                 if( term==list[i].keys[j] ){
                     first.pic = list[i].name ;
                 }
             }
         }   

    }



  
}