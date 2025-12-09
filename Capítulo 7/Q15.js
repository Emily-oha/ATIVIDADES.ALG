// Lista de filmes do exercício anterior
let filmes = [];

// Solicita ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe no console cada um dos filmes informados usando for...of
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}