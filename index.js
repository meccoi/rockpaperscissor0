document.addEventListener("DOMContentLoaded", function() {
    let btns = document.querySelectorAll('.hand-item');

    let player;
    let computer;
    let score = 0;


    
    btns.forEach(function(btn) {
        btn.onclick = function(e) {
            const idValue = btn.id;
            player = idValue;
            console.log("player: "+player);

            computerTurns();

            let textresult = Res(computer, player);

            let pborder = document.querySelector('.p-hand');
            let cborder = document.querySelector('.c-hand');

            setTimeout(() => {
                pborder.style.transform = 'scale(1)';
            }, .1);

            if (textresult === 'YOU WIN') {
                score += 1;
            } else if (textresult === 'DRAW') {
               
            } else {
                score -= 1;
            }
            

            let handGroup = document.querySelector('.select');
            handGroup.classList.add('hidden');

            let result = document.querySelector('.result');
            result.classList.remove('hidden');
            
            let getComputerDiv = document.getElementById('computerTurn');
            let textscore = document.getElementById('textscore');
            
            let playagain = document.querySelector('.p-result');

            let loading = document.querySelector('.loading');

            setTimeout(() => {
                loading.classList.add('hidden');
                getComputerDiv.classList.remove('opacity-0');
                setTimeout(() => {
                    textscore.textContent = score;
                    playagain.classList.remove('hidden');
    
                    if (textresult === 'YOU WIN') {
                        pborder.classList.add('winner');
                    } else if (textresult === 'DRAW') {
                       
                    } else {
                        cborder.classList.add('cwinner');
                    }
                }, 700);
            }, 2000);

            let playagainbtn = document.getElementById('playagainbtn');
            playagainbtn.onclick = () => {
                pborder.style.transform = 'scale(.2)';
                handGroup.classList.remove('hidden');
                result.classList.add('hidden');
                playagain.classList.add('hidden');
                getComputerDiv.classList.add('opacity-0');
                pborder.classList.remove('winner');
                cborder.classList.remove('cwinner');
                loading.classList.remove('hidden');


            }

            let imgurl = [
                'images/icon-paper.svg',
                'images/icon-scissors.svg',
                'images/icon-rock.svg'
            ]


            switch(player){
                case 'rock':
                    player = imgurl[2];
                    console.log(player);
                    pborder.style.background = 'var(--pri-st-Paper-gradient)';
                    break;
                case 'paper':
                    player = imgurl[0];
                    console.log(player);
                    pborder.style.background = ' var(--pri-st-Rock-gradient)';
                    break;
                case 'scissor':
                    player = imgurl[1];
                    console.log(player);
                    pborder.style.background = 'var(--pri-st-scissor-gradient)';
                    break;
            }

            switch(computer){
                case 'rock':
                    computer = imgurl[2];
                    console.log(computer);
                    cborder.style.background = 'var(--pri-st-Paper-gradient)';
                    break;
                case 'paper':
                    computer = imgurl[0];
                    console.log(computer);
                    cborder.style.background = ' var(--pri-st-Rock-gradient)';
                    break;
                case 'scissor':
                    computer = imgurl[1];
                    console.log(computer);
                    cborder.style.background = 'var(--pri-st-scissor-gradient)';
                    break;
            }

            let phand = document.querySelector('.p-hand img');
            phand.setAttribute('src', player);

            let chand = document.querySelector('.c-hand img');
            chand.setAttribute('src', computer);


            let textresultdisplay = document.querySelector('.p-result h2');
            textresultdisplay.textContent = textresult;
        };
    });



function computerTurns(){
    let mathRan = Math.floor(Math.random() * 3 + 1);

    switch(mathRan){
        case 1:
            computer = "rock";
            console.log(computer);
            break;
        case 2:
            computer = "paper";
             console.log(computer);
             break;
         case 3:
            computer = "scissor";
            console.log(computer);
            break;

    }
}


function Res(computer, player){
    if(computer === player){
        return "DRAW";
    }
    else if(computer === 'rock'){
        return player === 'paper' ? 'YOU WIN' : 'YOU LOSE';
    }
    else if(computer === 'paper'){
        return player === 'scissor' ? 'YOU WIN' : 'YOU LOSE';
    }
    else if(computer === 'scissor'){
        return player === 'rock' ? 'YOU WIN' : 'YOU LOSE';
    }
}

let btnrules = document.querySelector('.btn-rules');
let gamerulesmodal = document.querySelector('.rules-modal');
let closemodal = document.querySelector('.rules-modal__content--close');
let bg = document.querySelector('.bg-black');


closemodal.onclick = function(){
    gamerulesmodal.style.clipPath = 'circle(0% at 50% 50%)';
    bg.style.opacity = '.0';
    bg.style.zIndex = '-2';
    
}
btnrules.onclick = function(){
    gamerulesmodal.style.clipPath = 'circle(100% at 50% 50%)';
    bg.style.opacity = '.5';
    bg.style.zIndex = '2';


}

let resetbtn = document.querySelector('.btn-reset');
resetbtn.onclick = function(){
    textscore.textContent = 0;
    score = 0;
    console.log("clicked");
}
});

