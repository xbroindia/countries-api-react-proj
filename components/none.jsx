import React from 'react'
import { useParams } from 'react-router-dom'

export default function None(){
    const param = useParams()
    console.log(param)
    return(
        <>
        <h1>Ah Shit here we go again</h1>
        </>
    )
}