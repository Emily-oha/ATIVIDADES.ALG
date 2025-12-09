const carros = [
  { nome: 'Honda NSX', ano: 1990 },
  { nome: 'Mustang Shelby gt500', ano: 2022 },
  { nome: 'Supra MK4', ano: 1995 },
  { nome: 'Nissan Skyline GT-R', ano: 1996 },
  { nome: 'Koenigsegg Agera', ano: 2016 }
];

// Filtra carros antigos (ano < 2010)
const carrosAntigos = carros.filter(carro => carro.ano < 2010);

console.log(carrosAntigos);


