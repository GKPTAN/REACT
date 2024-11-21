import './App.css';

function MyButton() {
  return (
    <button className="botao">Botão</button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro app</p>
      <MyButton />
    </div>
  );
}

export default App;
