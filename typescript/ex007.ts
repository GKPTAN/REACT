let tValor: unknown;
tValor = "500";

let sValor: string;
sValor = <string>tValor;

let nValor: number;
nValor = Number.parseInt(sValor);

let forceNumber: number;
forceNumber = <number><unknown>sValor;

nValor += 100;
console.log("Tipo: ", typeof nValor);
console.log("Valor: ", nValor);