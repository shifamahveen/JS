function computerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function userChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let user;
    do {
        user = prompt("Enter your choice: ");
    } while(!choices.includes(user))
    
    return user;
}

function winner(computer, user) {
    if(computer === user) {
        return "Its a tie!";
    } else if (
        user === "rock" && computer === "paper" ||
        user === "paper" && computer === "scissors" ||
        user === "scissors" && computer === "rock"
    ) {
        return "Computer wins!";
    } else {
        return "You win!";
    }
}

let computer = computerChoice()
let user = userChoice()
console.log(`Computers Choice: ${computer}`);
console.log(`You chose: ${user}`);
console.log(winner(computer, user))