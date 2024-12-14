import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState();

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>State Lift</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick} className="botao">Botão clicado {count} vezes</button>
  );
}

export default App;
