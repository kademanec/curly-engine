// 19. Even numbers are divisible by 2 and the remainder is zero. 
//How do you check, if a number is even or not using JavaScript?

function evenNumber(num){
    if(num==0){
        console.log("any number divisble by zero is zero");
    }
    else if(num%2==0){
        console.log("The given number is even")
    }
    else{
        console.log("The given number is odd")
    }
}
evenNumber(0);
evenNumber(10);
evenNumber(11);