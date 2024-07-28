function delay(time) {
    const promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time * 1000);
    });
    return promis;
}


async function timer(timer) {
    console.log("Timer Start");
    for (let i = 0; i <= timer; i++) {
        console.log(await delay(i));
    }
    console.log("Timer End");
}
timer(2);
// javascript view to see this code work flow
// loading faze:
// global extution:
// 1. fn() timer
