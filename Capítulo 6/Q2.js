//2//
function exercicio2() {
  let pessoa = { nome: "Fulano", idade: 18 };

  console.log("Object.keys:", Object.keys(pessoa));
  console.log("Array.isArray([1,2,3]):", Array.isArray([1,2,3]));
  console.log("JSON.stringify(pessoa):", JSON.stringify(pessoa));

  alert("Exploração feita! Veja os resultados no console (F12).");
}


//Explicando:

//Object.keys → retorna as chaves (propriedades) do objeto.

//Array.isArray(valor) → verifica se o valor informado é um array (lista).

//JSON.stringify(objeto) → transforma um objeto em um texto no formato JSON.