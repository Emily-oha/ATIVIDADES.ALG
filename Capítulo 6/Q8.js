//8//

function blocoEscopo () {

if (true) {

let variavelBloco = "Estou dentro do bloco";

console.log(variavelBloco); // acessível
}

console.log(variavelBloco); // ERRO: não acessível fora do bloco
}
blocoEscopo();
