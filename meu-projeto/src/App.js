import './App.css';
import {useState} from 'react';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick} className="botao">Botão clicado {count} vezes</button>
  );
}

export default App;
