// Exercises
// Given the array fruitsArray, use the .forEach() method to iterate over each fruit and log its name and index to the console.
// const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

const fruitsArray = ["apple", "banana", "orange", "grape", "kiwi"];

fruitsArray.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// Create an array originalNumbers containing five numbers. Use the .map() method to create a new array doubledNumbers where each number is doubled.
// const originalNumbers = [3, 8, 12, 5, 7];
// // Output: [6, 16, 24, 10, 14]

const originalNumbers = [3, 8, 12, 5, 7];
const doubledNumbers = originalNumbers.map(number => number * 2);
console.log(doubledNumbers);


// Given the array mixedData, organize the data into separate arrays based on data type using conditionals, the typeof keyword, and the .forEach() method.
// const mixedData = [42, "hello", ["world", 2023], () => "function", true, null, { key: "value" }];
// /*
// Output: 
// {
//   numbers: [42],
//   strings: ['hello'],
//   arrays: [['world', 2023]],
//   functions: [() => 'function'],
//   booleans: [true],
//   objects: [{ key: 'value' }],
//   nulls: [null]
// }
// */

const mixedData = [42, "hello", ["world", 2023], () => "function", true, null, { key: "value" }];

const organizedData = {
  numbers: [],
  strings: [],
  arrays: [],
  functions: [],
  booleans: [],
  objects: [],
  nulls: []
};

mixedData.forEach(item => {
  if (typeof item === "number") {
    organizedData.numbers.push(item);
  } else if (typeof item === "string") {
    organizedData.strings.push(item);
  } else if (Array.isArray(item)) {
    organizedData.arrays.push(item);
  } else if (typeof item === "function") {
    organizedData.functions.push(item);
  } else if (typeof item === "boolean") {
    organizedData.booleans.push(item);
  } else if (typeof item === "object" && item !== null) {
    organizedData.objects.push(item);
  } else if (item === null) {
    organizedData.nulls.push(item);
  }
});

console.log(organizedData);



// Create an array wordsArray containing three strings. Use the .map() method to create a new array uppercaseWords where each string is converted to uppercase.
// const wordsArray = ["apple", "banana", "grape"];
// // Output: ['APPLE', 'BANANA', 'GRAPE']

const wordsArray = ["apple", "banana", "grape"];
const uppercaseWords = wordsArray.map(word => word.toUpperCase());
console.log(uppercaseWords);


// Given the array matrix, use the .forEach() method to iterate over each sub-array and log the sum of its elements to the console.
// const matrix = [
//   [2, 4, 6],
//   [1, 3, 5],
//   [8, 10, 12]
// ];
// // Output:
// // 12
// // 9
// // 30

const matrix = [
    [2, 4, 6],
    [1, 3, 5],
    [8, 10, 12]
  ];
  
  matrix.forEach(row => {
    const sum = row.reduce((acc, val) => acc + val, 0);
    console.log(sum);
  });
  