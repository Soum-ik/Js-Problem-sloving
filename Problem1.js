// make javascript built in map function

const array = [2, 34, 44, 5];

function myReducer(array, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const sum = myReducer(array, (acc, current) => acc + current, 0);
console.log(sum); // Output: 85

const product = myReducer(array, (acc, current) => acc * current, 1);
console.log(product); // Output: 14960




// function mapSoumik(array, fun) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // array.unshift(fun(element));
//         console.log(array);
//         newArray.reduce
//         return
//     }
//     return array;
// }
// mapSoumik(array, (item) => item * 2);