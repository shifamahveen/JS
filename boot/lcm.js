let a = 4
let b = 6

let max = Math.max(a, b); 
let lcm = max; //8

while(lcm%a!==0 || lcm%b!==0) {
    lcm += max;
}

document.write(lcm);