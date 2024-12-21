"use strict";
class Conta {
    //Public: acessado de qualquer lugar.
    //Private: acessado somente na sua própria classe.
    //Protected: acessado somente na sua própria classe e nas classes filho.
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    ;
    get saldo() {
        return this.saldoConta;
    }
    ;
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    ;
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido");
            return;
        }
        ;
        this.saldoConta += valor;
    }
    ;
    saque(valor) {
        if (valor < 0) {
            console.log("Valor inválido");
            return;
        }
        ;
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log('Saldo insuficiente!!!');
        }
        ;
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
    info() {
        console.log(`Tipo de conta: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log("--------------------------");
    }
    ;
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor de depósito muito grande para esse tipo de conta');
        }
        else {
            super.deposito(valor);
        }
        ;
    }
    ;
    saque(valor) {
        if (valor > 1000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        }
        else {
            super.saque(valor);
        }
        ;
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
    info() {
        console.log(`Tipo de conta: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log("--------------------------");
    }
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor de depósito muito grande para esse tipo de conta');
        }
        else {
            super.deposito(valor);
        }
        ;
    }
    ;
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        }
        else {
            super.saque(valor);
        }
        ;
    }
    ;
}
;
const cont1 = new ContaPF(12375326728, "Gui");
const cont2 = new ContaPJ(37653485683, "André");
//cont1.info();
//cont2.info();
cont1.deposito(800);
cont1.deposito(200);
cont1.deposito(1000);
//cont1.saque(100);
cont1.saldo = 250;
console.log(cont1.saldo);
