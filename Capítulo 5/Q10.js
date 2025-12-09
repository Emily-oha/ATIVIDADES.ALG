    let numero = parseInt(prompt("Digite um número positivo:"));
    
    if (numero <= 0) {
        console.log("Por favor, digite um número positivo.");
        return;
    }
    
    console.log(`Números pares de 0 até ${numero}:`);
    let i = 0;
    while (i <= numero) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
