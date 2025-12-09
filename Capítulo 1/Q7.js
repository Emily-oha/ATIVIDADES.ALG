//7. // Verificar se uma palavra é um palíndromo
let palavra = prompt("Digite uma palavra:").toLowerCase();
let invertida = palavra.split("").reverse().join("");

if (palavra === invertida) {
    alert("A palavra é um palíndromo!");
} else {
    alert("A palavra NÃO é um palíndromo.");
}
