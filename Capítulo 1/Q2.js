//2. // Torre de Hanoi com 4 discos
function hanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
    } else {
        hanoi(n - 1, origem, auxiliar, destino);
        console.log(`Mover disco ${n} de ${origem} para ${destino}`);
        hanoi(n - 1, auxiliar, destino, origem);
    }
}

hanoi(4, "A", "C", "B");
