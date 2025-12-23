import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import About from './pages/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Routes>  
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Content />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App