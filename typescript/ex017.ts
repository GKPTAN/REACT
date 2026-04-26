class Vehicle {
    constructor(
        public brand: string,
        protected baseValue: number,
    ) {}

    showTable(): void {
        console.log(`
            Marca: ${this.brand} | Valor base: ${this.baseValue}
        `)
    }
}

class Car extends Vehicle {
    constructor(brand: string, baseValue: number, public doors: number) {
        super(brand, baseValue);
    }

    calculateRent(): number {
        return this.baseValue + (this.doors * 10)
    }

    showTable(): void {
        super.showTable();
        console.log(`
            Aluguel do carro: R$ ${this.calculateRent()}
            ----------------------------------------------------
        `)
    }
}

class Motorcycle extends Vehicle {
    constructor(
        public cilindradas: number,
        brand: string,
        baseValue: number,
    ) {
        super(brand, baseValue);
    }

    calculateRent(): number {
        if (this.cilindradas > 500) {
            return this.baseValue + 50
        } else {
            return this.baseValue
        }
    }

    showTable(): void {
        super.showTable();
        console.log(`
            Aluguel da moto: R$ ${this.calculateRent()}
            ----------------------------------------------------
        `)
    }
}

const car1 = new Car("Toyota", 100, 4);
car1.showTable();
const motorcycle1 = new Motorcycle(600, "honda", 50);
motorcycle1.showTable();