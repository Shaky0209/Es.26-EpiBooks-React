import React, { createContext } from 'react'
import { useState } from 'react';


export const ThemeContext = createContext(null);

export default function TemeContextProvider({children}) {
    const [theme, setTheme] = useState(true);
    const value = {theme, setTheme};
  return (
    <ThemeContext.Provider value={value} >
        {children}
    </ThemeContext.Provider>
  )
}