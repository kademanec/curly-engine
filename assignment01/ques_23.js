// 23. Write a program which tells the number of days in a month, now consider leap year.

let days31 = ["January","December","August","July","May","March","October"]
let days30 = ["April","June","November","September"]
let days29 = ["February"]


let month = prompt("Enter the month: ");
month = month.charAt(0).toUpperCase()+ month.slice(1)
console.log(month);
if(days31.includes(month)){
    alert("This month contains 31 days")
}
else if(days30.includes(month)){
    alert("This month contains 30 days")
}
else if (days29.includes(month)){
    alert("This month contains 29 days and it's a leap year")
}
else{
    alert("Enter the correct month")
}