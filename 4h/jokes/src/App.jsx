import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JokesData from './JokesData'
import Joke from './Joke'

function App() {
// console.log(JokesData)

const Jokelement = JokesData.map(joke=>
{
  return <Joke setup ={joke.setup} punchline = {joke.punchline} />
}
)






  return (
    <>
  {Jokelement}
    </>
  )
}

export default App
