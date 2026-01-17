function getComputerChoice(){
    Computer_Choice=Math.floor(Math.random()*3)+1;
    if (Computer_Choice==1){
        return 'rock'
    }else if (Computer_Choice==2){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function getHumanChoice(){
    Human_Choice=prompt("Rock Paper Scissors?")
    return Human_Choice.toLowerCase()
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (humanChoice=='paper'){
        if (computerChoice=='scissors'){
            console.log('You lose! Scissors beats Paper')
            computerScore+=1
        }else if (computerChoice=='paper')console.log('Draw!')
        else {
            console.log('You Win! Paper beats Rock')
            humanScore+=1
        }
    }
    else if (humanChoice=='rock'){
        if (computerChoice=='paper'){
            console.log('You lose! Paper beats Rock')
            computerScore=1
        }else if (computerChoice=='rock')console.log('Draw!')
        else{
            console.log('You Win! Rock beats Scissors')
            humanScore+=1
        }
    }
    else{
        if (computerChoice=='scissors')console.log('Draw!')
        else if (computerChoice=='paper'){
            console.log('You Win! Scissors beats Paper!')
            humanScore+=1
        }else {
            console.log('You lose! Rock beats Scissors')
            computerScore+=1
        }
    }
}

function playgame(){
    for (i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice())
    }
    console.log('\n')
    if (computerScore>humanScore)console.log('Computer Won!! YAAY!!')
    else if (humanScore>computerScore) console.log("You Won! :<")
    else console.log('Draw!! :>')
    console.log(`YourScore: ${humanScore}`)
    console.log(`ComputerScore: ${computerScore}`)
}

playgame()