function getComputerChoice(){
    Computer_Choice=Math.floor(Math.random()*3);
    if (Computer_Choice==0){
        return 'rock'
    }else if (Computer_Choice==1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

let humanChoice;
let humanScore=0;
let computerScore=0;

function win(humanChoice,computerChoice,humanScore,computerScore){
    return `You won! ${humanChoice} beats ${computerChoice}<br/>Computer Score=${computerScore}<br/>Human score=${humanScore}<br/>`
}

function lose(humanChoice,computerChoice,humanScore,computerScore){
    return `You lost! ${humanChoice} beats ${computerChoice}<br/>Computer Score=${computerScore}<br/>Human score=${humanScore}<br/>`
}

function draw(humanChoice,computerChoice,humanScore,computerScore){
    return `Draw!<br/>Computer Score=${computerScore}<br/>Human score=${humanScore}<br/>`
}

function playRound(humanChoice,computerChoice){
    if (humanChoice==='paper'){
        if (computerChoice==='scissors'){
            computerScore+=1
            para.innerHTML+=lose(humanChoice,computerChoice,humanScore,computerScore)
        }else if (computerChoice==='paper'){
            para.innerHTML+=draw(humanChoice,computerChoice,humanScore,computerScore)
        }else {
            humanScore+=1
            para.innerHTML+=win(humanChoice,computerChoice,humanScore,computerScore)
        }
    }
    else if (humanChoice==='rock'){
        if (computerChoice==='paper'){
            computerScore+=1
            para.innerHTML=lose(humanChoice,computerChoice,humanScore,computerScore)
        }else if (computerChoice==='rock'){
            para.innerHTML+=draw(humanChoice,computerChoice,humanScore,computerScore)
        }else{
            humanScore+=1
            para.innerHTML+=win(humanChoice,computerChoice,humanScore,computerScore)
        }
    }
    else{
        if (computerChoice==='scissors'){
            para.innerHTML+=draw(humanChoice,computerChoice,humanScore,computerScore)
        }else if (computerChoice==='paper'){
            humanScore+=1
            para.innerHTML+=win(humanChoice,computerChoice,humanScore,computerScore)
        }else {
            computerScore+=1
            para.innerHTML+=lose(humanChoice,computerChoice,humanScore,computerScore)
        }
    }
    para.innerHTML+='<br/>'
}

function playgame(){
    playRound(humanChoice,getComputerChoice())
}

const btn1=document.createElement('button')
const btn2=document.createElement('button')
const btn3=document.createElement('button')
const div=document.createElement('div')
const body=document.querySelector('body')
let para=document.createElement('p')

btn1.textContent='ROCK'
btn2.textContent='PAPER' 
btn3.textContent='SCISSORS'

div.addEventListener('click', event=>{
    let target=event.target
    if (humanScore===5 || computerScore===5){
        btn1.disabled=true
        btn2.disabled=true
        btn3.disabled=true
        if (computerScore===5){
            para.innerHTML+='COMPUTER WON! ;><br/><br/>'
        }
        else{
            para.innerHTML+='You won ;<<br/><br/>'
        }
        para.innerHTML+='GAME OVER!!<br/><br/>'
    }else{
        switch(target.textContent){
            case 'ROCK':
                humanChoice='rock'
                break
            case 'PAPER':
                humanChoice='paper'
                break
            case 'SCISSORS':
                humanChoice='scissors'
                break
        }
        playgame()
    }
})

div.append(btn1)
div.append(btn2)
div.append(btn3)
div.append(para)
body.append(div)