// How to Count Occurrences of a Character in String

var string = "Today is Monday"
var arrayOfString = string.split("")
var count=0;
var foundChar='a'
for(var i=0;i<arrayOfString.length;i++){
    if(arrayOfString[i]===foundChar){
        count++
    }
}
console.log(`Total number of ${foundChar} is: ${count}`)
