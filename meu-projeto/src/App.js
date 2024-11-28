import './App.css';
import Produtos from './components/Produtos';
import Pessoa from './components/Pessoa';

function MyButton() {

  function handleClick() {
    alert("você clicou no botão");
  }

  return (
    <button onClick={handleClick} className="botao">Botão</button>
  );
}

function App() {

  return (
    <div className="App">
      <MyButton />
      <Produtos nome="Guilherme"/>
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome="Guilherme"
        idade={23}
        profissao="Programador"
      />
    </div>
  );
}

export default App;
