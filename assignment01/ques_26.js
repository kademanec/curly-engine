// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
//If it does not exist add to the countries list.

import countryList from "./countries.js";

countryList.forEach((el)=>{
    if(el == "Ethiopia"){
        console.log("ETHIOPIA")
        countryList.push("ETHIOPIA")
    }
})

countryList.forEach((el)=>{
    console.log(el)
})