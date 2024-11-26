const objetos = [
    { titulo: 'Caderno', obtido: true, id: 1 },
    { titulo: 'Notebook', obtido: false, id: 2 },
    { titulo: 'Headphone', obtido: true, id: 3 },
];

function Produtos() {
    const listaDeItens = objetos.map(objeto => 
        <li 
            key={objeto.id}
            style={{
                color: objeto.obtido ? 'red' : 'darkblue'
            }}
        >
            {objeto.titulo}
        </li>
    );

    return (
        <div>
            <h2>Produtos obtidos</h2>
            <ul>{listaDeItens}</ul>
        </div>
    )
}

export default Produtos