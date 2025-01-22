import Navbar from './components/Navbar';
import './App.css';

// 5 - reaproveitamento de estrutura;
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <h1>React Router</h1>
        <Outlet /> {/* 6 - Todas as rotas vão ser inseridas no componente Outlet */}
        <p>Footer</p>
      </div>
    </>
  );
};

export default App
