import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <div className=' inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <Navbar />
        <Manager />
        <Footer />
      </div>
    </div>
  )
}

export default App
