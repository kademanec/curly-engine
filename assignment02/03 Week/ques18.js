// - create an empty set
// - Create a set containing 0 to 10 using loop
// - Remove an element from a set
// - Clear a set
// - Create a set of 5 string elements from array
// - Create a map of countries and number of characters of a country
let set = new Set();
console.log(set,"empty set")

let value = new Set([0,1,2,3,4,5,6,7,8,9,10]);
console.log(value,"set containing 0 to 10 elements")
value.delete(0)
console.log(value)

value.clear();
console.log(value)
const countries = ['India','Australia','SriLanka','Russia','USA']

let countriesSet= new Set([countries])
console.log(countriesSet)

let setmap = new Map();
for(let i =0;i<countries.length;i++){
    setmap.set(countries[i])
}
console.log(setmap)







