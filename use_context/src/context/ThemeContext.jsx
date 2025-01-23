import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("#242424");

    const toogleTheme = () => {
        setTheme(theme === "#242424" ? "#ffffff" : "#242424");
    };

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>{children}</ThemeContext.Provider>
    );
};