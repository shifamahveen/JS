// truthy and falsy values
// false -> false, 0, null, undefined, "", NaN
// Boolean(null) -> false
let x = ""

if(x) {
    console.log("truthy value")
} else {
    console.log("falsy value")
}