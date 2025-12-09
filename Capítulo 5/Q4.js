//4. //
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}