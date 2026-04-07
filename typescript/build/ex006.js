"use strict";
var Categorias;
(function (Categorias) {
    Categorias[Categorias["Smartphone"] = 0] = "Smartphone";
    Categorias[Categorias["Tablet"] = 1] = "Tablet";
    Categorias[Categorias["Notebook"] = 2] = "Notebook";
})(Categorias || (Categorias = {}));
let resultadoBusca;
resultadoBusca = "Tablet";
let categoriaSelecionada;
if (resultadoBusca === "Tablet") {
    categoriaSelecionada = Categorias.Tablet;
}
let idProduto;
idProduto = undefined;
let erroMensagem;
erroMensagem = null;
console.log("Categoria encontrada: ", categoriaSelecionada);
console.log("Id do produto: ", idProduto);
console.log("Mensagem de erro: ", erroMensagem);
