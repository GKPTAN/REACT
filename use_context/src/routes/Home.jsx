import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toogleTheme } = useContext(ThemeContext);

  //useState - 1° etapa - visualizar o valor, alterar o valor;
  const [valor, setValor] = useState();

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>O tema atual é: {theme}</p>
      <button onClick={toogleTheme}>Mudar tema</button>
      <div>
        <h2>Valor do input com react</h2>
        <input type="text" onChange={handleChange}/>
        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Home;
