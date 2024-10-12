import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Hero from './hero'
import Data from './Data'

import Card from './card'

function App() {

  const cards = Data.map(item=>
  {
   
    return (
    <Card 
        key = {item.id}
        image ={item.coverImg}
        ratings = {item.stats.rating}
        reviewcount = {item.stats.reviewCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
    />
    )
  })

  return (
    <>
    <Header /> 
    <Hero />
    <div className='container'>
    {cards}

    </div>


    </>
  )
}

export default App
