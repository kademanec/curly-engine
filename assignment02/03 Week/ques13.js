//- Use reduce to sum all the numbers in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumval = numbers.reduce((val,accu)=>{
    return val+accu;
})
console.log(sumval)