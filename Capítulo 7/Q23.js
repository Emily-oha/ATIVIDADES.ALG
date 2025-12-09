function imprimirPrimeiroNome(nomeCompleto) {
    const partesDoNome = nomeCompleto.trim().split(/\s+/); // Divide e remove espaços extras

    if (partesDoNome.length > 0) {
        const primeiroNome = partesDoNome[0];
        console.log(`Primeiro nome: ${primeiroNome}`);
    } else {
        console.log("O nome fornecido está vazio.");
    }
}

console.log("23. Teste da função 'imprimirPrimeiroNome':");
imprimirPrimeiroNome("Carlos Alberto Junior");
console.log("-".repeat(20));