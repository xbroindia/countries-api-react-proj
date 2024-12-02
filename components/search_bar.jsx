import React, { useState } from 'react'


const Search_bar= ({ChangeData})=>{
    const [InputData,ChangeInputData] =useState()

    return(
        <div className={`Search_bar`}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="search country" className="search-pol"
        onChange={(e)=>{
            let value = e.target.value.toLowerCase()
            ChangeInputData(value);
            ChangeData(value);
        }}
        />
       </div>
    )}
export default Search_bar;