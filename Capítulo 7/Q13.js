// Cria um array vazio para armazenar os filmes
let filmes = [];

// Pede ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}