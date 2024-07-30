let num = prompt("Enter a number: ")
let prime = true

for(let i=2; i<num; i++) {
    if(num%i === 0) {
        prime = false   
        break   // break loop once a factor is found
    }
}
if(prime) {
    console.log("Prime Number")
} else {
    console.log("Not a prime number")
}