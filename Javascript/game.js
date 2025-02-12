function rps(userChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(computerChoice === userChoice) {
        result = "Its a tie!";
    } else if (
        userChoice === "rock" && computerChoicemputer === "paper" ||
        userChoice === "paper" && computerChoice === "scissors" ||
        userChoice === "scissors" && computerChoice === "rock"
    ) {
        result = "Computer wins!";
    } else {
        result = "You win!";
    }

    document.querySelector("#result").innerHTML = result;
    document.querySelector("#computer").innerHTML = computerChoice;
    document.querySelector("#user").innerHTML = userChoice
}

