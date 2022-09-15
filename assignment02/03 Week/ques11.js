const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland','England']
// - Use filter to filter out countries containing land.
const newCountries = countries.filter((element)=> element.includes("land"))
console.log(newCountries)
// - Use filter to filter out countries having six character.
const newCountries1 = countries.filter((element)=> element.length == 6)
console.log(newCountries1)
// - Use filter to filter out countries containing six letters and more in the country array.
const newCountries2 = countries.filter((element)=> element.length >= 6)
console.log(newCountries2)
// - Use filter to filter out country start with 'E';
const newCountries3 = countries.filter((element)=> element[0]=="E")
console.log(newCountries3)
// - Use filter to filter out only prices with values.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const onlyvalues = products.filter((el)=>( el.price!=' ' && el.price!=''))
  console.log(onlyvalues)