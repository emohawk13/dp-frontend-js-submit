// 1. 
const objectOne = {id: 1, name: 'Ryan'};
const objectTwo = {address: "123 Fake St", phone:"555-555-5555"};
const objectFinal = {...objectOne, ...objectTwo}

console.log(objectFinal)

// 2. 
const numberOne = 9;
const numberTwo = 12;

console.log(numberOne > numberTwo ? numberOne : numberTwo);

// 3. 
let sent = 'I am a sentence'
let titleCaseSent = sent.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(titleCaseSent); 

// 4. 
let str = 'WOOO here is some other text for testing and other things';
let sortedStr = str.split('').sort((a, b) => a.localeCompare(b)).join('');
let capitalizedSortedStr = sortedStr.toUpperCase();

console.log(capitalizedSortedStr);
