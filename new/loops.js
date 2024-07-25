// 2*1 = 2
// num = prompt("Enter num:")
// for(let i=1; i<=10; i++) {
//     var result = `${num} * ${i} = ${num*i}`
//     console.log(result)
// }

// 5 4 3 2 1
// for (let i=5; i>=1; i--){
//     console.log(i)
// }

// 2 4 6 8 10
// for(let i=2; i<=10; i+=2) {
//     console.log(i);
// }
// for(let i=2; i<=10; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// sum of n natural numbers
// let sum = 0;
// for (let i=1; i<=5; i++) {
//     sum += i
// }
// console.log(sum)

let n = parseInt(prompt("Enter n: "))
let sum = n*(n+1)/2
console.log(sum)