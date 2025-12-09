//questão 9//
let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));

let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
  classificacao = "Abaixo do peso";
} else if (imc < 25) {
  classificacao = "Peso normal";
} else if (imc < 30) {
  classificacao = "Sobrepeso";
} else {
  classificacao = "Obesidade";
}

console.log(`Seu IMC é ${imc.toFixed(2)}: ${classificacao}`);
