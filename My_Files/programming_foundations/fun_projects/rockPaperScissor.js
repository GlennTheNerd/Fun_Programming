const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Pick either: rock, paper or scissors');
  } 
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "You destroyed everything! You Win!"
  }
  
  if (userChoice === computerChoice) {
    return "Tied";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer Wins!";
    } else {
      return "You Win!";
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer Wins!";
    } else {
      return "You Win!";
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer Wins";
    } else {
      return "You Win!";
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice()
  console.log("Your choice is: " + userChoice);
  console.log("The computer choice is: " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()