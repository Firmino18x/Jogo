let randomNumber, attemptsLeft, hardMode;

function iniciaJogo() {
  hardMode = document.getElementById('hardMode').checked;
  attemptsLeft = hardMode ? 5 : 10; 
  randomNumber = Math.floor(Math.random() * 100) + 1; 
  document.getElementById('attempts').textContent = attemptsLeft; 
  document.getElementById('feedback').textContent = 'Tente adivinhar o número entre 1 e 100!'; 
  document.getElementById('submitBtn').disabled = false; 
  document.getElementById('restartBtn').style.display = 'none'; 
  document.getElementById('guessInput').value = ''; 
}

function verificaNum() {
  let guess = parseInt(document.getElementById('guessInput').value); 
  let feedback = document.getElementById('feedback');

  if (!guess) {
    feedback.classList.remove('alert-info', 'alert-warning', 'alert-success', 'alert-danger');
    feedback.classList.add('alert-danger');
    feedback.textContent = 'Por favor, insira um número válido!';
    return;
  }

  attemptsLeft--; 
  if (guess === randomNumber) {
    feedback.classList.remove('alert-info', 'alert-warning', 'alert-danger');
    feedback.classList.add('alert-success');
    feedback.textContent = 'Parabéns! Você acertou!';
    document.getElementById('submitBtn').disabled = true; 
    document.getElementById('restartBtn').style.display = 'block'; 
  } else if (attemptsLeft <= 0) {
    feedback.classList.remove('alert-info', 'alert-warning', 'alert-success');
    feedback.classList.add('alert-danger');
    feedback.textContent = `Você perdeu! O número era ${randomNumber}.`;
    document.getElementById('submitBtn').disabled = true; 
    document.getElementById('restartBtn').style.display = 'block'; 
  } else {
    feedback.classList.remove('alert-info', 'alert-success', 'alert-danger');
    feedback.classList.add('alert-warning');
    feedback.textContent = guess > randomNumber ? 'Muito alto! Tente novamente.' : 'Muito baixo! Tente novamente.';
    document.getElementById('attempts').textContent = attemptsLeft; 
  }
}

window.onload = iniciaJogo;