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

// ------------------------------------------------------------
// 2.3 Control Flow
// ------------------------------------------------------------

const grades = [85, 92, 58, 73, 40];
for (const grade of grades) {
    if (grade >= 60) {
        console.log(`${grade}: Pass`);
    } else {
        console.log(` ${grade}: Fail`);
    }
}

const score = 85;
switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
        default:
        console.log("Grade: F");
}