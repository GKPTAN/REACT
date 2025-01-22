import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link> {/* 11 - Link é um componente que leva até uma página correspondente ao ser clicado */}
        <Link to="/contact">Contato</Link>
    </nav>
  );
};

export default Navbar