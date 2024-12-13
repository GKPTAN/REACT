"use strict";
function logar(user, password) {
    console.log(`User..: ${user}`);
    console.log(`Senha: ${password}`);
}
;
logar("Guilherme", "123");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
;
let n_res = soma2(10, 5);
let s_res = soma2(2, 8).toString();
console.log(n_res);
console.log(s_res);
