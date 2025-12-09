
function jogoAdivinhacao() {
  // Número secreto aleatório entre 1 e 100
  let numeroSecreto = Math.floor(Math.random() * 100) + 1;

  // Pontuação inicial
  let pontos = 100;
  let palpite;

  alert("Bem-vindo ao jogo de adivinhação!\nTente adivinhar o número entre 1 e 100.");

  // Loop até o jogador acertar
  while (true) {
    palpite = parseInt(prompt("Digite seu palpite:"));

    if (palpite === numeroSecreto) {
      alert("Parabéns! Você acertou o número secreto " + numeroSecreto +
            "\nSua pontuação final: " + pontos + " pontos.");
      break; // Sai do loop
    } else {
      pontos--; // perde 1 ponto por erro

      if (palpite > numeroSecreto) {
        alert(" Errou! O número secreto é menor que " + palpite +
              "\nPontuação atual: " + pontos);
      } else {
        alert(" Errou! O número secreto é maior que " + palpite +
              "\nPontuação atual: " + pontos);
      }
    }
  }
}

// Executa o jogo
jogoAdivinhacao();