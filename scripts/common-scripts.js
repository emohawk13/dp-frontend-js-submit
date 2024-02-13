// Exercises
// Declare an arrow function called greetUser that takes no parameters and implicitly returns the string "Welcome to the course!". Call the function and log the result to the console.

const greetUser = () => "Welcome to the course!";
console.log(greetUser());


// Create an arrow function named doubleNumber that takes a single parameter num and returns the result of doubling that number. Call the function with the argument 7 and log the result.

const doubleNumber = (num) => num * 2;
console.log(doubleNumber(7));


// Declare an arrow function called cubeRoot that takes a single parameter x. Use the return keyword explicitly to return the cube root of the parameter.

const cubeRoot = (x) => {return Math.cbrt(x);};
console.log(cubeRoot(27));


// Create an arrow function named generateRandomNumber that takes no parameters and returns a random integer between 1 and 10 (inclusive). Call the function and log the result to the console.

const generateRandomNumber = () => {return Math.floor(Math.random() * 10) + 1;};
console.log(generateRandomNumber());



// Declare an arrow function called calculateArea that takes two parameters length and width. Calculate and return the area (length * width) using the implicit return feature of arrow functions.

let width = 6;
let length = 5;
const calculateArea = (length, width) => length * width;
console.log(calculateArea(length, width)); 
