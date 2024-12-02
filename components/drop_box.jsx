import React, { useState } from 'react'

const Drop_box = ({ChangeData})=>{

    return(
        <div className={`drop-box`}>
            <select className="drop-menue" onChange={(e) => ChangeData(e.target.value.toLowerCase())}>
             <option hidden>Filter by region</option>
             <option value="africa">africa</option>
             <option value="america">america</option>
             <option value="asia">asia</option>
             <option value="Europe">Europe</option>
             <option value="oceania">oceania</option>
            </select>
           </div>
    )}
export default Drop_box;