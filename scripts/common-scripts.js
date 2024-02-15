// Challenge 1
const person = {
    id: 1138,
    name: "John Doe",
    age: 25,
    dob: "1999-05-15",
    gradesCompleted: [10, 11, 12],
    nestedObject: {
        nestedKey: {
            nestedKey: "nestedValue"
        }
    },
    "delete me": "This should be deleted"
};

console.log(person);
console.log(`Person ${person.id} has been through grade ${person.gradesCompleted[2]}`);
delete person["delete me"];
console.log(person);



// Challenge 2
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
user.semesters.semesterTwo = "complete";
delete user.semesters.semesterFour;
user.favoriteLanguage = "JavaScript";
console.log(user);



// Challenge 3
class ArrayManipulator {
    constructor(array) {
        this.array = array;
        this.currentIndex = 0;
    }

    method() {
        if (this.currentIndex >= this.array.length) {
            return undefined;
        }
        const value = this.array[this.currentIndex];
        this.currentIndex++;
        if (this.currentIndex % 2 === 0) {
            return value;
        } else {
            return this.array[this.array.length - this.currentIndex];
        }
    }
}

const instance = new ArrayManipulator([1, 2, 3, 4, 5]);
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());