//3//
function exercicio3() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  let media = (n1 + n2 + n3) / 3;

  alert("A média é: " + Math.round(media));
  console.log("Média exata: " + media);
}

//Explicando:

//prompt() → pede que o usuário digite um número.

//parseFloat() → converte o que o usuário digitou para número decimal.

//Math.round() → arredonda a média para o inteiro mais próximo.

//alert() → exibe o resultado na tela.

//console.log() → mostra no console a média exata 