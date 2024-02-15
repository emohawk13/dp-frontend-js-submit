// Write a program that counts to 10 by 2's
console.log('Counting by 2\'s & 10\'s');
console.log('');
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Write a program that extracts values form an array at specific indices and returns the values in a new array.
// Here is an example of potential output: removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]
function removeByIndex(arr, indices) {
    return indices.map(index => arr[index]);
}
console.log(removeByIndex(['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [3, 2]));


// Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and NOT a string data type.
// Here is an example of potential output: numToArray(12345) => [1, 2, 3, 4, 5]
function numToArray(num) {
    return num.toString().split('').map(Number);
}
console.log(numToArray(123456789));


// Write a program to create a new matrix of arrays from two arrays of numbers and strings.
// Here is an example of potential output:
// arrayOne = [1, 2, 3]
// arrayTwo =  ["a", "b", "c", "d"]

function createMatrix(arr1, arr2) {
    const matrix = [];
    for (let i = 0; i < arr1.length; i++) {
        matrix.push([arr1[i], arr2[i]]);
    }
    return matrix;
}

const arrayOne = [1, 2, 3, 4];
const arrayTwo = ['a', 'b', 'c', 'd'];
console.log(createMatrix(arrayOne, arrayTwo));