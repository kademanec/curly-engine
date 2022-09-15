//- Explain the difference between some and every

// the difference between some and every are if any of the elements in an array 
// satisfy the condition which returns us true value means it's a some.

// if all of the elements in an array satisfy the condition as to return us the true value it's every.

const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}

const ages1 = [3, 10, 18, 20];

console.log(ages1.some(checkAdult));
function checkAdult(age) {
  return age > 18;
}
