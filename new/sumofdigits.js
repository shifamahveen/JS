let num = "123";

function addNum(num) {
    let sum = 0;
    for(let i of num) {
        sum += parseInt(i);
    }
    return sum;
}
console.log(addNum(num));