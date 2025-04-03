import React from 'react'
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

const App = () => { 
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App