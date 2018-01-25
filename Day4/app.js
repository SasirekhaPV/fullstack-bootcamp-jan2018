var list = [];

function addItem(){
   var item = $("#item").val()
   list.push({label:item,status:false})
   $("#item").val("")
   console.log(list)
   dataToList()
}


function dataToList(){
    $("#itemlist").html("")
    for(var i=0;i<list.length;i++){
         $("#itemlist").append("<li onclick='checkItem("+i+")' class='"+(list[i].status?'list-group-item list-group-item-success':'list-group-item ')+"' >"+list[i].label+"<button onclick='selectItem("+i+")'>del</button></li>")
        
        }
}

function selectItem(index){
console.log("selected")
list.splice(index,1);
dataToList()
}

function checkItem(index){
    console.log("selected")
    list[index].status = true;
    dataToList()
}