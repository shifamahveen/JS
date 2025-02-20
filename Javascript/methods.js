// map
let arr = [1, 2, 3, 4, 5];
let double = arr.map(i => i*2);
let square = arr.map(num => {
    return num*num
});

console.log(arr);       // 1 2 3 4 5
console.log(double);        // 2 4 6 8 10
console.log(square);        // 1 4 9 16 25


let even = arr.filter(i => i%2 === 0)
console.log(even);      // 2 4

let array = [true, false, 0, "JS"]
let truthy = array.filter(i => i)
console.log(truthy);


// 