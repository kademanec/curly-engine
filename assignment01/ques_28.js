// 28. Use for loop to iterate from 0 to 100 and print only prime numbers



let minNum = 0;
const maxNum = 100;

for (let i = minNum; i <= maxNum; i++) { // taking the min value and max value
    let count = 0;    // assigning count as 0

    
    for (let j = 2; j < i; j++) { //taking the min value as 2 and comparing that with i
        if (i % j == 0) {   // if i get divides by j completley then its not a prime number
            count = 1;      // so making a count to 1 and breaking the loop
            break;          
        }
    }
    if( i>1 && count == 0){   // we have to take the minvalue from 2 itself so i>1 because 0 and 1 are not prime number
        console.log(i);    // the count which equates to 0 are prime number
    }
}
