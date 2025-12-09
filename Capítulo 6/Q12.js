 function lerValorEmReais() {
  const valor = parseFloat(prompt("Digite o valor em Reais (R$):"));
  return valor;
}

function converterParaDolar(valorEmReais, taxaDeCambio) {
  return valorEmReais / taxaDeCambio;
}

function exibirResultado(valorEmReais, valorEmDolar, taxaDeCambio) {
  alert(`Com a taxa de câmbio de R$ ${taxaDeCambio.toFixed(2)} por US$ 1,\n` +
        `R$ ${valorEmReais.toFixed(2)} equivalem a US$ ${valorEmDolar.toFixed(2)}`);
}

function conversorMoeda() {
  const taxaDeCambio = 5.20; // exemplo
  const valorEmReais = lerValorEmReais();
  const valorEmDolar = converterParaDolar(valorEmReais, taxaDeCambio);
  exibirResultado(valorEmReais, valorEmDolar, taxaDeCambio);
}

conversorMoeda();

Explicação;
 
// LerValorEmReais(): Usa prompt@) para pedir ao usuário que digite um valor em reais. Converte esse valor para número com parseFloat().
// converterParaDolar(): Recebe o valor em reais e a taxa de câmbio, e retorna o valor convertido em dólares.
//exibirResultado(): Mostra o resultado final com alertO, formatando os números com duas casas decimais usando toFixed (2).
//conversorMoeda(): É a função principal que coordena todo o processo - leitura, conversão e exibição.
