"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
        console.log("--------------------------");
    }
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
}
;
const cont1 = new ContaPF(12375326728, "Gui");
const cont2 = new ContaPJ(37653485683, "André");
//cont1.info();
