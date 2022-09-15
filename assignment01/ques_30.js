//30. Write a script which generates a random hexadecimal number.


function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) { // len is the length of the string
        output += hex.charAt(Math.floor(Math.random() * hex.length));  // Math.floor will get us the lower number of random number multilplied with hex.length
    }
    return output;
}

console.log(genHexString(4)) // 4, 8, 16 specifies us the number of digits
console.log(genHexString(8)) 
console.log(genHexString(16))