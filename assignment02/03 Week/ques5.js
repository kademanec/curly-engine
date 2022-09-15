//- Explain the difference between forEach, map, filter, and reduce.

//Foreach
//Foreach takes a callback function and run that callback function 
//on each element of array one by one.

var sample = [1, 2, 3];
sample.forEach((elem, index) => `${elem} comes at ${index}`)
console.log(sample+" foreach")

// Filter
// The main difference between forEach and filter is that forEach just loop 
// over the array and executes the callback but filter executes the callback and check its return value.
// If the value is true element remains in the resulting array but 
// if the return value is false the element will be removed for the resulting array.
// Also take notice filter does not update 
// the existing array it will return a new filtered array every time.

let result = sample.filter((el,ind)=>(el!==2));
console.log(result + " filter")

// Map ran through every element of the array, multiplied it to 10 
// and returned the element which will be going to store inside our resulting array.
// Like filter, map also returns an array. The provided callback to map modifies the array elements 
// and save them into the new array upon completion that array get returned as the mapped array.

let mapped = sample.map(elem => elem * 10)
console.log(mapped+ " map");

// Reduce method of the array object is used to reduce the array to one single value.
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum+" reduce");
//reduce takes a callback ( like every function we talked about ). Inside this callback we get 
//two arguments sum & elem. The sum is the last returned value of the reduce function. 
//For example initially the sum value will be 0 then when the callback runs on the first element 
//it will add the elem to the sum and return that value.
//On second iteration the sum value will be first elem + 0, 
//on third iteration it will be 0 + first elem + second elem.
//So that is how reduce works 
//it reduces the array into one single value and returns it upon completion.