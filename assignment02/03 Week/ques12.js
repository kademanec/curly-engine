//- Declare a function called getStringLists which takes an array 
//as a parameter and then returns an array only with string items.
let x =[4, 5, 8, 9]

function getStringLists(x){
    let lists= x.map((val,index)=> String(val));
    return lists
}

console.log(getStringLists(x))