"use strict";
class Computador {
    id;
    nome = "Computador1";
    ram = 0;
    cpu = 0;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    ;
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "sim" : "não"}`);
        console.log("------------------------------");
    }
    ;
    ligar() {
        this.ligado = true;
    }
    ;
    desligar() {
        this.ligado = false;
    }
    ;
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido para a memória ram`);
        }
        ;
    }
    ;
}
;
//instanciar
const comp1 = new Computador("Rapido", 64, 10);
const comp2 = new Computador("Caro", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
comp1.ligar();
comp2.ligar();
comp1.upRam(-100);
comp1.info();
comp2.info();
comp3.info();
