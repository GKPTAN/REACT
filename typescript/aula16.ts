class Computador{
    nome:string="Computador1";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;
}

const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();

comp1.nome="rapido";
comp2.nome="novato";
comp3.nome="gamer";

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);