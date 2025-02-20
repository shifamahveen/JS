// let promise = new Promise((resolve, reject) => {
//     console.log("hello");
//     // resolve(200);
//     reject("promise rejected");
// });

let promise = new Promise((resolve, reject) => {
        console.log("Promise executed");
        reject("error")
});

promise.then(() => {
    console.log("promise fulfilled");
});
promise.catch(() => {
    console.log("promise rejected");
})