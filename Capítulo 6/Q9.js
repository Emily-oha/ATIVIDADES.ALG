//9//
// ===== Reescrevendo em Arrow Functions =====

// Função de mensagem
const mostrarMensagem = () => console.log("Olá!");

// Função da média
const media = (a, b, c) => (a + b + c) / 3;

// Função do quadrado
const quadrado = x => x * x;

// Exemplo de função com escopo usando Arrow Function
const exemplo = () => {
  let nome = "Emily";
  console.log("Olá, " + nome + "!");
};

// Testando as funções:
mostrarMensagem(); // Saída: Olá!
console.log("Média:", media(4, 7, 9)); // Saída: Média: 6.67
console.log("Quadrado de 5:", quadrado(5)); // Saída: 25
exemplo(); // Saída: Olá, Emily!
