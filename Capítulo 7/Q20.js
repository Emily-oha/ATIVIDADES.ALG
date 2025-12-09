const pessoas = [
{ nome: "Ana", idade: 16 },
{ nome: "Bruno", idade: 20 },
{ nome: "Carla", idade: 22 },
{ nome: "Daniel", idade: 17 }
];

// Usando find para achar a primeira pessoa com idade > 18
const maiorDe18 = pessoas.find(pessoa => pessoa.idade > 18);

console.log(maiorDe18);
