"use strict";
class Computador {
    nome = "Computador1";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = "rapido";
comp2.nome = "novato";
comp3.nome = "gamer";
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
