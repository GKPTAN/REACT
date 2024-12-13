function logar(user:string,password:string):void{
    console.log(`User..: ${user}`);
    console.log(`Senha: ${password}`);
};

logar("Guilherme", "123");

function soma2(n1:number, n2:number):number {
    let r= n1+n2;
    return r;
};

let n_res:number=soma2(10,5);
let s_res:string=soma2(2,8).toString();
console.log(n_res);
console.log(s_res);