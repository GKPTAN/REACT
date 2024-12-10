//NULL/NULO - UNDEFINED/INDEFINIDO - UNKNOWN/DESCONHECIDO
//NULL - Tipo Nulo
let vvnome:string|null;
vvnome=null;
console.log(vvnome)

//UNDEFINED - Tipo indefinido
let vnome2;
console.log(vnome2);

//UNKNOWN - Tipo desconhecido que só pode ser atribuído em tipos UNKNOWN ou ANY
let vnome3:unknown=vvnome;
let vnum:any=vnome3;
console.log(vnum);