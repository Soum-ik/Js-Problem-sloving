function add(...x) {
    return x.reduce((current, upco) => current + upco);
}

console.log(add(23, 23, 23, 23, 2, 324, 2, 42, 4, 24, 242, 4, 24));

function Memorization(fun) {
    let cache = {};
    return function () {

    };
}


const finalFun = Memorization(add);