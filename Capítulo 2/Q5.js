//5. // Soma dos dígitos de um número inteiro
let num = parseInt(prompt("Digite um número inteiro:"));
let soma = 0;
let temp = num;

while (temp > 0) {
    soma += temp % 10;
    temp = Math.floor(temp / 10);
}

alert("A soma dos dígitos de " + num + " é: " + soma);
