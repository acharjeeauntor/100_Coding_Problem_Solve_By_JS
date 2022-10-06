// How to swap two Integers without using a temporary variable

var x=10
var y=-20

console.log(`Before Swap, x is ${x}, y is ${y}`)
console.log("Swapping using Normal Operator (+,-)")

x = x+y
y = x-y
x = x-y

console.log(`After Swapping, x is ${x}, y is ${y}`)

var a=5
var b=10

console.log(`Before Swap, a is ${a}, b is ${b}`)
console.log("Swapping using XOR Operator")

a=a^b
b=a^b
a=a^b

console.log(`After Swapping, a is ${a}, b is ${b}`)




