import './App.css';

function MyButton() {
  return (
    <button className="botao">Botão</button>
  );
}

function App() {
  const name = "Guilherme";

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRHT6KkoBeEvQRWrDKiOuqkpu1G-4LdkULA&s';

  const user = {
    nome: "Guilherme",
    idade: 23
  };

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro app</p>
      <p>olá, {newName}</p>
      <p>soma: {sum(1, 2)}</p>
      <img src={url} alt="kimetsu no yaiba" />
      <p>
        Nome: Guilherme <br />
        Idade: {user.idade}
      </p>
      <MyButton />
    </div>
  );
}

export default App;
