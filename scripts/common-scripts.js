// give an ice cream cone if they've picked a flavor and paid for it

// const invStatus = false
// const isPaidFor = true
// const hasPicked = true

// if (hasPicked && isPaidFor && !invStatus) {
//     console.log("heres your ice cream")
// } else {
//     console.log("sorry your out of luck")
// }

// const myValue = 15;

// if (myValue < 0) {
//     console.log("This is True")
// }else{
//     console.log("This is False")
// }

// const age = 15
// const ternary = age >= 16 ? "you can drive" : age < 14 && age < 16 ? "you can have a permit" : "sorry try in a couple of years"
// console.log(ternary)


// conditionals 1.
// let lightStatus = 'yellow'

// switch(lightStatus) {
//     case 'green':
//         console.log("Go")
//         break
//     case 'yellow':
//         console.log("Proceed with caution.")
//         break
//     default:
//         console.log("Stop")
// }

// // conditionals 2.
// const username = 'admin'
// const password = 'Pass12'

// if (username === 'admin' && password === 'Pass123') {
//     console.log('Login Successful. Welcome, Admin')
// }else{
//     console.log('Login Failed. Incorrect credentials')
// }


// conditionals 3. 
const userRole = 'admin'

switch(userRole) {
    case 'admin':
        console.log("Full access granted. Welcome, Admin!");
        break;
    case 'user':
        console.log("Limited access granted. Welcome, User!");
        break;
    default:
        console.log("Access denied. Unknown user role.");
}


