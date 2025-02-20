// console.log("one");
// console.log("two");
// console.log(three);
// console.log("four");
// console.log("five");
// blocks the code execution of line no. 4, 5 once line no. 3 encounters error

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log(three);
// }, 3000);
// console.log("four");
// console.log("five");
//  runs asynchronously and doesnt block the next instructions

let count = 0;
let id = setInterval(() => {
    document.write(count++, "<br>");
}, 1000);

clearInterval(id);