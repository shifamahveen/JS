let n = parseInt(prompt("Enter a number:"));
// 2,3,5,7,11,13,17
let isPrime = true;

if (n <= 1) {
    isPrime = false;
} else {
    for(let i=2; i<n; i++) {
        if(n%i === 0) {
            isPrime = false;
            break;
        }
    }
}

if(isPrime) {
    console.log(`${n} is a prime number`);
} 
else {
    console.log(`${n} is not a prime number`);
} 

