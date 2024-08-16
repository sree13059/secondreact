import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Add this import
import Header from './Components/Header'

import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Services from './Components/Pages/Services'
import Contact from './Components/Pages/Contact'
import Features from './Components/Pages/Features'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Blog />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={<Services />}/>
          <Route path='/Contacts' element={<Contact />}/>
          <Route path='/Features' element={<Features />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

