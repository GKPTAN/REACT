let socios: (number | string)[] = [];
let beneficios: ReadonlyArray<string> = ["Sorteio", "Descontos", "Brindes"];

socios.push("Marcos");
socios.unshift(5500);
socios.pop();
socios.shift();
socios.push("Ana");

console.log(socios);
console.log(beneficios);