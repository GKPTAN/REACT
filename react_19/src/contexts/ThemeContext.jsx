import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("escuro");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "escuro" ? "claro" : "escuro"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export {ThemeContext, ThemeProvider};