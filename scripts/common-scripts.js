// Check if Input is a String
function isString(input) {
  return typeof input === "string";
}

// Check if a String is Blank
function isBlankString(str) {
  return str.trim().length === 0;
}

// Capitalize the First Character of a String
function capitalizeFirst(str) {
  if (str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Abbreviate a Full Name
function abbr(fullName) {
  let [firstName, lastName] = fullName.split(" ");
  return `${firstName} ${lastName.charAt(0)}.`;
}

// Truncate a Sentence After a Given Amount of Characters
function truncate(sentence, num) {
  if (sentence.length <= num) return sentence;
  return sentence.slice(0, num) + "...";
}

// Use Slice to Return from the "g" All the Way to the End of the Sentence
const str = "The practitioners grappled on the road side!";
const slicedStr = str.slice(str.indexOf("grappled"));

console.log(isString("abc"));
console.log(isString(190));
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));
console.log(capitalizeFirst("abcdef"));
console.log(abbr("Ryan Curtis"));
console.log(truncate("I am a long sentence", 5));
console.log(slicedStr);
