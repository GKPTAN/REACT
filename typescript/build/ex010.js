"use strict";
const calculateTotal = (prices) => {
    let total = 15;
    const valor = prices.forEach((v) => {
        total += v;
    });
    return total;
};
const displayReceipt = (client = "Consumidor", number) => {
    console.log(`${client} - Valor total (com taxas): R$ ${number}`);
};
const carrinho = [50, 10, 40];
const purchaseValue = calculateTotal(carrinho);
console.log("----------------------------------");
displayReceipt("Guilherme", purchaseValue);
displayReceipt(undefined, purchaseValue);
console.log("----------------------------------");
