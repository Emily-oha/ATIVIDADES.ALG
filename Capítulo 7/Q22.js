function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    const partesDoNome = nomeCompleto.trim().split(/\s+/); // Divide e remove espaços extras

    if (partesDoNome.length > 0) {
        const primeiroNome = partesDoNome[0];
        // O último nome é o último elemento do array
        const ultimoNome = partesDoNome[partesDoNome.length - 1];

        console.log(`Primeiro nome: ${primeiroNome}`);
        console.log(`Último nome: ${ultimoNome}`);
    } else {
        console.log("O nome fornecido está vazio.");
    }
}

console.log("22. Teste da função 'imprimirPrimeiroEUltimoNome':");
imprimirPrimeiroEUltimoNome("Ana Maria da Silva");
console.log("-".repeat(20));

// Exercício 23: Crie uma função que recebe