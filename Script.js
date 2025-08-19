let secretNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const number = Number(document.querySelector('.number').value);
  let highscore = Number(document.querySelector('.highscore').textContent);
  if (number <= 0) {
    alert('Please Enter a Valid Number Between 1 and 20');
  } else if (number == secretNum) {
    document.querySelector('.secret').textContent = secretNum;
    document.querySelector('.comment').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.score').textContent =
      (Number(document.querySelector('.live').textContent) / 5) * 100;
    if (Number(document.querySelector('.score').textContent) > highscore) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
  } else if (number > secretNum) {
    document.querySelector('.comment').textContent = '📈 Too High';
    document.querySelector('.live').textContent =
      Number(document.querySelector('.live').textContent) - 1;
    if (Number(document.querySelector('.live').textContent) === 0) {
      document.querySelector('.comment').textContent = '💥 Game over';
      document.querySelector('.live').textContent = '0';
      document.querySelector('.check').disabled = true;
    }
  } else if (number < secretNum) {
    document.querySelector('.comment').textContent = '📉 Too Low';
    document.querySelector('.live').textContent =
      Number(document.querySelector('.live').textContent) - 1;
    if (Number(document.querySelector('.live').textContent) === 0) {
      document.querySelector('.comment').textContent = '💥 Game over';
      document.querySelector('.live').textContent = '0';
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.comment').textContent = 'Start Guessing...';
  document.querySelector('.number').value = '';
  document.querySelector('.live').textContent = '5';
  document.querySelector('.score').textContent = '0';
  document.querySelector('.secret').textContent = '?';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('.check').disabled = false;
});
