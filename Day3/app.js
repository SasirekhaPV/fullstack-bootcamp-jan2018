console.log("hello")

var a =5;
console.log(a);


function reduceSize(){
   var w = parseInt($("#mario").css("width"));
   $("#mario").css("width",w/2); 
}

function changeText(){
   var name = $("#name").val();
   $(".heading").text(name);
 }


function changeStyle(){
    var c = $("#name").val();
    $(".heading").css("color",c).hide('slow'); 

  }
 

function addItem(){
    var item = $("#newitem").val()
    $("#list").append("<li class='list-group-item'>"+item+"</li>")
    $("#newitem").val("")
}  



