function sum(a, b) {
    console.log(a + b);
}

function calcSum(a, b, func) {
    func(a, b);         // executes sum(10, 35) 
}

calcSum(10, 35, sum);


function greet() {
    console.log("Good Morning!");
}

function welcome(callback) {
    callback();         // greet()
}

welcome(greet);         // greet is callback here