marks = prompt("Enter your marks: ")

if (marks >= 95){
    grade = "A+"
} else if (marks>=90 && marks<95) {
    grade = "A"
} else if (marks>=80 && marks<90) {
    grade = "B"
} else if (marks>=70 && marks<80) {
    grade = "C"
} else if (marks>=60 && marks<70) {
    grade = "D"
} else if (marks>=50 && marks<60) {
    grade = "E"
} else {
    grade = "F"
}
// document.write("Your grade based on your marks ",marks, " is ", grade)
// template literals
let result = `Grade based on marks ${marks} is ${grade}`
document.write(result)
// document.write(typeof result)
console.log("Hello\tWorld")
// escape characters -> \n, \t, \b