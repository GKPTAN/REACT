"use strict";
class RestaurantTable {
    tableNumber;
    orders = [];
    constructor(tableNumber) {
        this.tableNumber = tableNumber;
        this.tableNumber = tableNumber;
    }
    adicionarPedidos(...newOrders) {
        this.orders = [...this.orders, ...newOrders];
    }
    calculateTotal() {
        const totalValue = this.orders.reduce((a, b) => a + b);
        return totalValue;
    }
    closeBill(rateService = 0.10) {
        const valueBillInitial = this.calculateTotal();
        let valueBillFinal = valueBillInitial + (valueBillInitial * rateService);
        console.log(`
            ---------- Mesa ${this.tableNumber} ----------\n
            Total do itens: R$ ${valueBillInitial} \n
            Total com taxa de serviço (10%): R$ ${valueBillFinal.toFixed(2)} \n
            ----------------------------------------------
        `);
    }
}
const drinks = [15.50, 8.00];
const mainDishes = [45.90, 62.00];
const mesa1 = new RestaurantTable(5);
mesa1.adicionarPedidos(22.50);
mesa1.adicionarPedidos(...drinks, ...mainDishes);
mesa1.closeBill();
