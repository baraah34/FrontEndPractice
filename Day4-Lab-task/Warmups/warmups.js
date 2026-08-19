// ------------------------------------------------------------
// 2.1 Variables & Dynamic Typing
// ------------------------------------------------------------

const myName = "Baraah";

let value = 0;

console.log("Name:", myName);

console.log(typeof value); // number

value = 10;
console.log(typeof value); // number

value = "Hello";
console.log(typeof value); // string

// ------------------------------------------------------------
// 2.2 Operators & Comparisons
// ------------------------------------------------------------


console.log("10" == 10);   // this is true
console.log("10" === 10);  // this is false


const userName = "";

if (userName) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}

