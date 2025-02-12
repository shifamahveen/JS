let a = prompt("Enter a:");
let b = prompt("Enter b:");
let c = prompt("Enter c:");

if (a>b && a>c) {
    console.log(a+" is the largest");
} else if (b>a && b>c) {
    console.log(b+" is the largest");
} else if (c>a && c>b) {
    console.log(c+" is the largest");
} else {
    console.log("one of the numbers are equal");
}