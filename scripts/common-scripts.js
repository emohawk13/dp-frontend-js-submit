// Write a program that takes an array of words and returns the longest word.
// ['a'. 'b', 'cc'] => 'cc'

let letters = ['a', 'b', 'cc'];
let maxLength = 0;
let longestString = "";

for (let i = 0; i < letters.length; i++) {
    if (letters[i].length > maxLength) {
        maxLength = letters[i].length;
        longestString = letters[i];
    }
}

console.log("Longest string: `" + longestString + "` with length " + maxLength);


// Write a program that swaps the first and last characters of a string.
// 'ryan' => 'nyar'

let name = 'ryan';

if (name.length >= 2) {
    let firstChar = name[0];
    let lastChar = name[name.length - 1];
    let newName = lastChar + name.substring(1, name.length - 1) + firstChar;
    console.log(newName);
} else {
    console.log("The string must have at least two characters.");
}


// Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6

const sumOfNumbers = (numbers) => {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

const numbers = [1, 2, 3];
console.log(sumOfNumbers(numbers));


// Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

const combineArrays = (arr1, arr2) => {
    let combined = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combined.push(arr1[i]);
        }
        if (i < arr2.length) {
            combined.push(arr2[i]);
        }
    }
    return combined;
};

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(combineArrays(arr1, arr2)); 


// Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

const sent = "I am a sentence";
const breakSent = sent.split(" ");
const wordsUpper = [];

breakSent.forEach((word, index) => {
    const letters = word.split("");
    let moddedWord = "";
    letters.forEach((letter, index) => {
        if (index === 0) {
            moddedWord += letter.toUpperCase();
        } else {
            moddedWord += letter.toLowerCase();
        }
    });
    wordsUpper.push(moddedWord);
});

const moddedSent = wordsUpper.join(" ");
console.log(moddedSent); 


// Return longest word in a string
// EX: "This string has several different values" => "different"

let stringToTest = "This string has several different values";
let words = stringToTest.split(" ");
let maxLengthSent = 0;
let longestStringWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLengthSent) {
        maxLengthSent = words[i].length;
        longestStringWord = words[i];
    }
}

console.log("Longest string: `" + longestStringWord + "` with length " + maxLengthSent);


// Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

let alphaWord = 'Hi There';
alphaWord = alphaWord.replace(/[^a-zA-Z]/g, "").toLowerCase();
alphaWord = alphaWord.split("").sort().join("");
console.log(alphaWord); 


// Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices fo the array (index 1 and index 3)
// [b, d] is the new array returned from the specified indices.

function extractValues(originalArray, indices) {
    let extractedValues = [];
    indices.forEach(index => {
        if (index >= 0 && index < originalArray.length) {
            extractedValues.push(originalArray[index]);
        }
    });
    return extractedValues;
}

const originalArray = ['a', 'b', 'c', 'd'];
const specifiedIndices = [1, 3];
const extractedValues = extractValues(originalArray, specifiedIndices);
console.log(extractedValues);


// Complete the following steps:
// Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
// the userName property should take any string value.
// the starter (or default) for the activeStatus property should be set to 'away'.

let user = {
    userName: '',
    activeStatus: 'away'
}

console.log(user)


// Write an arrow function
// that changes the activeStatus to 'active'
// returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'
// Note: Use string interpolation. Avoid hardcoding this.

let activeUser = {
    userName: 'Ryan',
    activeStatus: 'away'
};

const login = (activeUser) => {
    activeUser.activeStatus = 'active';
    return `${activeUser.userName} is ${activeUser.activeStatus}`;
};

console.log(login(activeUser));


// Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16
// Note: No outside of pre-built functions and the '**' exponent operator is not allowed.

function customPow(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else if (exponent % 2 === 0) {
        const half = customPow(base, exponent / 2);
        return half * half;
    } else {
        const half = customPow(base, (exponent - 1) / 2);
        return half * half * base;
    }
}

console.log(customPow(4, 2)); 

