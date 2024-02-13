// const myArray = ["a", "b", "c", "d", "e"]

// myArray.forEach(function(char, idx) {
//   console.log(idx, char)
// })

// console.log('')

// myArray.map(function(char, idx) {
//   console.log(idx, char)
// })

// let newArray = myArray.map((num, idx) => {
//     return myArray[idx] = num * 2
//   })
  
//   console.log(myArray)
//   console.log(newArray)



const mixedArray = [["ryan", {age : 34}], () => "hey there", 55, "pineapple pizza", ["oranges"]]

let arrays = []
let strings = []
let functions = []
let numbers = []

mixedArray.forEach(item => {
  if(Array.isArray(item)) arrays.push(item)
  if(typeof item === "string") strings.push(item)
  if(typeof item === "function") functions.push(item)
  if(typeof item === "number") numbers.push(item)
})

console.log({
  arrays,
  strings,
  numbers,
  functions
})


