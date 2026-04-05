"use strict";
var Semaforo;
(function (Semaforo) {
    Semaforo[Semaforo["Verde"] = 0] = "Verde";
    Semaforo[Semaforo["Amarelo"] = 1] = "Amarelo";
    Semaforo[Semaforo["Vermelho"] = 2] = "Vermelho";
})(Semaforo || (Semaforo = {}));
let corAtual = Semaforo.Verde;
let painelControle = {
    status: Semaforo.Verde,
    tempoEspera: 30
};
corAtual = Semaforo.Amarelo;
painelControle.status = corAtual;
painelControle.tempoEspera = 5;
console.log(`Semaforo: `, Semaforo);
console.log(`Cor atual: ${corAtual}`);
console.log(`Painel de controle: `, painelControle);
