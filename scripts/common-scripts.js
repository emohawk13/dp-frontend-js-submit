// 1.
const string = 'This is a string'
const testNum = 190

console.log("Test if a String is a String.")
console.log(typeof string === 'string');
console.log(typeof testNum === 'string');
// 2.
const testString = ''
const testString2 = ' '
const testString3 = 'fjfjfj'

function remoteEmptySpace(str) {
    return str.trim() === '';
}
console.log("Test if a String is blank.")
console.log(remoteEmptySpace(testString));
console.log(remoteEmptySpace(testString2));
console.log(remoteEmptySpace(testString3));
// 3.
const capFirst = 'dauhson';
const capitalized = capFirst.charAt(0).toUpperCase() + capFirst.slice(1).toLowerCase();
console.log("Capitalize the first letter of a string.")
console.log(capitalized); 
// 4.
const fullName = 'Dauhson Capps'
const nameSplit = fullName.split(" ");
const firstName = nameSplit[0];
const lastNameInitial = nameSplit[nameSplit.length - 1][0] + ".";
const abbreviatedName = `${firstName} ${lastNameInitial}`;

console.log('Program that abbreviates a full name.')
console.log(abbreviatedName)
// 5.
const sentence = "I am a testing sentence";
const maxLength = 5;
const truncatedSentence = sentence.length > maxLength ? sentence.slice(0, maxLength) + "..." : sentence;

console.log(truncatedSentence)
// 6. 
const str = "The practitioners grappled on the road side!";
const result = str.slice(str.indexOf("g"));
console.log(result);


