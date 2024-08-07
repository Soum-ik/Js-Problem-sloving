
// Problem: Inventory Management
// You are tasked with creating a simple inventory management system for a small store. The system should be able to add, remove, and update items in the inventory. Each item in the inventory has the following properties:


// addItem(inventory, item): Adds a new item to the inventory. If an item with the same id already exists, it should not add the item and should return false. Otherwise, it should add the item and return true.

// removeItem(inventory, itemId): Removes an item from the inventory by its id. If the item does not exist, it should return false. Otherwise, it should remove the item and return true.

// updateItem(inventory, itemId, updates): Updates the properties of an existing item. The updates object may contain any subset of the item's properties (name, quantity, price). If the item does not exist, it should return false. Otherwise, it should update the item and return true.

// getItem(inventory, itemId): Retrieves an item from the inventory by its id. If the item does not exist, it should return null. Otherwise, it should return the item.


// addItem funtion ------

function getItem(inventory, newItem) {
    const isAvaiable = inventory.some((item) => item.id === newItem.id);
    if (isAvaiable) {
        return false;
    }
    return true;
}


const inventory = [];
const newItem = {
    id: 1,
    name: 'Laptop',
    quantity: 10,
    price: 999.99
};

console.log(getItem(inventory, newItem));
console.log(getItem(inventory, newItem));
console.log(getItem(inventory, newItem));
console.log(getItem(inventory, newItem));
