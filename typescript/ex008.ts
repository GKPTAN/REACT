function gerarCashback(valorTotal: number): number {
    let cashback = valorTotal * 0.05;
    return cashback;
}

let entradaInvalida: unknown;
entradaInvalida = "200";

let valorFinal: number;

let valorProcessado: string;

valorProcessado = <string>entradaInvalida;

let valorNumerico: number = Number(valorProcessado);

valorFinal = gerarCashback(valorNumerico);

let mensagemStatus: string = valorFinal.toString();

let tentativaDireta: number;
tentativaDireta = <number><unknown>"100";

console.log("--------------------------------------------------------\n");
console.log("Tipo do valor final: ", typeof valorFinal);
console.log("Valor final do cashback: ", valorFinal);
console.log("Tipo de valor de mensagemStatus: ", typeof mensagemStatus);
console.log("Valor de tentativaDireta: ", tentativaDireta + 10, "\n");
console.log("--------------------------------------------------------");