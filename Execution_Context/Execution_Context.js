// ------------------------ Execution_Context -----------------------------//

// exm: 1
// loading phase
var sum = 0;

function doSum(a) {
    return function (b) {
        return a + b;
    };
}

var temp = doSum(2);
sum = sum + temp(2);
console.log(sum);