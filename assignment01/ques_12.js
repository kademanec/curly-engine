// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


console.log("What is the year today? "+new Date().getFullYear())
console.log("What is the month today as a number? "+new Date().getMonth())
console.log("What is the date today? "+new Date().getDate())
console.log("What is the day today as a number? "+new Date().getDay())
console.log("What is the hours now? "+new Date().getHours())
console.log("What is the minutes now? "+new Date().getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
//first calculate leap year in between the 1970 to 2022
// program to check leap year
let leap_year = [];
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        leap_year.push(year);
    } else {
        return false
    }
}
for ( let year =1970; year<=2022;year++){
        checkLeapYear(year)
}

let leapYears = leap_year.length // so there are around 13 leap years;
console.log(leapYears,"Leap years")

let years =(new Date().getFullYear() - 1) -1970;
console.log("Total number of years : "+years )
let normalYears =  years - leapYears;
let normalSeconds= (normalYears * 365 * 60 * 60 *24 ) 
//                               days minutes seconds hours
let leapSeconds = (leapYears * 365 *60 * 60 *24 )
//                               days minutes seconds hours
let noOfmonths = new Date().getMonth();
let secondsfromJanSep=(noOfmonths * 24 * 60 *60 * 30 *7)
console.log("seconds from Jan to August "+secondsfromJanSep)
console.log("Leap year seconds "+leapSeconds)
console.log("Rest of the year seconds "+normalSeconds)
console.log("Total Number of Seconds: "+secondsfromJanSep+leapSeconds+normalSeconds)
//lets calculate number of minutes in hour
// so there will be 24 hours in a day 24*60= 1440 *60 secs = 86400
// 86400* 365 * 39 = 1229904000
// 86400* 366 * 13 = 0409968000
// over all its 532958400 secs
