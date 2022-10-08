// How to find largest and smallest number from integer array 

var array = [8,0,2,45545,36,776,7775,-448943,93,-637,-9]

var sortArray = array.sort((a,b)=>a-b)

console.log(`Sort Array= ${sortArray}`)
console.log(`Largest Number is: ${sortArray[sortArray.length-1]}`)
console.log(`Smallest Number is: ${sortArray[0]}`)

