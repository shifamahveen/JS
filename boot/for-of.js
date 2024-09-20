let fruits = ['apple', 'banana', 'cherry'];
let str = "JAVASCRIPT";

for(let i of fruits) {
    console.log(i); // apple., banana, cherry
}

for(let i of str) {
    console.log(i); // J, A, V, A, ......, T
}