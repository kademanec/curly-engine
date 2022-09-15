
// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let d = new Date();
let month,minutes,hours,date;
if(d.getMonth()<10){
    
    month = "0"+ (d.getMonth()+1);
}
else{
    month = d.getMonth()
}
if(d.getMinutes()<10){
    minutes = "0"+ (d.getMinutes())
}
else{
    minutes = (d.getMinutes())
}
if(d.getHours()<10){
    hours = "0"+ (d.getHours())
}
else{
    hours = d.getHours()
}
if(d.getDate()<10){
    date = "0"+ (d.getDate())
}
else{
    date = d.getDate()
}
let d1 =[d.getFullYear(),
    month,
    date,
    ].join('-')+
    ' ' +
    [ hours,
    minutes,
    ].join(':')
let d2 = [
    date,
    month,
    d.getFullYear(),
    ].join('-')+
    ' ' +
    [ hours,
    minutes,
    ].join(':')
let d3 = [
    date,
    month,
    d.getFullYear(),
    ].join('/')+
    ' ' +
    [ hours,
    minutes,
    ].join(':')
console.log("In the format of YYYY-MM-DD HH:mm "+d1)
console.log("In the format of DD-MM-YYYY HH:mm "+d2)
console.log("In the format of DD/MM/YYYY HH:mm "+d3)