import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "./card.css"
import Data from "./Data"
import Header from './Header'

import Card from './Card'





function App() {


const Cards = Data.map(item=>{
  return (
    <Card 
        title = {item.title}
        maplink = {item.googleMapsUrl}
        location = {item.location}
        startdate ={item.startDate}
        enddate = {item.endDate}
        description = {item.description}
        country = {item.location}
        image = {item.image}
    />
  )

})


  return (
    <>
    <Header />
    <div className='dispflex' >
    {Cards}

    </div>
    
        </>
  )
}

export default App
