import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Slider from './components/Slider'
import './App.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
    </>
  )
}

export default App
