import React, { useState } from 'react'
import About from './components/About/index'
import Work from './components/Work/index'
import Contact from './components/Contact/index'
import Resume from './components/Resume/index'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
