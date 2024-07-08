// 1. Merging Objects
const obj1 = { id: 1, name: "ryan" };
const obj2 = { address: "123 fake st", phone: "555-555-5555" };
const mergedObj = { ...obj1, ...obj2 };

// 2. Finding the Largest Number using if and ternary operator
function largestNum(a, b) {
    return a > b ? a : b;
}

// 3. Title Casing a String
function titleCase(str) {
    return str
        .split(' ')
        .map(word => {
            const firstChar = word.charAt(0).toUpperCase();
            const restChars = word.slice(1).toLowerCase();
            return firstChar + restChars;
        })
        .join(' ');
}

// 4. Alphabetical Order of Characters
function alphabeticalOrder(str) {
    return str
        .split('')
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
        .join('');
}

// Logs to fire functions
console.log(mergedObj);
console.log(largestNum(5, 43));
console.log(titleCase("I am a sentence"));
console.log(alphabeticalOrder("Hi there"));
