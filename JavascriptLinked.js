let userScore = 0; 
let computerScore = 0; 


//querying the elements from the html file 
const container = document.querySelector('#textOutput'); 
const backgroundContainer = document.querySelector('.background');

const content = document.createElement('div');
const score = document.createElement('p'); 

const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper'); 
const scissors = document.querySelector('#scissors'); 


//Adding content to the html file 
content.classList.add('content');
content.textContent = 'Hello, and welcome! choose an option to begin the game'; 

score.classList.add('content');
score.textContent = 'Your score: ' + userScore + ' - Computer score: ' + computerScore;

container.appendChild(score);
container.appendChild(content);


//Eventhandlers for the different buttons 
rock.addEventListener("click", rockInput);
paper.addEventListener("click", paperInput);
scissors.addEventListener("click", scissorsInput);


//Function that returns a random pick by the computer
function computerPlay() { 

    let picks = Array("rock", "paper", "scissors");
    let pick = picks[Math.floor(Math.random() * picks.length)]; 
    return pick; 

} 


function ResetScore() {

    userScore = 0;
    computerScore = 0; 

} 

function ResetBackground() {

    backgroundContainer.style.backgroundColor = "rgba(255, 245, 238, 0.3)"; 

}


//Functions that runs when the option is picked by the player
function rockInput() { 

    ResetBackground();
    content.textContent = playRound("rock", computerPlay()); 
    
} 

function paperInput() { 

    ResetBackground();
    content.textContent = playRound("paper", computerPlay()); 
    
} 

function scissorsInput() { 

    ResetBackground();
    content.textContent = playRound("scissors", computerPlay()); 
    
}


//Function that plays a round with player and computer input, and returns the result of the round
function playRound(playerSelection, computerSelection) { 

            let userInput = playerSelection.toLowerCase();
            let computerInput = computerSelection;
            let text;

            switch (userInput) {
                case "rock":
                    switch (computerInput) {
                        case "rock":
                            text = "Its even, both picked rock! pick again";
                            break;
                        case "paper":
                            text = "You lose! paper beats rock";
                            break;
                        case "scissors":
                            text = "You win! rock beats scissors";
                            break;
                    }
                    break;
                case "paper":
                    switch (computerInput) {
                        case "rock":
                            text = "you win! paper beats rock";
                            break;
                        case "paper":
                            text = "Its even! you both picked paper! pick again";
                            break;
                        case "scissors":
                            text = "You lose! scissors beats paper!";
                            break;
                    }
                    break;
                case "scissors":
                    switch (computerInput) {
                        case "rock":
                            text = "You lose! rocks beats scissors";
                            break;
                        case "paper":
                            text = "You win! scissors beats paper";
                            break;
                        case "scissors":
                            text = "Its even! you both picked scissors! pick again";
                            break;
                    }
                    break;
                default:
                    text = "you did not make a pick. Pick again";
                    break;
            }

            let splitText = text.split(" ");
            let splitIndex = splitText[1];

            switch (splitIndex) {
                case "lose!":
                    computerScore++;
                    break;
                case "win!":
                    userScore++;
                    break;
            } 

            score.textContent = 'Your score: ' + userScore + ' - Computer score: ' + computerScore;

            if (userScore == 5) { 

                backgroundContainer.style.backgroundColor = "rgb(40, 191, 0, 0.3)";
               
   
                text = "You won the game! Press an option to start over";
                ResetScore();
                //ResetBackground();

            } else if (computerScore == 5) { 

                backgroundContainer.style.backgroundColor = "rgb(241, 7, 0, 0.3)";
                text = "The computer won the game! Press an option to start over";
                ResetScore();
                //ResetBackground();

            }

            return text; 
            
        }


