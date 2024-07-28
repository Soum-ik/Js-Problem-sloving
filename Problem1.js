// make javascript built in map function

const array = [2, 34, 44, 5];
// console.log(array.map(item => item * 2));
// const totalValue = array.reduce((previousValue, currentValue, currentIndex, array) => {
//     const index = array[currentIndex];
//     return index;
// });

function reduce(array) {
    for (let i = 0; i < array.length; i++) {
        const itarate2 = array[i];
        let  itarate1 = []
        for (let j = 1; i < i-1; j++) {
            itarate1 =   array[j];
        }
        console.log(itarate1);
    }
}

reduce(array)


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