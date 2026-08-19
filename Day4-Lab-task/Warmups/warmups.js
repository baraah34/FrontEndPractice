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

// ------------------------------------------------------------
// 2.4 Functions - Different Ways
// ------------------------------------------------------------
// 1. Function Declaration

function isEvenDeclaration(number) {
    return number % 2 === 0;
}

// 2. Function Expression

const isEvenExpression = function (number) {
    return number % 2 === 0;
};
// 3. Arrow Function

const isEvenArrow = (number) => {
    return number % 2 === 0;
};


// Test all three

console.log(isEvenDeclaration(4)); // true

console.log(isEvenExpression(4));  // true

console.log(isEvenArrow(4));       // true


// ------------------------------------------------------------
// Default Parameter
// ------------------------------------------------------------

function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet());

console.log(greet("Baraah"));

// ------------------------------------------------------------
// Rest Parameter
// ------------------------------------------------------------

function sum(...numbers) {

    let total = 0;

    for (const number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(sum(1, 2, 3, 4));



// ------------------------------------------------------------
// 2.5 this Keyword
// ------------------------------------------------------------

const person = {

    name: "Baraah",

    // Regular function
    regularMethod: function () {
        return this.name;
    },

    // Arrow function
    arrowMethod: () => {
        return this.name;
    }

};


console.log(person.regularMethod());

console.log(person.arrowMethod());
