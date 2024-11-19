function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum == 1) {
        return 'rock'
    } else if ( randomNum == 2) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function getHumanChoice() {
    let input = prompt('type rock, paper, or scissor:')
    return input
}

let humanScore = 0
let computerScore  = 0

function playRound (humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissor' 
        || humanChoice == 'paper' && computerChoice == 'rock' 
        || humanChoice == 'scissor' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beat ${computerChoice}`)
        humanScore += 1
    } else if (humanChoice == computerChoice){
        console.log('It a tie!')
    } else {
        console.log(`You lose! ${computerChoice} beat ${humanChoice}`)
        computerScore += 1
    }
}



function playGame (){
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice().toLowerCase()
        let computerSelection = getComputerChoice().toLowerCase()
        playRound(humanSelection, computerSelection)
}}

playGame()

if ( humanScore > computerScore ) {
    console.log(`result: human win! socre ${humanScore} : ${computerScore} for human`)
} else if ( humanScore < computerScore ) {
    console.log(`result: computer win! socre ${computerScore} : ${humanScore} for computer`)
} else {
    console.log('reult: Tie!')
}
