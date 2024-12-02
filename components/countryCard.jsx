import React from 'react'
import { Link } from 'react-router-dom'
const CountryCard =({name,flags,population,Region,capital,data})=>{
    return(
        <Link className="country" to={`/${name}`} state={data}>
            <div>
                <div className="flag-container"><img src={flags}/></div>
                <div className='country-card-info'>
                <h3>{name}</h3>
                <p><b>Population :</b>{population.toLocaleString('en-IN')}</p>
                <p><b>Region :</b>{Region}</p>
                <p><b>Capital :</b>{capital}</p>
                </div>
            </div>
         </Link>
    )}  

export default CountryCard