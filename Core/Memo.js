function add(...x) {
    return x.reduce((current, upco) => current + upco);
}

function saver(func) {
    let cache = {};
    return function (...x) {
        const key = JSON.stringify(x);
        if (cache[key]) {
            console.log('result fro cache');
            return cache;
        } else {
            console.log('calculating result');

            const result = func(x);
            cache[key] = result;
            return result;
        }
    };
}

// console.log(add(23,23,23,23,2,324,2,42,4,24,242,4,24));
const calculate = saver(add);
console.log(calculate(23, 23, 23, 23, 2, 324, 2, 42, 4, 24, 242, 4, 24));