import React from "react";
import ReactDOM from "react-dom/client";
import  App from './app'
import {createBrowserRouter,RouterProvider, useRouteError} from 'react-router-dom'
import Country_detailes from "../components/country-detailed";
import Home from "../components/Home";
const router = createBrowserRouter(
    [

        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                  path:"/:country",
                  element:<Country_detailes/>
                }
            ]
        },
       
        // {
        //     path:"/:country",
        //     element:<Country_detailes/>
        // },
        
    ])

let root =ReactDOM.createRoot(document.querySelector(".container"))

root.render(
    <RouterProvider router={router}/>
)
