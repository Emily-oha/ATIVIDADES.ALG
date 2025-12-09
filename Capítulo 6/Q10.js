//10// Função que calcula a média de dois números
const calcularMedia = () => {
  // Solicita os números ao usuário
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));

  // Calcula a média
  let media = (num1 + num2) / 2;

  // Exibe o resultado
  alert("A média é: " + media);
};

// Chama a função 
