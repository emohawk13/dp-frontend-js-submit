class Node {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addItem(name, price) {
    const newItem = new Node(name, price);

    if (!this.head) {
      this.head = newItem;
      console.log(`Added ${newItem.name} to the food order.`);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newItem;
    console.log(`Added ${newItem.name} to the food order.`);
  }

  displayOrder() {
    if (!this.head) {
      console.log("The food order is empty.");
      return;
    }

    let current = this.head;
    console.log("Food Order:");
    while (current) {
      console.log(`${current.name}: $${current.price}`);
      current = current.next;
    }
  }

  removeLastItem() {
    if (!this.head) {
      console.log("The food order is empty. Nothing to remove.");
      return null;
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
    } else {
      this.head = null;
    }

    console.log(`Removed ${current.name} from the food order.`);
    return current;
  }

  clearOrder() {
    if (!this.head) {
      console.log("The food order is already empty.");
      return;
    }

    this.head = null;
    console.log("Cleared the entire food order.");
  }
}

const foodOrder = new LinkedList();

foodOrder.addItem("Hamburger", 5.99);
foodOrder.addItem("Cheeseburger", 6.49);
foodOrder.addItem("French Fries", 2.99);
foodOrder.addItem("Soda", 1.99);

console.log("\nInitial Food Order:");
foodOrder.displayOrder();

console.log("\nRemoving an item from the order:");
const removedItem = foodOrder.removeLastItem();
console.log(`Removed item: ${removedItem ? removedItem.name : "None"}`);

console.log("\nFood Order after removal:");
foodOrder.displayOrder();

console.log("\nClearing the entire order:");
foodOrder.clearOrder();

console.log("\nFood Order after clearing:");
foodOrder.displayOrder();
