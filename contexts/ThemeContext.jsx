import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export function RetactTheme({children}){

const [ThemeChanger,SetThemeChanger] = useState(
     JSON.parse(localStorage.getItem('DarkMode'))
    )

useEffect(()=>{
    localStorage.setItem('DarkMode',JSON.stringify(ThemeChanger))
})

    return <ThemeContext.Provider value={[ThemeChanger,SetThemeChanger]}>
        {children}
    </ThemeContext.Provider>
}