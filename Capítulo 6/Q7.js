//7//

let variavelGlobal = "Eu sou global";

function exemploEscopo () {

let variavelLocal = "Eu sou local";

console.log(variavelGlobal)}; 

// acessível console.log(variavelLocal); // acessível

exemploEscopo ();

console.log(variavelGlobal); // acessível fora da função

console.log(variavelLocal); // ERRO: não é acessível fora da função