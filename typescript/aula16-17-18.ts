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

    info():void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado?"sim":"não"}`);
        console.log("------------------------------")
    };

    ligar():void{
        this.ligado=true;
    };

    desligar():void{
        this.ligado=false;
    };
};

//instanciar
const comp1 = new Computador("Rapido", 64, 10);
const comp2 = new Computador("Caro", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

comp1.ligar();
comp2.ligar();

comp1.info();
comp2.info();
comp3.info();