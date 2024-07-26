let n = prompt("Enter a number:  ")
let fact = 1;

for(let i=n; i>=1; i--){
    fact *= i;
}

console.log(`The factorial of ${n} is: ${fact}`)