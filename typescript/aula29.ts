function f_teste<T, U>(v:T, r:U):U{
    return r;
};

console.log(f_teste<number, string>(10, "mad"));

class C_teste<T>{
    valor:T;
    constructor(valor:T){
        this.valor=valor;
    };
};

const ct1=new C_teste<number>(10);
const ct2=new C_teste<string>("his");

console.log(ct1.valor);
console.log(ct2.valor);