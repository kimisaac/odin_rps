function getComputerChoice(){
    let num = Math.floor(Math.random()*10)%3;
    switch(num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        return "Draw!";
    }
         
    switch (playerSelection){
        case "rock":
            if (computerSelection=="paper") {
                return `You Lose, ${playerSelection} loses to ${computerSelection}.`;
            }
            else{
                return `You Win, ${playerSelection} beats ${computerSelection}.`;
            }
        case "paper":
            if (computerSelection=="scissors") {
                return `You Lose, ${playerSelection} loses to ${computerSelection}.`;
            }
            else{
                return `You Win, ${playerSelection} beats ${computerSelection}.`;
            }
        case "scissors":
            if (computerSelection=="rock") {
                return `You Lose, ${playerSelection} loses to ${computerSelection}.`;
            }
            else{
                return `You Win, ${playerSelection} beats ${computerSelection}.`;
            }
    }

}

for (let i = 0; i < 3; i++) {
    console.log(playRound(prompt("rock,paper,scissors?"),getComputerChoice()));
}