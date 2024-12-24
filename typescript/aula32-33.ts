namespace Veiculos{
    export abstract class Carro{
        nome:string;
        motor:Motores.Motor;
        constructor(nome:string){
            this.nome=nome;
            this.motor= new Motores.Motor(3, 100);
        };
    };
};

namespace Motores{

    class Turbo{
        private pot:number;
        constructor(pot:number){
            this.pot=pot;
        };
        get potencia(){
            return this.pot;
        };
    };

    export class Motor{
        private ligado:boolean;
        private cilindros:number;
        private pot:number;
        constructor(pot:number, cilindros:number, turbo?:Turbo){
            this.pot=pot + (turbo?turbo.potencia:0);
            this.ligado=false;
            this.cilindros=cilindros;
        };
        set liga(ligado:boolean){
            this.ligado=ligado;
        };
        get liga(){
            return this.ligado;
        };
        get potencia(){
            return this.pot;
        };
    };
};