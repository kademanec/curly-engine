//- Explain the difference between find and findIndex.
//The find() method returns the value of the first element that passes a test.
const ages = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}
console.log(ages.find(checkAge));

//The findIndex() method executes a function for each array element 
//and returns the index (position) of the first element that passes a test.
console.log(ages.findIndex(checkAge));

