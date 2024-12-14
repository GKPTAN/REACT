import './App.css';
import {useState} from 'react';
import Condicional from './components/Condicional';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Condicional />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick} className="botao">Botão clicado {count} vezes</button>
  );
}

export default App;
