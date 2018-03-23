angular.module("demoApp",["firebase"])
        .controller("secondCtrl",secondCtrl)



function secondCtrl($firebaseStorage){
    var second = this;
    var storageRef = firebase.storage().ref("images/dog");
    second.storage = $firebaseStorage(storageRef);


    second.upload = function(){
       
       var file=  document.getElementById("file").files[0];
       console.log(file)


        var uploadTask = second.storage.$put(file);
        uploadTask.$complete(function(snapshot) {
            console.log(snapshot.downloadURL);
          });
    }
   


}
