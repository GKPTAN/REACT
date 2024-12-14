import './App.css';
import {useState} from 'react';
import SegundaLista from './components/SegundaLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular'];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <SegundaLista itens={meusItens} />
      <SegundaLista itens={[]} />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick} className="botao">Botão clicado {count} vezes</button>
  );
}

export default App;
