function hcf(a,b) {
    while (b!==0) {
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
// gcd
console.log(hcf(4, 6));