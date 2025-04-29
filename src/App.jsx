import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Library from './components/Library/Library' // <-- create this page if not yet done

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} /> {/* Replace with your homepage */}
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        {/* Add more pages if needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
