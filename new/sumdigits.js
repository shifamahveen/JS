function sumDigits (n) {
    let sum = 0;
    while (n) {
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}

console.log(sumDigits(123));
// lcm of two numbers. 4,6 -> 12
// 4,8 -> 8