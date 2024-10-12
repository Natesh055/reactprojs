import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Maincont from './Maincont'
import Footer from './Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Maincont />
    <Footer />
    </>
  )
}

export default App
