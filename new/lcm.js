function lcm(a,b) {
    let max = Math.max(a,b);
    let lcm = max;

    while (lcm%a !== 0 || lcm%b !== 0) {
        lcm += max;
    }
    return lcm;
}

console.log(lcm(7,5));