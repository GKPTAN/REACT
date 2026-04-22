"use strict";
class Persona {
    name;
    classe;
    level;
    align;
    constructor(name, classe = "Guerreiro", level = 1, align) {
        this.name = name;
        this.classe = classe;
        this.level = level;
        this.align = align;
    }
    exibirStatus() {
        if (this.align) {
            console.log(`${this.name} (${this.classe} - nível ${this.level}) - alinhamento: ${this.align}`);
        }
        else {
            console.log(`${this.name} (${this.classe} - nível ${this.level}) - sem alinhamento definido`);
        }
    }
}
const persona1 = new Persona("Aragorn");
const persona2 = new Persona("Legolas", "Arqueiro");
const persona3 = new Persona("Gandalf", "Mago", 50, "leal e bom");
persona1.exibirStatus();
persona2.exibirStatus();
persona3.exibirStatus();
