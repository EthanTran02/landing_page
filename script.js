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
    let input = prompt('type: rock, paper, or scissor')
    return input
}