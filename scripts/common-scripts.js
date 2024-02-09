// First Challenge
const person = {
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
    "active": 1
};
console.log(`Person ${person.id} has been through grade ${person.gradesCompleted[2]}`);
console.log("Original Object:", person);
delete person["active"];
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
function NewObject(arr) {
    this.array = arr;
    this.index = 0;
}

NewObject.prototype.method = function () {
    if (this.index % 2 === 0) {
        if (this.array.length > 0) {
            this.index++;
            return this.array.shift();
        } else {
            return undefined;
        }
    } else {
        if (this.array.length > 0) {
            this.index++;
            return this.array.pop();
        } else {
            return undefined;
        }
    }
};

const instance = new NewObject([1, 2, 3, 4, 5]);
console.log("arrayOne =", instance.array);
console.log("instance.method() =>", instance.method());
console.log("instance.method() =>", instance.method());
console.log("instance.method() =>", instance.method());
console.log("instance.method() =>", instance.method());
console.log("instance.method() =>", instance.method());
console.log("instance.method() =>", instance.method());