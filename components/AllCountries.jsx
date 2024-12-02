import React from 'react'
import CountryCard from './countryCard'
import React,{useState} from 'react'
import {useEffect} from 'react'
import SkelatonEffect from './skelatonEffect'


const AllCountries =({InputData})=>{

let[countries_data,setcountriesData]=useState([])


useEffect(()=>{fetch('https://restcountries.com/v3.1/all')
  .then((res)=> res.json())
  .then((data)=>{
    setcountriesData(data)
  })
},[])

console.log(InputData)
    return(
      <>
      {!countries_data.length ? <SkelatonEffect/>:
        <div className='countries-container'>
          {
        countries_data.filter((country)=>country.name.common.toLowerCase().includes(InputData) || country.region.toLowerCase().includes(InputData)).map(
              (country)=>{
              return(
              <CountryCard
              key={country.name.common}
              name={country.name.common}
              flags={country.flags.svg}
              population={country.population}
              Region={country.region}
              capital={country.capital?.[0]}
              Name={country.name.common}
              data={country}
              />
                )
          })
          }
        </div> 
        }
        </>
    )}

export default AllCountries