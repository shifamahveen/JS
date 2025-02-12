// opr, a, b
let a = parseInt(prompt("Enter a value:"))
let b = parseInt(prompt("Enter b value:"))
let opr = prompt("Enter opr (+, -, *, /):")
let result;

switch(opr) {
    case '+': result = a+b;
              break;
    case '-': result = a-b;
                break;
    case '*': result = a*b;
                break;
    case '/': result = a/b;
                break;
    default: alert('Invalid operator');          
}
// Expression result 10 + 30 = 40
console.log("Expression result "+a+" "+opr+" "+b+" = "+result);
// template literal
console.log("Expression result ${a} ${opr} ${b} = ${result}");  