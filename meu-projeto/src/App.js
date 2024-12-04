import './App.css';
import Produtos from './components/Produtos';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import {useState} from 'react';

function MyButton() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick} className="botao">Botão clicado {count} vezes</button>
  );
}

function App() {

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
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
