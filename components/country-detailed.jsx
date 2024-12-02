import React, { useEffect, useState } from "react"
import Header from "./header"
import { Link, useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import CountryDetailedShimmer from "./countryDetailedShimmer"
import { UseTheme } from "../Hooks/useTheme"

export default function country_detailed(){
let location = useParams()

let {state} = useLocation()
 

const CountryId = location.country
const [countryData,setCountryData] = useState({})
const [loading, setloading] = useState(true)
const [ThemeChanger,setThemeChanger] =UseTheme()


function updateData(country){
    let populationNumber =Number(country.population)
    let Population = populationNumber.toLocaleString("en-IN")
    let NativeName= Object.values(country.name.nativeName).map((native)=>native.common)
    let currencies= Object.values(country.currencies).map((currencies)=>currencies.name)
    let language =Object.values(country.languages).map((lang)=>lang)
    
    
        setCountryData(
                {
                    name:country.name.common || " Name Not Found",
                    nativename:NativeName.join(",") || country.name.common, 
                    population:Population || " Population Not Found",
                    capital:country.capital.join(',') || " Capital Not Found",
                    domain:country.tld.join(',')|| "Domain Not Found ",
                    region:country.region || "Region Not Found",
                    subregion:country.subregion || "Sub Region Not Found",
                    currencies:currencies || "Currencies Not Found",
                    languages:language.join(",") || "Language Not Found",
                    flag:country.flags.svg,
                    borders:[]
                }
            )
    
    
    if(country.borders?.length){
                Promise.all(
                country.borders.map((borderCode)=>{
                return fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
                .then(res => res.json())
                .then((borderData)=> borderData[0].name.common) 
                 }))
                 .then((allborder)=>{
                setCountryData((prevback)=>({...prevback,borders:allborder}))
                setloading(false)
              })
              
            }
            else{
               setloading(false)
            }
              
}


useEffect(
    ()=>{   
        if(state){
            updateData(state)
        }
        else{
            fetch(`https://restcountries.com/v3.1/name/${CountryId}/?fullText=true`)
    .then(res => res.json())
    .then((data) =>{
        updateData(data[0])
    })
    .catch(
        (eror)=>{
        console.log(eror)
        setloading(false)
        }
       )
        }
    },[state,CountryId]
)

if(loading){
    return(
        <div>
            <CountryDetailedShimmer/>
        </div>
    )
}

        return(
            <>  
            <div className={`country-content-data ${ThemeChanger ? "dark" : ""}`}>
            <Header Theme={[ThemeChanger,setThemeChanger]}/>
           <a  id="btn2" onClick={()=>{history.back()}}>
            <i className="fa-solid fa-arrow-right" id="arrow"></i>
            back
           </a>
        <div className="country-data">
            <div className="country-data-img">
            <img src={countryData.flag}/>
        </div>
        <div className="country-info-data">
            <div className="country-info-head">
                <h2>{countryData.name}</h2>
            </div>
        <div className="country-text-data">
        <div className="country-data-txt">
        <div className="country-data-txt-1">
         <p>
            <b>native name:</b>
            <span className="nativeName">
                {countryData.nativename}
                </span></p>
            
         <p>
            <b>population:</b>
            <span className="population">{countryData.population}</span></p>
    
         <p>
            <b>region:</b>
            <span className="region">{countryData.region}</span></p>
    
         <p><b>sub-region:</b>
            <span className="sub-region">{countryData.subregion}</span></p>
        </div>
    
    
        <div className="country-data-txt-2">
         <p>
            <b>capital:</b>
            <span className="capital">{countryData.capital}</span>
        </p>
    
         <p>
            <b>top level domain:</b>
            <span className="top-level-domain">{countryData.domain}</span>
        </p>
    
         <p>
            <b>currencies:</b>
            <span className="currencies">{countryData.currencies}</span>
        </p>
    
         <p>
            <b>Language:</b>
            <span className="Language ">{countryData.languages}</span>
        </p>
    
        </div>
    

        <div className="country-link">
            <p>border countries</p>
            <div className="borders">
            {
                    countryData.borders && countryData.borders.length > 0?(
                        countryData.borders.map((border,indx)=>{
                            return(
                             <Link to={`/${border}`} key={indx} className="link">{border}</Link>
                            )
                        })
                    ):(
                            <div>Country Not Found</div>
        
                    )
                }
            </div>
        </div>
        </div>
        </div>
        </div>
         </div>
        </div>
            </>
        )

  
}