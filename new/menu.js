let str = prompt("Enter the string:");
let option = parseInt(prompt("Select option:\n1. Length of String\t2. No. of Word"));

if (option === 1) {
    let len = str.length
    document.write(len)
} else if (option === 2) {
    let list = str.split(" ")
    document.write(list.length)
} else {
    prompt("Invalid option")
}