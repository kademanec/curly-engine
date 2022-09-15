//- Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const newCountries = countries.map((element)=>(element.toUpperCase()))
console.log(newCountries)

//- Use map to create an array of countries length from countries array.

const newCountries1 = countries.map((element)=>(element.length))
console.log(newCountries1)

//- Use map to create a new array by changing each number to square in the numbers array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sqnumbers = numbers.map((n)=> n*n)
console.log(sqnumbers)

//- Use map to change to each name to uppercase in the names array
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const newNames = names.map((value)=>value.toUpperCase())
console.log(newNames)

//- Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
let newproducts = products.map((value)=>(value.product+"="+value.price))
console.log(newproducts)