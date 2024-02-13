// Declare a function named calculateArea that takes two parameters, length and width, and returns the area of a rectangle. Call the function with values 8 and 5 and log the result to the console.

function calculateArea(length, width) {
    return length * width;
}

var length = 8;
var width = 5;

var area = calculateArea(length, width);
console.log("The area of the rectangle with length " + length + " and width " + width + " is: " + area);


// Write a function called greetUser that takes a parameter name and defaults to the string "User" if no value is provided. The function should return a greeting message. Call the function with and without providing a name and log the results.

function greetUser(name = "User") {
    return "Hello, " + name + "!";
}

console.log(greetUser());
console.log(greetUser("Dude")); 


// Declare a function expression using the arrow function syntax. The function should take two parameters, base and exponent, and return the result of raising the base to the power of the exponent. Call the function with values 2 and 3 and log the result.

const doinSomeMath = (base, exponent) => {
    return Math.pow(base, exponent);
};

console.log(doinSomeMath(2, 3));


// Create an anonymous function expression that calculates the square of a given number. Assign this function expression to a variable called square. Use the square function to calculate the square of 9 and log the result.

const square = function(number) {
    return number * number;
};

console.log(square(9));

