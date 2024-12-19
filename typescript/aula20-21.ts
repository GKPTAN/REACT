class Conta{
    numero:number;
    titular:string;
    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
    };
    gerarNumeroConta():number{
        return Math.floor(Math.random()*100000) + 1;
    };
};

class ContaPF extends Conta{
    cpf:number;
    constructor(cpf:number,titular:string){
        super(titular);
        this.cpf=cpf;
    }
};

class ContaPJ extends Conta{
    cnpj:number;
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj;
    }
};

const cont1=new ContaPF(12375326728, "Gui");
const cont2=new ContaPJ(37653485683, "André");

console.log(cont1.titular);
console.log(cont1.numero);