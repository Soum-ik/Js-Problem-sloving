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
