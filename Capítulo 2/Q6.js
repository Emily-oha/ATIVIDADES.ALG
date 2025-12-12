//6. // Calcular o fatorial de um número
let numeroF = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

if (numeroF < 0) {
    alert("Não existe fatorial de número negativo!");
} else {
    for (let i = 1; i <= numeroF; i++) {
        fatorial *= i;
    }
    alert("Fatorial de " + numeroF + " é: " + fatorial);
}
