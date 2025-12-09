//questão 7//
let ladoA = parseFloat(prompt("Digite o lado A do triângulo:"));
let ladoB = parseFloat(prompt("Digite o lado B do triângulo:"));
let ladoC = parseFloat(prompt("Digite o lado C do triângulo:"));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo Equilátero (todos os lados iguais)");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triângulo Isósceles (dois lados iguais)");
  } else {
    console.log("Triângulo Escaleno (todos os lados diferentes)");
  }
} else {
  console.log("Triângulo inválido (não satisfaz a desigualdade)!");
}
