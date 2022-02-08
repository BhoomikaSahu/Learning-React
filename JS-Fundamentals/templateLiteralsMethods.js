let fname = "Bhoomika";
let lname = "Sahu";

console.log(`my full name is ${fname} ${lname}.`);

let fullname = `${fname} ${lname} `; 

console.log(`${fname}`.startsWith('B'));   // validate first character
console.log(`${fname}`.endsWith('a'));     // validate last character
console.log(`${fname}`.includes('hoo'));   // validate a set of characters which includes in given string
console.log(fullname.repeat(10));          // repeat string