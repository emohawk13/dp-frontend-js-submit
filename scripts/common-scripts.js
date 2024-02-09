// First Challenge
const person = {
    //why?
    "delete me": 1,
    id: 1138,
    name: "John Doe",
    age: 25,
    dob: "1999-05-15",
    gradesCompleted: [10, 11, 12],
    nestedObject: {
        address: {
        city: "New York",
            country: "USA"
        }
    },
    // "delete me": 1,
};
console.log(`Person ${person.id} has been through grade ${person.gradesCompleted.pop()}`);
console.log("Original Object:", person);
delete person["delete me"];
console.log("Object after deletion:", person);





// Second Challenge
const user = {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    semesters: {
        semesterOne: "incomplete",
        semesterTwo: "incomplete",
        semesterThree: "incomplete",
        semesterFour: "incomplete"
    }
};

user.semesters.semesterOne = "complete";
user.semesters.semesterThree = "complete";
delete user.semesters.semesterFour;
user.favoriteLanguage = "JavaScript";
console.log("User object:", user);






// Third Challenge
const arrayOne = [1,2,3,4,5]
console.log(`Contents of ${arrayOne}`)
console.log(arrayOne.shift())
console.log(arrayOne.pop())
console.log(arrayOne.shift())
console.log(arrayOne.pop())
console.log(arrayOne.shift())
console.log(arrayOne.pop())