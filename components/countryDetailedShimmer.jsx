import React from 'react'
import Header from './header'
import './countryshimmer.css'
import { UseTheme } from '../Hooks/useTheme'

export default function CountryDetailedShimmer() {

const [ThemeChanger] = UseTheme()

  return (
    <>  
     <Header/>
    <div className={`CountryDetailedShimmer ${ThemeChanger ? 'dark' : ""}`}>
    <div className='CountryDetailedData'>
      <div className='pic'></div>
      <div className='data'>
      <div className='label'></div>
      <div className='label'></div>
      <div className='label'></div>
      <div className='label'></div>
      <div className='label'></div>
      <div className='label'></div>
      </div>
      </div>
    </div>
    </>
  )
}
