import { useEffect, useState } from "react"


export function UseWindows(){
    const [windowSize,SetWindowSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            SetWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        })
    },[])

    return windowSize
}