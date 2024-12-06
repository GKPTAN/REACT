let dados={
    nome: "Guilherme",
    idade: 23,
    status: "ativo",
    ola:()=>{console.log("oi")},
    info:(p:string)=>{console.log(p)}
}

dados.nome="João";
console.log(typeof(dados));
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);