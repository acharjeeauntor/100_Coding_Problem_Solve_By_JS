// Check is a number is prime number or not?

let number = 8
let count = 0 

for(var i=2;i<number;i++){
    if(number%i==0){
        count++
        break
    }
}

if(count == 0){
    console.log(`${number} is a prime number`)
}else{
    console.log(`${number} is not a prime number`)
}