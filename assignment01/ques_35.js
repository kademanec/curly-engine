//35. Write a functions which checks if all items are unique in the array.

let arr = ["Chinmaya","Hitesh_Sir","Anurag_Sir","JavaScript","Python","Hitesh_Sir","JavaScript"];

function cleanArr(arr){
    let array=[];
    let newArr = new Set(arr);
    for (let element of newArr){
        array.push(element);
    }
    return array;
}

console.log(cleanArr(arr))