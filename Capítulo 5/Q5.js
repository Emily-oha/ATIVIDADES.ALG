//5.//
let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");

if (escolha === "C" || escolha === "c") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2));
} else if (escolha === "F" || escolha === "f") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    alert("Temperatura em Celsius: " + celsius.toFixed(2));
} else {
    alert("Opção inválida.");
}