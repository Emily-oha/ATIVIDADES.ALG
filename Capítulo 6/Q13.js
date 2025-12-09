// Função para calcular o IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

// Função principal
function main() {
  // Entrada de dados
  let altura = parseFloat(prompt("Digite sua altura (em metros):"));
  let peso = parseFloat(prompt("Digite seu peso (em kg):"));

  // Processamento
  let imc = calcularIMC(peso, altura);
  let classificacao = classificarIMC(imc);

  // Saída de dados
  alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
}

// Executa o programa
main();

/*
Explicação:

- O programa pede altura e peso do usuário.
- Calcula o IMC usando a fórmula: IMC = peso / (altura * altura).
- Classifica o IMC em:
    - IMC < 18.5 → Abaixo do peso
    - 18.5 ≤ IMC < 25 → Peso normal
    - 25 ≤ IMC < 30 → Sobrepeso
    - IMC ≥ 30 → Obeso
- Usa prompt() para entrada de dados e parseFloat() para converter em número decimal.
- Usa alert() para mostrar o resultado.
- .toFixed(2) limita o IMC a 2 casas decimais.
*/

