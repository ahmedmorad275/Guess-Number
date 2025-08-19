let secretNum = Math.trunc(Math.random() * 20) + 1;
let comment = document.querySelector('.comment');
let live = document.querySelector('.live');
let score = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let secret = document.querySelector('.secret');
let highscoreEl = document.querySelector('.highscore');

function correctNum() {
  secret.textContent = secretNum;
  comment.textContent = '🎉 Correct Number';
  score.textContent = (Number(live.textContent) / 5) * 100;
  document.querySelector('body').style.backgroundColor = '#60b347';
  let highscore = Number(highscoreEl.textContent);
  if (Number(score.textContent) > highscore) {
    highscoreEl.textContent = score.textContent;
  }
}

function gameOver(msg) {
  comment.textContent = `${msg}`;
  live.textContent = Number(live.textContent) - 1;
  if (Number(live.textContent) === 0) {
    comment.textContent = '💥 Game over';
    live.textContent = '0';
    checkBtn.disabled = true;
    secret.textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#c13636ff';
  }
}

function reset() {
  comment.textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('.number').value = '';
  live.textContent = '5';
  score.textContent = '0';
  secret.textContent = '?';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  checkBtn.disabled = false;
}

function checkNum() {
  const number = Number(document.querySelector('.number').value);

  if (number <= 0) {
    alert('Please Enter a Valid Number Between 1 and 20');
  } else if (number == secretNum) {
    correctNum();
  } else if (number > secretNum) {
    gameOver('📈 Too High');
  } else if (number < secretNum) {
    gameOver('📉 Too Low');
  }
}

checkBtn.addEventListener('click', checkNum);

againBtn.addEventListener('click', reset);
