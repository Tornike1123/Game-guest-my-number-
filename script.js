
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let gsnm = document.querySelector('.gsnm').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    //when players wins
  } else if (guess === secretNumber) {
    document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,233,58,1) 35%, rgba(0,212,255,1) 100%)';
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.gsnm').textContent = '🏆YOU WIN!🏆';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
   if(score > 1){
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.score').textContent = score;
    score--;
    score;
   
   }else{
    document.querySelector('.message').textContent = 'you lost the game';
    document.querySelector('.score').textContent = '0';
   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.gsnm').textContent = 'Guess My Number!';
  document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,54,1) 35%, rgba(0,212,255,1) 100%)';
  
});
