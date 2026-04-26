"use strict";
class Vehicle {
    brand;
    baseValue;
    constructor(brand, baseValue) {
        this.brand = brand;
        this.baseValue = baseValue;
    }
    showTable() {
        console.log(`
            Marca: ${this.brand} | Valor base: ${this.baseValue}
        `);
    }
}
class Car extends Vehicle {
    doors;
    constructor(brand, baseValue, doors) {
        super(brand, baseValue);
        this.doors = doors;
    }
    calculateRent() {
        return this.baseValue + (this.doors * 10);
    }
    showTable() {
        super.showTable();
        console.log(`
            Aluguel do carro: R$ ${this.calculateRent()}
            ----------------------------------------------------
        `);
    }
}
class Motorcycle extends Vehicle {
    cilindradas;
    constructor(cilindradas, brand, baseValue) {
        super(brand, baseValue);
        this.cilindradas = cilindradas;
    }
    calculateRent() {
        if (this.cilindradas > 500) {
            return this.baseValue + 50;
        }
        else {
            return this.baseValue;
        }
    }
    showTable() {
        super.showTable();
        console.log(`
            Aluguel da moto: R$ ${this.calculateRent()}
            ----------------------------------------------------
        `);
    }
}
const car1 = new Car("Toyota", 100, 4);
car1.showTable();
const motorcycle1 = new Motorcycle(600, "honda", 50);
motorcycle1.showTable();
