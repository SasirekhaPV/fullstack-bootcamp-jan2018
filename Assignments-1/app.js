var input = "world health org"

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
