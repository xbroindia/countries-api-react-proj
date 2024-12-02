import React, { useContext, useState } from 'react'
import Header from './header'
import Search_bar from './search_bar'
import AllCountries from './AllCountries'
import Drop_box from './drop_box'
import { UseTheme } from '../Hooks/useTheme'


export default function Home() {
  const [InputData,ChangeData] =useState("")

 const [ThemeChanger] = UseTheme()

 
  return(
    <>
        <div className={`contentContianerData ${ThemeChanger ? "dark" : ""}`}>
        <Header />
        <div className="search_drop_menue">
        <Search_bar ChangeData={ChangeData}/>
        <Drop_box   ChangeData={ChangeData}/>
        </div>
        <AllCountries InputData={InputData}/>
        </div>
        </>
  )
}
