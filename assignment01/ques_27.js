// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sortedAges = ages.sort(function(a,b){return a-b})// sorted the array from lower age to higher age
const middle = Math.floor(sortedAges.length/2);
const minAge=Math.min(...sortedAges)
console.log(minAge+" This is the minimum age")

const maxAge= Math.max(...sortedAges)
console.log(maxAge+" This is the maximum age")
console.log(sortedAges[middle]+" This is a median age")
let count = 0
sortedAges.forEach((el)=>{
        count = count +el
})
let avg = count/sortedAges.length;
console.log(avg+" This is the average age")

function maximum(maxAge,avg)
{
        return ((maxAge + avg + Math.abs(maxAge - avg)) / 2);
}
console.log(maximum(maxAge,avg)+" Value of maximum - avg")
// Function to return minimum
// among the two numbers
function minimum(minAge,avg)
{
        return ((minAge + avg + Math.abs(minAge - avg)) / 2);
}
console.log(minimum(minAge,avg)+" Value of minimum - avg")