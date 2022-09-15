//- Define a callback function before you use it in forEach, map, filter or reduce.

//A callback is a function passed as an argument to another function.
//This technique allows a function to call another function
//A callback function can run after another function has finished


//call back using forEach
let names = [
    {name:"anna"},
    {name: "beth"},
    {name: "chris"},
    {name: "daniel"},
    {name: "ethan"}
]
function rollCall(student,index){
    return `Hi My name is ${student.name} and my roll number is ${index}`;
    
}
names.forEach((name, index) => console.log(rollCall(name, index)));

let result = names.map(rollCall);

console.log(result);

function isBigEnough(value) {
    return value >= 10;
}
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)

const getMax = (a, b) => Math.max(a, b);
// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50));