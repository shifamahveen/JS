function computer_choice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = parseInt(Math.random() * 3);
    return choices[index];
}

function user_choice() {
    let choice;
    let choices = ['rock', 'paper', 'scissors'];
    do {
        choice = prompt("Enter your choice\n1. Rock 2. Paper 3. Scissors").toLowerCase();
    } while(!choices.includes(choice));
    return choice;
}

function winner(user, computer) {
    if (user === computer) {
        return "Its a tie!";
    } else if (
        (user === 'rock' && computer === 'scissors')
        || (user === 'paper' && computer === 'rock')
        || (user === 'scissors' && computer === 'paper')
    ) {
        return "You won!";
    } else {
        return "Computer Won!"
    }
}

let computer = computer_choice();
let user = user_choice();
let result = winner(user, computer);
console.log("Your choice: "+user);
console.log("Computer choice: "+computer);
console.log("Result: "+result);
