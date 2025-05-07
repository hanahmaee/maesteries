import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Library from './components/Library/Library'
import About from './components/About/About'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Replace with your homepage */}
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* Add more pages if needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
