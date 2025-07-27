//-------------- Displaying Output with console.log ----------------- //
// Prints the string "hi" to the terminal
console.log("hi");

// Prints the string "bye" to the terminal
console.log("bye");
console.log("----------------------------------------------------\n");

//-------------- Understanding Basic JavaScript Data Types ----------------- //
// Examples of checking data types
const message = "hello";
console.log(typeof(message)); // Output: string

const isLoggedIn = false;
console.log(typeof(isLoggedIn)); // Output: boolean

const userAge = 25;
console.log(typeof(userAge)); // Output: number

const isFalseString = "false"; // Note the quotes
console.log(typeof(isFalseString)); // Output: string

const isOneNumber = 1; // Note no quotes
console.log(typeof(isOneNumber)); // Output: number
console.log("----------------------------------------------------\n");

//-------------- Storing Data with Variables: let vs. const ----------------- //
let myVariable = "initial value";
console.log(myVariable); // Output: initial value

myVariable = "new value"; // Reassigning the variable
console.log(myVariable); // Output: new value


const fixedValue = "this cannot change";
console.log(fixedValue); // Output: this cannot change

// Example causing an error
const myConstant = "hello";
console.log(myConstant); // Output: hello
// The next line will cause an error if uncommented and run:
// myConstant = "goodbye";
console.log("----------------------------------------------------\n");

//-------------- Adding Notes with Comments ----------------- //
// This is a single-line comment explaining the code below.
console.log("This line will run.");

// The following line is commented out, so it won't execute:
// console.log("This line will NOT run.");

// Comments can contain anything:
// asdfkljhasdflkjh23498hasdlkjf

// Use comments to clarify complex logic
const taxRate = 0.08; // 8% sales tax rate
console.log("----------------------------------------------------\n");

//-------------- Creating Reusable Code Blocks with Functions ----------------- //

// Define a function named greet
function greet() {
  console.log("Hello there!");
}
// Call the function multiple times
greet();
greet();
greet();
console.log("----------------------------------------------------\n");

// -------------- Hoisting ---------------- //
add(1, 2);
function add(num1, num2) {
  console.log(num1 + num2);
}
// Call the function multiple times
add(4, 6);
add(3, 4);
console.log("----------------------------------------------------\n");

console.log(squareRoot(16));  // Output: 4
function squareRoot(number) {
  // Check if the input is a valid number
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Invalid input: Please provide a valid number';
  }
  
  // Check if the number is negative
  if (number < 0) {
    return 'Invalid input: Cannot calculate square root of negative number';
  }
  
  // Use Math.sqrt() to calculate the square root
  return Math.sqrt(number);
}
console.log(squareRoot(2));   // Output: 1.4142135623730951
console.log(squareRoot(-1));  // Output: "Invalid input: Cannot calculate square root of negative number"
console.log(squareRoot('abc')); // Output: "Invalid input: Please provide a valid number"
console.log("----------------------------------------------------\n");

x = 50; // Assign 50 to x
console.log(x); // Output: 50
var x; // Declare x
console.log("----------------------------------------------------\n");

x = 20; // Assign 20 to y
console.log(x); // Output: 20
let y; // Declare y



