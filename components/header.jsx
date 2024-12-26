import React, { useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from 'react'


const Header = ()=>{

const [ThemeChanger , setThemeChanger] =useContext(ThemeContext)

    return(
        <header className={`header-content ${ThemeChanger ? "dark" : ""}`}>
        <h1>where in the world</h1>
        <button className="btn1" onClick={
           ()=>{
             setThemeChanger(!ThemeChanger)
            localStorage.setItem('DarkMode:',!ThemeChanger)
           }
            }>
           <i className={`fa-solid fa-${ThemeChanger ? "sun" : "moon"} id="theme" `}></i>
    <span className="theme-btn">{ThemeChanger ? "Light Mode" : "Dark Mode"}

    </span>
        </button>
     </header>
    )}

export default Header;