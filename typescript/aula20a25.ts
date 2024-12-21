class Conta{
    //Public: acessado de qualquer lugar.
    //Private: acessado somente na sua própria classe.
    //Protected: acessado somente na sua própria classe e nas classes filho.
    protected numero:number;
    protected titular:string;
    private saldoConta:number;
    constructor(titular:string){
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
        this.saldoConta=0;
    };
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000) + 1;
    };
    protected info(){
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    };
    get saldo():number{ //getter
        return this.saldoConta;
    };
    set saldo(saldoConta:number){ //setter
        this.saldoConta=saldoConta;
    };
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor inválido");
            return;
        };
        this.saldoConta+=valor;
    };
    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor inválido");
            return;
        };
        if(valor <= this.saldoConta) {
            this.saldoConta-=valor;
        } else {
            console.log('Saldo insuficiente!!!');
        };
    };
};

class ContaPF extends Conta{
    cpf:number;
    constructor(cpf:number,titular:string){
        super(titular);
        this.cpf=cpf;
    };
    info(){
        console.log(`Tipo de conta: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log("--------------------------");
    };
    deposito(valor:number){
        if(valor>1000) {
            console.log('Valor de depósito muito grande para esse tipo de conta');
        } else {
            super.deposito(valor);
        };
    };
    saque(valor:number){
        if(valor>1000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        } else {
            super.saque(valor);
        };
    };
};

class ContaPJ extends Conta{
    cnpj:number;
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj;
    };
    info(){
        console.log(`Tipo de conta: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log("--------------------------");
    };
    deposito(valor:number){
        if(valor>10000) {
            console.log('Valor de depósito muito grande para esse tipo de conta');
        } else {
            super.deposito(valor);
        };
    };
    saque(valor:number){
        if(valor>10000) {
            console.log('Valor de saque muito grande para esse tipo de conta');
        } else {
            super.saque(valor);
        };
    };
};

const cont1=new ContaPF(12375326728, "Gui");
const cont2=new ContaPJ(37653485683, "André");
//cont1.info();
//cont2.info();
cont1.deposito(800);
cont1.deposito(200);
cont1.deposito(1000);
//cont1.saque(100);
cont1.saldo=250;
console.log(cont1.saldo);