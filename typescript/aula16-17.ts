class Computador{
    nome:string="Computador1";
    ram:number=0;
    cpu:number=0;
    ligado:boolean;

    constructor(nome:string, ram:number, cpu:number) {
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
        console.log("Novo computador criado");
    };
}

//instanciar
const comp1 = new Computador("Rapido", 64, 10);
const comp2 = new Computador("Caro", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);