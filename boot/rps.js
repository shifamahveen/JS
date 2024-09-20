let choices = ['rock', 'paper', 'scissors'];
let computer = choices[Math.floor(Math.random() * 3)];
do {
    user = prompt("Enter your choice: ");
} while(!choices.includes(user));

console.log(`Your choice: ${user}`);
console.log(`Computers choice: ${computer}`);

if (user === computer) {
    console.log("Its a tie!");
} else if (
    (user==='rock' && computer==='scissors') ||
    (user==='paper' && computer==='rock') ||
    (user==='scissors' && computer==='paper')
 ) {
    console.log("Winner!");
 } else {
    console.log('Computer Wins!');
 }
