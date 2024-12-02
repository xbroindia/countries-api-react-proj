import React from 'react'
import './SkelatonEffect.css'
import { UseTheme } from '../Hooks/useTheme'

export default function SkelatonEffect(){

const Mape = Array.from({length:10})


const [ThemeChanger] = UseTheme();



const  SkelatonMape = Mape.map((Skelaton,indx)=> 
<div key={indx} className={`shimmer_Effect ${ThemeChanger ? 'dark' : ''}`}>
<div className="country-img"></div>
<div className='country-head'></div>
<div className='country-text'></div>
<div className='country-text2'></div>
</div> )


  return (
    <div className='countries-container'>
        {SkelatonMape}
        </div>
  )
}
