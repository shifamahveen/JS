function greet() {
    console.log("Hello World!");
}
greet()


function add(x, y) {    // parameters
    console.log(x + y);
}
add(4, 8)   // arguments
add(16, 5)   // arguments


// let name = prompt("Enter your name: ")
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }
// greeting(name)

function mul(x, y=10) {     // default parameters
    return x*y
}
mul(5, 2)   // 5*2 => 10
mul(5)      // 5*10 => 50 (default value of y is 10)