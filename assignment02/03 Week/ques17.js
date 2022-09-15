//- Use find to find the first country containing only six letters in the countries array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

let x = (countries.find((val)=>val.length==6))
console.log(x)

//- Use findIndex to find the position of the first country 
//containing only six letters in the countries array
let y = (countries.findIndex((val)=>val.length==6))
console.log(y)

//- Use findIndex to find the position of Norway 
// if it doesn't exist in the array you will get -1.
let z = (countries.findIndex((val)=>val=="Norway"))
console.log(z)

//- Use findIndex to find the position of Russia 
//if it doesn't exist in the array you will get -1.
let z1 = (countries.findIndex((val)=>val=="Russia"))
console.log(z1)
