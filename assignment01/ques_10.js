// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.


//Truthy values
let str ="Hello how are you?"
console.log(isNaN(str)); // this compares the above string with number where it's a string 
                         //so it Is Not a Number

console.log(10>3); // gives true value since 10 is greater than 3.

console.log(10=="10"); // compares 10 with 10 doesn't care about type of.

//Falsy values
let num = 12345
console.log(isNaN(num)); // the above variable contains the number so it's a number

console.log(10<4); // returns us false since 10 is greater than 4 

console.log(10==="10") // compares number 10 with string 10, which is false both should be number when we give ===

