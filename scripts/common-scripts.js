class ArrayManager {
    constructor(array) {
        this.array = array;
    }

    pop() {
        if (this.array.length === 0) {
            return '';
        }
        const item = this.array.length % 2 === 0 ? this.array.shift() : this.array.pop();
        return item;
    }
}

const arrayManager = new ArrayManager([1, 2, 3, 4, 5]);
console.log(arrayManager.pop());
console.log(arrayManager.pop());
console.log(arrayManager.pop());
console.log(arrayManager.pop());
console.log(arrayManager.pop());
console.log(arrayManager.pop());