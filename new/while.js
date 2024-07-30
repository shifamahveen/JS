let num = prompt("Enter a number: ")
let fact = 0

for(let i=1; i<=num; i++) {
    if (num%i === 0) {
        fact += 1
    }
}
if(fact === 2){
    console.log("Prime Number")
} else {
    console.log("Not a prime number")
}