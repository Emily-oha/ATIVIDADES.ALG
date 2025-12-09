//questão 12//
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numero < 0) {
  console.log("Não existe fatorial de número negativo!");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  console.log("Fatorial de", numero, "é:", fatorial);
}