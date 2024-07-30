let n = prompt("Enter n: ");
let square = "";

for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
        square += "*";
    }
    square += '\n';
}

console.log(square);