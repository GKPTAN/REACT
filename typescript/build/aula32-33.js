"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
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
        get potencia() {
            return this.pot;
        }
        ;
    }
    ;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(pot, cilindros, turbo) {
            this.pot = pot + (turbo ? turbo.potencia : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        }
        ;
        set liga(ligado) {
            this.ligado = ligado;
        }
        ;
        get liga() {
            return this.ligado;
        }
        ;
        get potencia() {
            return this.pot;
        }
        ;
    }
    Motores.Motor = Motor;
    ;
})(Motores || (Motores = {}));
;
