let username = prompt("Enter username: ");
let password = prompt("Enter Password: ");
let digits = "0123456789";

if(!(password.includes(username))
     && (password.length>=8) 
    && (digits.includes(password))) {
    console.log("Login succesful!");
} else {
    console.log("Login unsuccesful!");
}