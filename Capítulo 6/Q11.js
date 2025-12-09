//11// Funções para cada operação
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b !== 0 ? a / b : "Erro: divisão por zero";

// Função para exibir o resultado
const mostrarResultado = (operacao, resultado) => {
  alert(`O resultado da ${operacao} é: ${resultado}`);
};

// Função principal da calculadora
const calculadora = () => {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let operacao = prompt("Escolha a operação (+, -, *, /):");

  let resultado;

  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      mostrarResultado("adição", resultado);
      break;
    case "-":
      resultado = subtracao(num1, num2);
      mostrarResultado("subtração", resultado);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      mostrarResultado("multiplicação", resultado);
      break;
    case "/":
      resultado = divisao(num1, num2);
      mostrarResultado("divisão", resultado);
      break;
    default:
      alert("Operação inválida!");
  }
};
calculadora ();
