// How to Reverse an Array in Javascript - Integer and String Array

var stringArray =['One','Two','Three']
var intArray=[5,0,4]

var newStringArray =[]
var newIntArray=[]

for(var i=stringArray.length-1;i>=0;i--){
    newStringArray.push(stringArray[i])
}
for(var i=intArray.length-1;i>=0;i--){
    newIntArray.push(intArray[i])
}

console.log(newStringArray)
console.log(newIntArray)
