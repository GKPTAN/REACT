enum Categorias {
    Smartphone,
    Tablet,
    Notebook
}

let resultadoBusca:unknown;
resultadoBusca = "Tablet";

let categoriaSelecionada:Categorias;

if (resultadoBusca === "Tablet") {
    categoriaSelecionada = Categorias.Tablet;
}

let idProduto: number | undefined;
idProduto = undefined;

let erroMensagem:string | null;
erroMensagem = null;

console.log("Categoria encontrada: ", categoriaSelecionada!);
console.log("Id do produto: ", idProduto);
console.log("Mensagem de erro: ", erroMensagem);