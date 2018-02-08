angular.module("chatApp",[])
       .config(config)
       .run(run)
       .constant("PI",3.14)
      
      

   function run(data){
     console.log("run")       
   }
   function config(){
    console.log("config")       
  }