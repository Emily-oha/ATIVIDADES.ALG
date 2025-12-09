//questão 11//
let numero1 = parseInt(prompt("Digite um número positivo:"));

if (numero1 >= 0) {
  console.log("Números ímpares de 0 até", numero1, ":");
  for (let i = 0; i <= numero1; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} else {
  console.log("Número inválido! Insira um número positivo.");
}

//questão 12//
let numero2 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numero2 < 0) {
  console.log("Não existe fatorial de número negativo!");
} else {
  for (let i = 1; i <= numero2; i++) {
    fatorial *= i;
  }
  console.log("Fatorial de", numero2, "é:", fatorial);
}
