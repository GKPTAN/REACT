"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
        ;
    }
    Veiculos.Carro = Carro;
    ;
})(Veiculos || (Veiculos = {}));
;
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        ;
    }
    ;
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        ;
    }
    Motores.Motor = Motor;
    ;
})(Motores || (Motores = {}));
;
const car1 = new Veiculos.Carro('rapido');
console.log(car1.nome);
console.log(car1.motor);
