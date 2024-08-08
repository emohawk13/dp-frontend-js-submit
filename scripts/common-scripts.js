function isString(input) {
  return typeof input === "string";
}

function isBlankString(str) {
  return str.trim().length === 0;
}

function capitalizeFirst(str) {
  if (str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function abbr(fullName) {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName} ${lastName.charAt(0)}.`;
}

function truncate(sentence, num) {
  if (sentence.length <= num) return sentence;
  return sentence.slice(0, num) + "...";
}

const sentence = "The practitioners grappled on the road side!";
const slicedStr = sentence.slice(sentence.indexOf("grappled"));

console.log(isString("abc"));
console.log(isString(190));
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));
console.log(capitalizeFirst("abcdef"));
console.log(abbr("Ryan Curtis"));
console.log(truncate("I am a long sentence", 5));
console.log(slicedStr);
