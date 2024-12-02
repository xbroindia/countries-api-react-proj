import React from 'react'
import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { RetactTheme } from '../contexts/ThemeContext'


const App = ()=>{
    const [ThemeChanger, setThemeChanger] = useState(JSON.parse(localStorage.getItem('DarkMode')))

    return(
        <RetactTheme>
        <Outlet/>
        </RetactTheme>
    )
}

export default App;