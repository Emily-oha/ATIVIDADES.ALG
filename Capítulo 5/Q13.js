//questão 13.//
let numeroSecreto = Math.floor(Math.random() * 101); // entre 0 e 100
let tentativas = 10;

console.log("Jogo da adivinhação! Você tem 10 tentativas.");

for (let i = 1; i <= tentativas; i++) {
  let palpite = parseInt(prompt(`Tentativa ${i}: Digite seu palpite (0 a 100):`));

  if (palpite === numeroSecreto) {
    console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) na tentativa ${i}.`);
    break;
  } else if (palpite < numeroSecreto) {
    console.log("O número secreto é MAIOR.");
  } else {
    console.log("O número secreto é MENOR.");
  }

  if (i === tentativas) {
    console.log(`Acabaram as tentativas! O número secreto era: ${numeroSecreto}.`);
  }
}