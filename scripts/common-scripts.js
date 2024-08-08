const obj1 = { id: 1, name: "ryan" };
const obj2 = { address: "123 fake st", phone: "555-555-5555" };

let mergedObj = { ...obj1, ...obj2 };

function largestNum(a, b) {
  return a > b ? a : b;
}

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function alphabeticalOrder(str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}
function preserveCaseAlphabeticalOrder(str) {
  let sortedLowerCase = alphabeticalOrder(str.toLowerCase());
  let mapping = str.split("").reduce((acc, char) => {
    acc[char.toLowerCase()] = acc[char.toLowerCase()] || char;
    return acc;
  }, {});

  return sortedLowerCase
    .split("")
    .map((char) => mapping[char])
    .join("");
}

console.log(mergedObj);
console.log(largestNum(9, 12));
console.log(titleCase("I am a sentence"));
console.log(alphabeticalOrder("Hi there"));
console.log(preserveCaseAlphabeticalOrder("Hi there"));
