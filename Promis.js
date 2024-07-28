function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time * 1000);
    });
}

async function timer() {
    console.log("Start timer");

    for (let i = 0; i <= 5; i++) {
        console.log(awaitdelay(i));
    }
    console.log("End timer");
}
timer();