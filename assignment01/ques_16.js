// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = prompt("Enter the radius of a circle");

let area = Math.PI * r * r;

console.log("The area of a circle is " + area)

let circum = 2* Math.PI * r;

console.log("The circumference of a circle is "+circum)