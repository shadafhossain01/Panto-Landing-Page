import React, { useState } from "react";
import { createContext } from "react";

export const Theme=createContext()

const ThemeContext = ({children}) => {
    const [theme,setTheme]=useState("light")
    const toggleTheme=()=>{
        setTheme(theme == "light" ? "dark" : "light");
    }

    if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
return (
  <>
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  </>
);
};

export default ThemeContext;
