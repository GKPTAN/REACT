"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    ;
}
;
class ContaPF extends Conta {
}
;
class ContaPJ extends Conta {
}
;
const cont1 = new ContaPF(123456789, "Gui");
const cont2 = new ContaPF(163296, "André");
console.log(cont1.titular);
console.log(cont2.titular);
