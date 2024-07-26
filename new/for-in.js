// Object
let car = {
    brand: "mercedes",
    color: "black",
    mileage: "25kmph"
}
for(let i in car) {
    console.log(`key: ${i}, value: ${car[i]}`)
}

// Array
let marks = [30, 68, 100]
for(let x in marks) {
    console.log(marks[x])
}