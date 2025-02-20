function outer() {
    let count = 0;

    return function inner() {
        // lexical scope
        console.log(count+1);
    }
}

let result = outer();
console.log(result());      // 1
// adding () in order to call the returned function



function outerFunction(name) {
    return function innerFunction(greet) {
        console.log(`Hello ${name}, ${greet}`);
    }
}

let output = outerFunction("John");
console.log(output("Nice to meet you!"));