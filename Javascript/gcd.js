function gcd(a, b) {
    while(b != 0) {
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

let a = 11;
let b = 22;
let gcdValue = gcd(a, b);
let lcm = (a*b)/gcdValue;