"use strict";
function gerarCashback(valorTotal) {
    let cashback = valorTotal * 0.05;
    return cashback;
}
let entradaInvalida;
entradaInvalida = "200";
let valorFinal;
let valorProcessado;
valorProcessado = entradaInvalida;
let valorNumerico = Number(valorProcessado);
valorFinal = gerarCashback(valorNumerico);
let mensagemStatus = valorFinal.toString();
let tentativaDireta;
tentativaDireta = "100";
console.log("--------------------------------------------------------\n");
console.log("Tipo do valor final: ", typeof valorFinal);
console.log("Valor final do cashback: ", valorFinal);
console.log("Tipo de valor de mensagemStatus: ", typeof mensagemStatus);
console.log("Valor de tentativaDireta: ", tentativaDireta + 10, "\n");
console.log("--------------------------------------------------------");
