// what is higher order function?
// => 

// what  is functional progra languague
// => Functional languague can take nultipule funtion as peranter || another one is function can return another function
// => 

// function hello() {
//     return () => {
//         console.log('Hello World');
//     };
// }

// hello()();

// Eax : 1 without higer order function
// var nu = [1, 2, 3];
// var result = []
// for (let i = 0; i < nu.length; i++) {
//    result.push(nu[i]*2)
// }
// console.log(result);


// Eax : 1 with higer order function
// var nu = [1, 2, 3];
// var result = nu.map(i => i * 2);
// console.log(result);


// Eax : 2 without higer order function


// var players = [{ nae: "souik", avg: 39.2 }, { nae: "anik", avg: 39.9 }, { nae: "anit", avg: 29.2 },];


// var filerPlayer = [];
// for (let i = 0; i < players.length; i++) {
//     const player = players[i];
//     if (player.avg > 37) {
//         filerPlayer.push(player);
//     }
// }

// console.log(filerPlayer);


// Eax : 2 with higer order function
// var players = [{ nae: "souik", avg: 39.2 }, { nae: "anik", avg: 39.9 }, { nae: "anit", avg: 29.2 },];

// var filerPlayer = players.filter((player) => player.avg > 37);
// console.log(filerPlayer);



// built in array ap function ake higer order function

// var nu = [1, 2, 3];

// function mapSou(array, fn) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArray.push(fn(element));
//     }
//     return newArray;
// }

// const perArray = mapSou(nu, function (nu) {
//     return nu * 2
// });

// console.log(perArray);



// let persons = ["anik", "joned", "priya"];

// by build nap fun
// function builtFun(array, fun) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         newArray.push(fun(element));
//     }
//     return newArray;
// }

// const checkChar = builtFun(persons, (person) => person.length);
// console.log(checkChar);


// // by built filter fun
// function builtFilter(array, fun) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const each = array[i];
//         const checking = fun(each);
//         console.log(each);
//         if (checking) {
//             newArray.push(each);
//         }
//     }
//     return newArray;
// }


// var players = [
//     { nae: "souik", avg: 39.2 },
//     { nae: "anik", avg: 39.9 },
//     { nae: "anit", avg: 29.2 }
// ];

// const newPersons = builtFilter(players, function (player) {
//     return player.avg > 37;
// });

// console.log(newPersons);


// builtin sort function

// function sort(array) {

// }

// const array = [2, 4, 1, 2];
// // console.log(sort(array));

// function builtInSort(array) {
//     const newArray = [];
//     array.map((value, idx) => (
//         console.log(value -= value)
//     )
// );

// }
// builtInSort(array);

// // console.log(array.sort((a, b) => a-b));


