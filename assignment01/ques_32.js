// 32. Array Questions
// - Extract all the countries contain the word 'land' from the countries array and print it as array
// - Find the country containing the hightest number of characters in the countries array
// - Extract all the countries containing only four characters from the countries array and print it as array
// - Extract all the countries containing two or more words from the countries array and print it as array
// - Reverse the countries array and capitalize each country and stored it as an array


import countryList from "./countries.js";
let land = []
countryList.forEach((el)=>{
    if(el.includes("land")){
        land.push(el);
    }
})

console.log(land," These are the countries which contains land in it")

function Longest_Country_Name(countryList)
  {
  return countryList.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(countryList)); 

let count = [];
countryList.filter((el)=> {
    if(el.length<=4){
    count.push(el)
}})
console.log(" The countries of 4 letter are "+ count)

for(let i =0;i<countryList.length;i++){
    if(countryList[i].split(" ").length>=2){
        console.log("The countries which contains more than 2 words are "+countryList[i])
    }
}

let reverseArr= countryList.reverse();
reverseArr.forEach((i)=>console.log(i.toUpperCase()))