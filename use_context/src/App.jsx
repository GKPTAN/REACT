import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import './App.css';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`App ${theme === "#ffffff" ? "light-theme" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
