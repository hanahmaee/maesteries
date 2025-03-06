import React from 'react'
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'

const App = () => { 
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <About/>
    </div>
  )
}

export default App