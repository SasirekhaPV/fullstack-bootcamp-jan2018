var input = "world health org"

var feed = [{
    name : "abhishek",
    pic : "mario.png",
    status : "demo caption",
    likes : [{name:"jay",link:"xyz"},
                {name:"abc",link:"xyz"},
                {name:"liker",link:"xyz"},
                {name:"disliker",link:"xyz"}],
    comments : [{name:"jay1",link:"xyz",comment:"demo"},
                {name:"abc1",link:"xyz",comment:"test"},
                {name:"liker1",link:"xyz",comment:"test3"},
                {name:"disliker1",link:"xyz",comment:"test2"}]
},
{
    name : "jay",
    pic : "mario.png",
    status : "demo caption",
    likes : [{name:"jay",link:"xyz"},
                {name:"abc",link:"xyz"},
                {name:"liker",link:"xyz"},
                {name:"disliker",link:"xyz"}],
    comments : [{name:"jay2",link:"xyz",comment:"demo"},
                {name:"abc",link:"xyz",comment:"test"},
                {name:"liker2",link:"xyz",comment:"test3"},
                {name:"disliker2",link:"xyz",comment:"test2"}]
},
{
    name : "abhay",
    pic : "mario.png",
    status : "demo caption",
    likes : [{name:"supername",link:"xyz"},
                {name:"abc",link:"xyz"},
                {name:"liker",link:"xyz"},
                {name:"disliker",link:"xyz"}],
    comments : [{name:"jay",link:"xyz",comment:"demo"},
                {name:"abc",link:"xyz",comment:"test"},
                {name:"demo",link:"xyz",comment:"test3"},
                {name:"disliker",link:"xyz",comment:"test2"}]
}
]


feed[2].likes[0].name


var common = []
var post3 = feed[2]
for(var i=0;i<post3.likes.length;i++){
    for(var j=0;j<post3.comments.length;j++){
        if(post3.likes[i].name == post3.comments[j].name){
            common.push(post3.likes[i])
        }
    }
}

console.log(common)


var commenters = []


for(var i=0;i<feed.length;i++){
        var post = feed[i];

        for(var j=0;j<post.comments.length;j++){
            commenters.push(post.comments[j].name)
        }


}

console.log(commenters)







var words = input.split(" ");
var acronym = []
var rev = []

for(var i=0;i<words.length;i++){
    acronym.push(words[i][0])
}
for(var i=0;i<words.length;i++){
    var reverseWord = words[i].split('').reverse().join('')
    rev.push(reverseWord)
}


var STR1 = "GAGCCTACTAACGGGAT"
var STR2 = "CATCGTAATGACGGCCT"
var diff = 0;

for(var i=0;i<STR1.length;i++){
    if(STR1[i]!=STR2[i]){
        diff++;
    }
}
console.log(diff);

console.log(rev.join(" "))
console.log(acronym.join(".").toUpperCase())
