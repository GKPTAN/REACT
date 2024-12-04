import './App.css';
import Produtos from './components/Produtos';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import {useState} from 'react';
import List from './components/List';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Produtos nome="Guilherme"/>
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome="Guilherme"
        idade={23}
        profissao="Programador"
      />
      <List />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick} className="botao">Botão clicado {count} vezes</button>
  );
}

export default App;
