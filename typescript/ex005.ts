enum Semaforo {
    Verde,
    Amarelo,
    Vermelho
}

let corAtual: Semaforo = Semaforo.Verde;

let painelControle = {
    status: Semaforo.Verde,
    tempoEspera: 30
}

corAtual = Semaforo.Amarelo;

painelControle.status = corAtual;
painelControle.tempoEspera = 5;

console.log(`Semaforo: `, Semaforo);
console.log(`Cor atual: ${corAtual}`);
console.log(`Painel de controle: `, painelControle);