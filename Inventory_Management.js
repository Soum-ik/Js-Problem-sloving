//intermediate-level JavaScript problem  

// Problem: Inventory Management
// You are tasked with creating a simple inventory management system for a small store. The system should be able to add, remove, and update items in the inventory. Each item in the inventory has the following properties:

// id: a unique identifier for the item
// name: the name of the item
// quantity: the number of items available in the inventory
// price: the price of the item
// Your goal is to implement the following functions:

// addItem(inventory, item): Adds a new item to the inventory. If an item with the same id already exists, it should not add the item and should return false. Otherwise, it should add the item and return true.

// removeItem(inventory, itemId): Removes an item from the inventory by its id. If the item does not exist, it should return false. Otherwise, it should remove the item and return true.

// updateItem(inventory, itemId, updates): Updates the properties of an existing item. The updates object may contain any subset of the item's properties (name, quantity, price). If the item does not exist, it should return false. Otherwise, it should update the item and return true.

// getItem(inventory, itemId): Retrieves an item from the inventory by its id. If the item does not exist, it should return null. Otherwise, it should return the item.

function addItem(inventory, item) {
    if (inventory.some(i => i.id === item.id)) {
        return false;
    }
    inventory.push(item);
    return true;
}

function removeItem(inventory, itemId) {
    const index = inventory.findIndex(i => i.id === itemId);
    if (index === -1) {
        return false;
    }
    inventory.splice(index, 1);
    return true;
}

function updateItem(inventory, itemId, updates) {
    const item = inventory.find(i => i.id === itemId);
    if (!item) {
        return false;
    }
    Object.assign(item, updates);
    return true;
}

function getItem(inventory, itemId) {
    return inventory.find(i => i.id === itemId) || null;
}

// Example usage
const inventory = [];

const newItem = {
    id: 1,
    name: 'Laptop',
    quantity: 10,
    price: 999.99
};

console.log(addItem(inventory, newItem)); // true
console.log(addItem(inventory, newItem)); // false

console.log(removeItem(inventory, 1)); // true
console.log(removeItem(inventory, 2)); // false

console.log(addItem(inventory, newItem)); // true
console.log(updateItem(inventory, 1, { quantity: 15, price: 949.99 })); // true
console.log(updateItem(inventory, 2, { quantity: 5 })); // false

console.log(getItem(inventory, 1)); // { id: 1, name: 'Laptop', quantity: 15, price: 949.99 }
console.log(getItem(inventory, 2)); // null
