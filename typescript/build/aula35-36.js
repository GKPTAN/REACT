"use strict";
let av = [10, 20, 30, 40];
let [aa, bb, cc, dd] = av;
const obj = {
    cor1: "Azul Escuro",
    cor2: "Vermelho Escuro",
    cor3: "Preto",
    cor4: "Branco"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [nu1 = 0, nu2 = 0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const fcores = () => {
    return ["Verde", "Amarelo", "Azul", "Branco"];
};
let [co1, co2, co3, co4] = fcores();
let texto = "Curso de Typescript";
let [...t] = texto.split(" ");
let [pa1, pa2, pa3] = texto.split(" ");
console.log(co1, co2, co3, co4);
console.log(t);
console.log(pa1);
console.log(pa2);
console.log(pa3);
