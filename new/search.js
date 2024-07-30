let arr = [-1, 9, 26, 43];
let target = parseInt(prompt("Enter number to search: "));
let isFound = false;

let i = 0;
while(i<arr.length) {
    if (arr[i] === target) {
        isFound = true;
        break;
    }
    i++;
}
if(isFound) {
    console.log(`Target ${target} is found at ${i}`)
} else {
    console.log("Element not found")
}