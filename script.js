let humanScore = 0
let computerScore  = 0

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if ( randomNum == 1 ) {
        return 'rock'
    } else if ( randomNum == 2 ) {
        return 'paper'
    } else {
        return 'scissor'
    }
}
const selection = document.createElement('p')
const div = document.createElement('p')
const score = document.createElement('p')
const line = document.createElement('p')
const result = document.createElement('p')

function playRound (humanChoice, computerChoice) {
    const body = document.querySelector('body')
    body.appendChild(selection)
    body.appendChild(div)
    body.appendChild(score)
    body.appendChild(line)
    body.appendChild(result)
   
    if (humanChoice == 'rock' && computerChoice == 'scissor' 
        || humanChoice == 'paper' && computerChoice == 'rock' 
        || humanChoice == 'scissor' && computerChoice == 'paper') {
        
        humanScore += 1
        selection.innerText = `human pick: ${humanChoice}, computer pick: ${computerChoice}`
        div.innerText = `You win! ${humanChoice} beat ${computerChoice}`
        score.innerText = `human: ${humanScore} | computer: ${computerScore}`

    } else if (humanChoice == computerChoice){
        selection.innerText = `human pick: ${humanChoice}, computer pick: ${computerChoice}`
        div.innerText = `Tie!`
        score.innerText = `human: ${humanScore} | computer: ${computerScore}`

    } else {
        computerScore += 1
        selection.innerText = `human pick: ${humanChoice}, computer pick: ${computerChoice}`
        div.innerText = `You lose! ${computerChoice} beat ${humanChoice}`
        score.innerText = `human: ${humanScore} | computer: ${computerScore}`
    }

    line.innerText = '_______________________'
    
    if (humanScore === 5) {
        result.innerText = 'THE WINNER IS HUMAN \n\n\n restart to play again'
        rock.remove()
        paper.remove()
        scissor.remove()
    } else if (computerScore === 5) {
        result.innerText = 'THE WINNNER IS COMPUTER \n\n\n restart to play again'
        rock.remove()
        paper.remove()
        scissor.remove()
    }
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

rock.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice())
})
paper.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice())
})
scissor.addEventListener('click', (e) => {
    playRound(e.target.id, getComputerChoice())
})



