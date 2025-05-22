/*

Datatype --> It basically defines what type of data we are going to store inside a variable.

1. Primitive
   a. Number
   b. String ( It can be a single character or group of characters which are enclosed within  
      single or double quotes)
   c. Boolean ( true, false )
   d. BigInt
   e. null ( User explicitely define that the variable haven't any value )
   f. undefined (  After declaring a variable if we don't assign any value then javascript   
      will automatically add a value called "undefined" )
   g. Symbol

2. Non-Primitive

*/ 


// let myName = null

// console.log(myName);

const rollNo = 101  // number --> int
const PI = 3.142  // number --> float

let myName = 'R'
myName = "A"

console.log(typeof myName);

let isLoggedIn = false
isLoggedIn = true
console.log(typeof isLoggedIn);

let longNum = 89634876832746876342876428763782687268963487634876784687246876n
console.log(typeof longNum);

console.log(longNum);

let data = null  // null
console.log(typeof data);
let value // undefined
console.log(typeof value);

