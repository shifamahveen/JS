let n = parseInt(prompt("Enter a number:"));
// 3! => 3*2*1

let i = n;
let fact = 1;
while (i>=1) {
    fact *= i;
    i--;
}
console.log(fact);
