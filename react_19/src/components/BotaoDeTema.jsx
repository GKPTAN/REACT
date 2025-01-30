import { use } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BotaoDeTema = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button onClick={toggleTheme} className={theme}>
      Alterar tema para {theme === "escuro" ? "claro" : "escuro"}
    </button>
  );
};

export default BotaoDeTema;
