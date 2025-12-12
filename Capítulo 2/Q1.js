//1. // Torre de Hanoi com 3 discos
function hanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco 1 de ${origem} para ${destino}`);
    } else {
        hanoi(n - 1, origem, auxiliar, destino);
        console.log(`Mover disco ${n} de ${origem} para ${destino}`);
        hanoi(n - 1, auxiliar, destino, origem);
    }
}

hanoi(3, "A", "C", "B");