let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gsnm = document.querySelector('.gsnm').textContent;
let message = document.querySelector('.message').textContent;




document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess){ 
        document.querySelector('.message').textContent = 'No number';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct number';
        document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,233,58,1) 35%, rgba(0,212,255,1) 100%)';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.gsnm').textContent = '🏆YOU WIN!🏆';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }
    }else if(guess > secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You Lost The Game';
        document.querySelector('.score').textContent = 0;
        
    }
        
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost The Game';
            document.querySelector('.score').textContent = 0;
        }
    
    
    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,54,1) 35%, rgba(0,212,255,1) 100%)';
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.gsnm').textContent = 'Guess My Number!';

});

