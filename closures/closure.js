// -----------------------problem 1-----------------------

// function createCounter() {
//     let number = 0; // Initialize the counter

//     function increment() {
//         return ++number; // Pre-increment to return the incremented value
//     }

//     function decrement() {
//         return --number; // Pre-decrement to return the decremented value
//     }

//     return {
//         increment,
//         decrement
//     };
// }

// const counter = createCounter();
// console.dir(counter.decrement());
// console.dir(counter.increment());
// console.dir(counter.increment());
// console.dir(counter.increment());
// console.dir(counter.increment());


// -----------------------problem 2-----------------------

// function createSum(x) {
//     function closer(y) {
//         return x + y;
//     }
//     x = 20;
//     return closer;
// }
// const sum = createSum(10);
// console.dir(sum);

// -----------------------problem 3-----------------------

// function Person(name) {
//     function getName() {
//         return name;
//     }
//     function setName(newName) {
//         name = newName;
//     }
//     return {
//         getName, setName
//     };
// }

// let person = Person('Soumik Sarkar');
// console.log(person.getName());
// person.setName("Ratul sarkar");
// console.log(person.getName())

// -----------------------problem 4-----------------------

// function delayedExecution(fn, delay) {
//     return function (...args) {
//         setTimeout(() => fn(...args), delay);
//     };
// }
// const sayHello = (name) => console.log('Hello!' + name);
// const delayedSayHello = delayedExecution(sayHello, 2000);
// delayedSayHello("Soumik Sarkar"); // Logs 'Hello!' after 2 seconds

// -----------------------problem 5-----------------------
// function findIndex(array, target) {
//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         if (array[i] === target) {
//             console.log(`${i} this index has ${array[i]} this element`);
//             return;
//         }
//     }
//     console.log('Not found');
// }

// findIndex([12, 3, 4, 5, 55], 55);

// -----------------------problem 6-----------------------
