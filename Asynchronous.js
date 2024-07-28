// proble : 1
// =>  print nuber by there tie

function delay(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(i);
            resolve(console.log(i));
        }, i * 1000);
    });
}

function tie() {
    console.log("Start");
    for (let i = 0; i < 6; i++) {
        delay(i);
    }
    console.log("End");
}

tie();