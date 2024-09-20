// fibonacci series -> 0 1 1 2 3
let n = 5;
let a = 0;
let b = 1;

document.write(a + " ");
document.write(b + " ");

for(let i=2; i<n; i++) {
    let c = a+b;    
    document.write(c + " ");

    a = b;
    b = c;
}