// 18. Get user input using prompt(“Enter your age:”). 
//If user is 18 or older , give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

var age = prompt("Enter your age: ");
var wait;
if(age >= 18){
    alert("Your old enough to drive")
}
else{
    wait = 18-age;
    alert("You need to wait for these many years "+wait )
}